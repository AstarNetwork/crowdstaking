//SPDX-License-Identifier: Apache-2.0 
pragma solidity ^0.8.0;

import './Crowdstake.sol';

contract CrowdstakeFactory {
    // @dev emits when new crowdstake instance spawned
    event NewCrowdstake(address indexed instance);

    // @dev list of crowdstake instances
    mapping(uint256 => address) public instances;
    
    // @dev latest instance
    uint256 public last_instance = 0;

    /**
     * @dev create new crowdstaking instance
     */
    function create(
        uint256 duration_days,
        uint256 fee_percent
    ) external returns (address instance){
        instance = address(new Crowdstake(
            msg.sender,
            duration_days,
            fee_percent
        ));
        emit NewCrowdstake(instance);
        instances[last_instance++] = instance;
    }
}

