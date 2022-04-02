import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IAaveIncentivesControllerInterface extends utils.Interface {
    functions: {
        "DISTRIBUTION_END()": FunctionFragment;
        "PRECISION()": FunctionFragment;
        "REWARD_TOKEN()": FunctionFragment;
        "assets(address)": FunctionFragment;
        "claimRewards(address[],uint256,address)": FunctionFragment;
        "claimRewardsOnBehalf(address[],uint256,address,address)": FunctionFragment;
        "configureAssets(address[],uint256[])": FunctionFragment;
        "getAssetData(address)": FunctionFragment;
        "getClaimer(address)": FunctionFragment;
        "getRewardsBalance(address[],address)": FunctionFragment;
        "getUserAssetData(address,address)": FunctionFragment;
        "getUserUnclaimedRewards(address)": FunctionFragment;
        "handleAction(address,uint256,uint256)": FunctionFragment;
        "setClaimer(address,address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "DISTRIBUTION_END", values?: undefined): string;
    encodeFunctionData(functionFragment: "PRECISION", values?: undefined): string;
    encodeFunctionData(functionFragment: "REWARD_TOKEN", values?: undefined): string;
    encodeFunctionData(functionFragment: "assets", values: [string]): string;
    encodeFunctionData(functionFragment: "claimRewards", values: [string[], BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "claimRewardsOnBehalf", values: [string[], BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "configureAssets", values: [string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getAssetData", values: [string]): string;
    encodeFunctionData(functionFragment: "getClaimer", values: [string]): string;
    encodeFunctionData(functionFragment: "getRewardsBalance", values: [string[], string]): string;
    encodeFunctionData(functionFragment: "getUserAssetData", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getUserUnclaimedRewards", values: [string]): string;
    encodeFunctionData(functionFragment: "handleAction", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setClaimer", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "DISTRIBUTION_END", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PRECISION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "REWARD_TOKEN", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewardsOnBehalf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "configureAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getClaimer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRewardsBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserAssetData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserUnclaimedRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handleAction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setClaimer", data: BytesLike): Result;
    events: {
        "ClaimerSet(address,address)": EventFragment;
        "RewardsAccrued(address,uint256)": EventFragment;
        "RewardsClaimed(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ClaimerSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardsAccrued"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardsClaimed"): EventFragment;
}
export declare type ClaimerSetEvent = TypedEvent<[
    string,
    string
], {
    user: string;
    claimer: string;
}>;
export declare type ClaimerSetEventFilter = TypedEventFilter<ClaimerSetEvent>;
export declare type RewardsAccruedEvent = TypedEvent<[
    string,
    BigNumber
], {
    user: string;
    amount: BigNumber;
}>;
export declare type RewardsAccruedEventFilter = TypedEventFilter<RewardsAccruedEvent>;
export declare type RewardsClaimed_address_address_uint256_Event = TypedEvent<[
    string,
    string,
    BigNumber
], {
    user: string;
    to: string;
    amount: BigNumber;
}>;
export declare type RewardsClaimed_address_address_uint256_EventFilter = TypedEventFilter<RewardsClaimed_address_address_uint256_Event>;
export declare type RewardsClaimed_address_address_address_uint256_Event = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], {
    user: string;
    to: string;
    claimer: string;
    amount: BigNumber;
}>;
export declare type RewardsClaimed_address_address_address_uint256_EventFilter = TypedEventFilter<RewardsClaimed_address_address_address_uint256_Event>;
export interface IAaveIncentivesController extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAaveIncentivesControllerInterface;
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
        DISTRIBUTION_END(overrides?: CallOverrides): Promise<[BigNumber]>;
        PRECISION(overrides?: CallOverrides): Promise<[number]>;
        REWARD_TOKEN(overrides?: CallOverrides): Promise<[string]>;
        assets(asset: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        claimRewards(assets: string[], amount: BigNumberish, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimRewardsOnBehalf(assets: string[], amount: BigNumberish, user: string, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        configureAssets(assets: string[], emissionsPerSecond: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getAssetData(asset: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        getClaimer(user: string, overrides?: CallOverrides): Promise<[string]>;
        getRewardsBalance(assets: string[], user: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getUserAssetData(user: string, asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getUserUnclaimedRewards(user: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        handleAction(asset: string, userBalance: BigNumberish, totalSupply: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setClaimer(user: string, claimer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    DISTRIBUTION_END(overrides?: CallOverrides): Promise<BigNumber>;
    PRECISION(overrides?: CallOverrides): Promise<number>;
    REWARD_TOKEN(overrides?: CallOverrides): Promise<string>;
    assets(asset: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
    claimRewards(assets: string[], amount: BigNumberish, to: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimRewardsOnBehalf(assets: string[], amount: BigNumberish, user: string, to: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    configureAssets(assets: string[], emissionsPerSecond: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getAssetData(asset: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
    getClaimer(user: string, overrides?: CallOverrides): Promise<string>;
    getRewardsBalance(assets: string[], user: string, overrides?: CallOverrides): Promise<BigNumber>;
    getUserAssetData(user: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getUserUnclaimedRewards(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    handleAction(asset: string, userBalance: BigNumberish, totalSupply: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setClaimer(user: string, claimer: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DISTRIBUTION_END(overrides?: CallOverrides): Promise<BigNumber>;
        PRECISION(overrides?: CallOverrides): Promise<number>;
        REWARD_TOKEN(overrides?: CallOverrides): Promise<string>;
        assets(asset: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        claimRewards(assets: string[], amount: BigNumberish, to: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimRewardsOnBehalf(assets: string[], amount: BigNumberish, user: string, to: string, overrides?: CallOverrides): Promise<BigNumber>;
        configureAssets(assets: string[], emissionsPerSecond: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        getAssetData(asset: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        getClaimer(user: string, overrides?: CallOverrides): Promise<string>;
        getRewardsBalance(assets: string[], user: string, overrides?: CallOverrides): Promise<BigNumber>;
        getUserAssetData(user: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getUserUnclaimedRewards(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        handleAction(asset: string, userBalance: BigNumberish, totalSupply: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setClaimer(user: string, claimer: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ClaimerSet(address,address)"(user?: string | null, claimer?: string | null): ClaimerSetEventFilter;
        ClaimerSet(user?: string | null, claimer?: string | null): ClaimerSetEventFilter;
        "RewardsAccrued(address,uint256)"(user?: string | null, amount?: null): RewardsAccruedEventFilter;
        RewardsAccrued(user?: string | null, amount?: null): RewardsAccruedEventFilter;
        "RewardsClaimed(address,address,uint256)"(user?: string | null, to?: string | null, amount?: null): RewardsClaimed_address_address_uint256_EventFilter;
        "RewardsClaimed(address,address,address,uint256)"(user?: string | null, to?: string | null, claimer?: string | null, amount?: null): RewardsClaimed_address_address_address_uint256_EventFilter;
    };
    estimateGas: {
        DISTRIBUTION_END(overrides?: CallOverrides): Promise<BigNumber>;
        PRECISION(overrides?: CallOverrides): Promise<BigNumber>;
        REWARD_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;
        assets(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimRewards(assets: string[], amount: BigNumberish, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimRewardsOnBehalf(assets: string[], amount: BigNumberish, user: string, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        configureAssets(assets: string[], emissionsPerSecond: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getAssetData(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getClaimer(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        getRewardsBalance(assets: string[], user: string, overrides?: CallOverrides): Promise<BigNumber>;
        getUserAssetData(user: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getUserUnclaimedRewards(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        handleAction(asset: string, userBalance: BigNumberish, totalSupply: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setClaimer(user: string, claimer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DISTRIBUTION_END(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        REWARD_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        assets(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimRewards(assets: string[], amount: BigNumberish, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimRewardsOnBehalf(assets: string[], amount: BigNumberish, user: string, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        configureAssets(assets: string[], emissionsPerSecond: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getAssetData(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getClaimer(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRewardsBalance(assets: string[], user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserAssetData(user: string, asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserUnclaimedRewards(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        handleAction(asset: string, userBalance: BigNumberish, totalSupply: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setClaimer(user: string, claimer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
