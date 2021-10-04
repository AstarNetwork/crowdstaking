/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface CrowdstakeInterface extends ethers.utils.Interface {
  functions: {
    "alive_from()": FunctionFragment;
    "claim()": FunctionFragment;
    "collator()": FunctionFragment;
    "collator_fee()": FunctionFragment;
    "lock_duration()": FunctionFragment;
    "paid(address)": FunctionFragment;
    "portion(address)": FunctionFragment;
    "refund()": FunctionFragment;
    "setKeys(bytes)": FunctionFragment;
    "stake()": FunctionFragment;
    "terminate()": FunctionFragment;
    "total_income()": FunctionFragment;
    "total_paid()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "alive_from",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "claim", values?: undefined): string;
  encodeFunctionData(functionFragment: "collator", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "collator_fee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lock_duration",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "paid", values: [string]): string;
  encodeFunctionData(functionFragment: "portion", values: [string]): string;
  encodeFunctionData(functionFragment: "refund", values?: undefined): string;
  encodeFunctionData(functionFragment: "setKeys", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "stake", values?: undefined): string;
  encodeFunctionData(functionFragment: "terminate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "total_income",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "total_paid",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "alive_from", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "collator", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "collator_fee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lock_duration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "paid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "portion", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "refund", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setKeys", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "terminate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "total_income",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "total_paid", data: BytesLike): Result;

  events: {
    "Alive()": EventFragment;
    "NewKeys(bytes)": EventFragment;
    "Refund(address,uint256)": EventFragment;
    "Reward(address,uint256)": EventFragment;
    "Stake(address,uint256)": EventFragment;
    "Terminate()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Alive"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewKeys"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Refund"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Reward"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Stake"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Terminate"): EventFragment;
}

export class Crowdstake extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: CrowdstakeInterface;

  functions: {
    alive_from(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "alive_from()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    claim(overrides?: Overrides): Promise<ContractTransaction>;

    "claim()"(overrides?: Overrides): Promise<ContractTransaction>;

    collator(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "collator()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    collator_fee(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "collator_fee()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    lock_duration(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "lock_duration()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    paid(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "paid(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    portion(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "portion(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    refund(overrides?: Overrides): Promise<ContractTransaction>;

    "refund()"(overrides?: Overrides): Promise<ContractTransaction>;

    setKeys(
      keys: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setKeys(bytes)"(
      keys: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    stake(overrides?: PayableOverrides): Promise<ContractTransaction>;

    "stake()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

    terminate(overrides?: Overrides): Promise<ContractTransaction>;

    "terminate()"(overrides?: Overrides): Promise<ContractTransaction>;

    total_income(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "total_income()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    total_paid(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "total_paid()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;
  };

  alive_from(overrides?: CallOverrides): Promise<BigNumber>;

  "alive_from()"(overrides?: CallOverrides): Promise<BigNumber>;

  claim(overrides?: Overrides): Promise<ContractTransaction>;

  "claim()"(overrides?: Overrides): Promise<ContractTransaction>;

  collator(overrides?: CallOverrides): Promise<string>;

  "collator()"(overrides?: CallOverrides): Promise<string>;

  collator_fee(overrides?: CallOverrides): Promise<BigNumber>;

  "collator_fee()"(overrides?: CallOverrides): Promise<BigNumber>;

  lock_duration(overrides?: CallOverrides): Promise<BigNumber>;

  "lock_duration()"(overrides?: CallOverrides): Promise<BigNumber>;

  paid(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "paid(address)"(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  portion(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "portion(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  refund(overrides?: Overrides): Promise<ContractTransaction>;

  "refund()"(overrides?: Overrides): Promise<ContractTransaction>;

  setKeys(keys: BytesLike, overrides?: Overrides): Promise<ContractTransaction>;

  "setKeys(bytes)"(
    keys: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  stake(overrides?: PayableOverrides): Promise<ContractTransaction>;

  "stake()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

  terminate(overrides?: Overrides): Promise<ContractTransaction>;

  "terminate()"(overrides?: Overrides): Promise<ContractTransaction>;

  total_income(overrides?: CallOverrides): Promise<BigNumber>;

  "total_income()"(overrides?: CallOverrides): Promise<BigNumber>;

  total_paid(overrides?: CallOverrides): Promise<BigNumber>;

  "total_paid()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    alive_from(overrides?: CallOverrides): Promise<BigNumber>;

    "alive_from()"(overrides?: CallOverrides): Promise<BigNumber>;

    claim(overrides?: CallOverrides): Promise<void>;

    "claim()"(overrides?: CallOverrides): Promise<void>;

    collator(overrides?: CallOverrides): Promise<string>;

    "collator()"(overrides?: CallOverrides): Promise<string>;

    collator_fee(overrides?: CallOverrides): Promise<BigNumber>;

    "collator_fee()"(overrides?: CallOverrides): Promise<BigNumber>;

    lock_duration(overrides?: CallOverrides): Promise<BigNumber>;

    "lock_duration()"(overrides?: CallOverrides): Promise<BigNumber>;

    paid(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "paid(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    portion(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "portion(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    refund(overrides?: CallOverrides): Promise<void>;

    "refund()"(overrides?: CallOverrides): Promise<void>;

    setKeys(keys: BytesLike, overrides?: CallOverrides): Promise<void>;

    "setKeys(bytes)"(keys: BytesLike, overrides?: CallOverrides): Promise<void>;

    stake(overrides?: CallOverrides): Promise<void>;

    "stake()"(overrides?: CallOverrides): Promise<void>;

    terminate(overrides?: CallOverrides): Promise<void>;

    "terminate()"(overrides?: CallOverrides): Promise<void>;

    total_income(overrides?: CallOverrides): Promise<BigNumber>;

    "total_income()"(overrides?: CallOverrides): Promise<BigNumber>;

    total_paid(overrides?: CallOverrides): Promise<BigNumber>;

    "total_paid()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    Alive(): EventFilter;

    NewKeys(keys: BytesLike | null): EventFilter;

    Refund(staker: string | null, value: BigNumberish | null): EventFilter;

    Reward(staker: string | null, value: BigNumberish | null): EventFilter;

    Stake(staker: string | null, value: BigNumberish | null): EventFilter;

    Terminate(): EventFilter;
  };

  estimateGas: {
    alive_from(overrides?: CallOverrides): Promise<BigNumber>;

    "alive_from()"(overrides?: CallOverrides): Promise<BigNumber>;

    claim(overrides?: Overrides): Promise<BigNumber>;

    "claim()"(overrides?: Overrides): Promise<BigNumber>;

    collator(overrides?: CallOverrides): Promise<BigNumber>;

    "collator()"(overrides?: CallOverrides): Promise<BigNumber>;

    collator_fee(overrides?: CallOverrides): Promise<BigNumber>;

    "collator_fee()"(overrides?: CallOverrides): Promise<BigNumber>;

    lock_duration(overrides?: CallOverrides): Promise<BigNumber>;

    "lock_duration()"(overrides?: CallOverrides): Promise<BigNumber>;

    paid(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "paid(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    portion(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "portion(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    refund(overrides?: Overrides): Promise<BigNumber>;

    "refund()"(overrides?: Overrides): Promise<BigNumber>;

    setKeys(keys: BytesLike, overrides?: Overrides): Promise<BigNumber>;

    "setKeys(bytes)"(
      keys: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    stake(overrides?: PayableOverrides): Promise<BigNumber>;

    "stake()"(overrides?: PayableOverrides): Promise<BigNumber>;

    terminate(overrides?: Overrides): Promise<BigNumber>;

    "terminate()"(overrides?: Overrides): Promise<BigNumber>;

    total_income(overrides?: CallOverrides): Promise<BigNumber>;

    "total_income()"(overrides?: CallOverrides): Promise<BigNumber>;

    total_paid(overrides?: CallOverrides): Promise<BigNumber>;

    "total_paid()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    alive_from(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "alive_from()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claim(overrides?: Overrides): Promise<PopulatedTransaction>;

    "claim()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    collator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "collator()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    collator_fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "collator_fee()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lock_duration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lock_duration()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paid(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "paid(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    portion(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "portion(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    refund(overrides?: Overrides): Promise<PopulatedTransaction>;

    "refund()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    setKeys(
      keys: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setKeys(bytes)"(
      keys: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    stake(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    "stake()"(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    terminate(overrides?: Overrides): Promise<PopulatedTransaction>;

    "terminate()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    total_income(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "total_income()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    total_paid(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "total_paid()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}