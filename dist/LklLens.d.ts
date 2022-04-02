import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type PoolDetailsStruct = {
    baseReserves: BigNumberish;
    bondReserves: BigNumberish;
    totalSupply: BigNumberish;
    expiration: BigNumberish;
    tokenDecimals: BigNumberish;
    unitSeconds: BigNumberish;
};
export declare type PoolDetailsStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
] & {
    baseReserves: BigNumber;
    bondReserves: BigNumber;
    totalSupply: BigNumber;
    expiration: BigNumber;
    tokenDecimals: BigNumber;
    unitSeconds: BigNumber;
};
export interface LklLensInterface extends utils.Interface {
    functions: {
        "calculateSwap(address,uint256,bool,bool)": FunctionFragment;
        "getPoolDetails(address)": FunctionFragment;
        "getYieldExponent(uint256,uint256)": FunctionFragment;
        "solveTradeInvariant(uint256,uint256,uint256,uint256,bool)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "calculateSwap", values: [string, BigNumberish, boolean, boolean]): string;
    encodeFunctionData(functionFragment: "getPoolDetails", values: [string]): string;
    encodeFunctionData(functionFragment: "getYieldExponent", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "solveTradeInvariant", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, boolean]): string;
    decodeFunctionResult(functionFragment: "calculateSwap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPoolDetails", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getYieldExponent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "solveTradeInvariant", data: BytesLike): Result;
    events: {};
}
export interface LklLens extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LklLensInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        calculateSwap(pool: string, amount: BigNumberish, baseAssetIn: boolean, out: boolean, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPoolDetails(pool: string, overrides?: CallOverrides): Promise<[
            PoolDetailsStructOutput
        ] & {
            poolInfo: PoolDetailsStructOutput;
        }>;
        getYieldExponent(expiration: BigNumberish, unitSeconds: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        solveTradeInvariant(amountX: BigNumberish, reserveX: BigNumberish, reserveY: BigNumberish, a: BigNumberish, out: boolean, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    calculateSwap(pool: string, amount: BigNumberish, baseAssetIn: boolean, out: boolean, overrides?: CallOverrides): Promise<BigNumber>;
    getPoolDetails(pool: string, overrides?: CallOverrides): Promise<PoolDetailsStructOutput>;
    getYieldExponent(expiration: BigNumberish, unitSeconds: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    solveTradeInvariant(amountX: BigNumberish, reserveX: BigNumberish, reserveY: BigNumberish, a: BigNumberish, out: boolean, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        calculateSwap(pool: string, amount: BigNumberish, baseAssetIn: boolean, out: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        getPoolDetails(pool: string, overrides?: CallOverrides): Promise<PoolDetailsStructOutput>;
        getYieldExponent(expiration: BigNumberish, unitSeconds: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        solveTradeInvariant(amountX: BigNumberish, reserveX: BigNumberish, reserveY: BigNumberish, a: BigNumberish, out: boolean, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        calculateSwap(pool: string, amount: BigNumberish, baseAssetIn: boolean, out: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        getPoolDetails(pool: string, overrides?: CallOverrides): Promise<BigNumber>;
        getYieldExponent(expiration: BigNumberish, unitSeconds: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        solveTradeInvariant(amountX: BigNumberish, reserveX: BigNumberish, reserveY: BigNumberish, a: BigNumberish, out: boolean, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        calculateSwap(pool: string, amount: BigNumberish, baseAssetIn: boolean, out: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPoolDetails(pool: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getYieldExponent(expiration: BigNumberish, unitSeconds: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        solveTradeInvariant(amountX: BigNumberish, reserveX: BigNumberish, reserveY: BigNumberish, a: BigNumberish, out: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
