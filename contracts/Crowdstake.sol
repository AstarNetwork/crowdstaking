//SPDX-License-Identifier: Apache-2.0 
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import './Staking.sol';

contract Crowdstake {
    using SafeMath for uint256;

    // @dev how much token required for stake
    uint256 constant STAKING_AMOUNT = 32000 ether;

    // @dev staking precompile
    Staking _staking = Staking(0x0000000000000000000000000000000000005000);

    // @dev stake accepted
    event Stake(address indexed staker, uint256 indexed value);

    // @dev reward claimed
    event Reward(address indexed staker, uint256 indexed value);

    // @dev stake refunded
    event Refund(address indexed staker, uint256 indexed value);
    
    // @dev collator runned
    event Alive();

    // @dev collator stoped
    event Terminate();

    // @dev collator set session keys
    event NewKeys(bytes indexed keys);
    
    // @dev stakers portion
    mapping(address => uint256) public portion;

    // @dev stakers payout
    mapping(address => uint256) public paid;

    // @dev locking duration in blocks
    uint256 public lock_duration;

    // @dev collator account address
    address public collator;

    // @dev collator fee in %
    uint256 public collator_fee;
    
    // @dev total received rewards
    uint256 public total_income = 0;

    // @dev total claimed rewards
    uint256 public total_paid = 0;

    // @dev block number for collation starting 
    uint256 public alive_from = 0;

    modifier onInit {
        require(alive_from == 0, "onboarding already finished");
        _;
    }

    modifier onRun {
        require(alive_from > 0 && block.number < alive_from.add(lock_duration), "alive window is out");
        // fix balance differences each time when call
        uint256 last_balance = total_income.sub(total_paid, "internal balance error: paid > income");
        total_income += address(this).balance.sub(last_balance, "internal balance error: last > current");
        _;
    }

    modifier onTerminate {
        require(block.number > alive_from.add(lock_duration), "lock isn't finished");
        _;
    }

    modifier onlyCollator {
        require(msg.sender == collator, "collator only call");
        _;
    }

    /**
     * @dev create new crowdstaking instance
     */
    constructor(
        address collator_account,
        uint256 duration_days,
        uint256 fee_percent
    ) {
        require(fee_percent >= 0 && fee_percent <= 100, "fee should be in 0-100% range");
        lock_duration = duration_days * 1 days;
        collator = collator_account;
        collator_fee = fee_percent;
    }
    
    /**
     * @dev set collator session keys
     * @notice for contract owner only
     */
    function setKeys(bytes calldata keys) external onlyCollator onInit {
        emit NewKeys(keys);
        _staking.set_keys(keys);
    }
    
    /**
     * @dev stake for collator
     * @notice your stake will be locked until collator isn't gone
     */
    function stake() external payable onInit {
        require(msg.value + address(this).balance <= STAKING_AMOUNT, "staking overflow");
        
        portion[msg.sender] += msg.value;
        emit Stake(msg.sender, msg.value);
        
        
        if (address(this).balance == STAKING_AMOUNT) {
            _staking.register_as_candidate();
            alive_from = block.number;
            emit Alive();
        }
    }

    /**
     * @dev claim rewards
     */
    function claim() external onRun {
        uint256 free_reward = _total_reward(msg.sender) - paid[msg.sender];
        paid[msg.sender] += free_reward;
        emit Reward(msg.sender, free_reward);
        payable(msg.sender).transfer(free_reward);
    }

    /**
     * @dev terminate collator and request to refund staked funds
     */
    function terminate() external onTerminate {
        _staking.purge_keys();
        emit Terminate();
    }
    
    /**
     * @dev refund staked balance
     */
    function refund() external onTerminate {
        uint256 value = portion[msg.sender];
        emit Refund(msg.sender, value);
        payable(msg.sender).transfer(value);
    }

    function _total_reward(address account) internal view returns (uint256) {
        if (account == collator) {
            return _collator_reward();
        } else {
            return total_income.sub(_collator_reward(), "IE").mul(portion[account]).div(STAKING_AMOUNT);
        }
    }

    function _collator_reward() internal view returns (uint256) {
        return total_income.mul(collator_fee).div(100);
    }
}

