import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type ReserveConfigurationMapStruct = {
    data: BigNumberish;
};
export declare type ReserveConfigurationMapStructOutput = [BigNumber] & {
    data: BigNumber;
};
export declare type ReserveDataStruct = {
    configuration: ReserveConfigurationMapStruct;
    liquidityIndex: BigNumberish;
    variableBorrowIndex: BigNumberish;
    currentLiquidityRate: BigNumberish;
    currentVariableBorrowRate: BigNumberish;
    currentStableBorrowRate: BigNumberish;
    lastUpdateTimestamp: BigNumberish;
    aTokenAddress: string;
    stableDebtTokenAddress: string;
    variableDebtTokenAddress: string;
    interestRateStrategyAddress: string;
    id: BigNumberish;
};
export declare type ReserveDataStructOutput = [
    ReserveConfigurationMapStructOutput,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    string,
    string,
    string,
    string,
    number
] & {
    configuration: ReserveConfigurationMapStructOutput;
    liquidityIndex: BigNumber;
    variableBorrowIndex: BigNumber;
    currentLiquidityRate: BigNumber;
    currentVariableBorrowRate: BigNumber;
    currentStableBorrowRate: BigNumber;
    lastUpdateTimestamp: number;
    aTokenAddress: string;
    stableDebtTokenAddress: string;
    variableDebtTokenAddress: string;
    interestRateStrategyAddress: string;
    id: number;
};
export declare type UserConfigurationMapStruct = {
    data: [BigNumberish, BigNumberish];
};
export declare type UserConfigurationMapStructOutput = [[BigNumber, BigNumber]] & {
    data: [BigNumber, BigNumber];
};
export interface ILendingPoolInterface extends utils.Interface {
    functions: {
        "borrow(address,uint256,uint256,uint16,address)": FunctionFragment;
        "deposit(address,uint256,address,uint16)": FunctionFragment;
        "finalizeTransfer(address,address,address,uint256,uint256,uint256)": FunctionFragment;
        "flashLoan(address,address[],uint256[],uint256[],address,bytes,uint16)": FunctionFragment;
        "getConfiguration(address)": FunctionFragment;
        "getReserveData(address)": FunctionFragment;
        "getReserveNormalizedIncome(address)": FunctionFragment;
        "getReserveNormalizedVariableDebt(address)": FunctionFragment;
        "getReservesList()": FunctionFragment;
        "getUserAccountData(address)": FunctionFragment;
        "getUserConfiguration(address)": FunctionFragment;
        "initReserve(address,address,address,address,address)": FunctionFragment;
        "liquidationCall(address,address,address,uint256,bool)": FunctionFragment;
        "paused()": FunctionFragment;
        "rebalanceStableBorrowRate(address,address)": FunctionFragment;
        "repay(address,uint256,uint256,address)": FunctionFragment;
        "setConfiguration(address,uint256)": FunctionFragment;
        "setPause(bool)": FunctionFragment;
        "setReserveInterestRateStrategyAddress(address,address)": FunctionFragment;
        "setUserUseReserveAsCollateral(address,bool)": FunctionFragment;
        "swapBorrowRateMode(address,uint256)": FunctionFragment;
        "withdraw(address,uint256,address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "borrow", values: [string, BigNumberish, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "deposit", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "finalizeTransfer", values: [string, string, string, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "flashLoan", values: [
        string,
        string[],
        BigNumberish[],
        BigNumberish[],
        string,
        BytesLike,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "getConfiguration", values: [string]): string;
    encodeFunctionData(functionFragment: "getReserveData", values: [string]): string;
    encodeFunctionData(functionFragment: "getReserveNormalizedIncome", values: [string]): string;
    encodeFunctionData(functionFragment: "getReserveNormalizedVariableDebt", values: [string]): string;
    encodeFunctionData(functionFragment: "getReservesList", values?: undefined): string;
    encodeFunctionData(functionFragment: "getUserAccountData", values: [string]): string;
    encodeFunctionData(functionFragment: "getUserConfiguration", values: [string]): string;
    encodeFunctionData(functionFragment: "initReserve", values: [string, string, string, string, string]): string;
    encodeFunctionData(functionFragment: "liquidationCall", values: [string, string, string, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "rebalanceStableBorrowRate", values: [string, string]): string;
    encodeFunctionData(functionFragment: "repay", values: [string, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "setConfiguration", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setPause", values: [boolean]): string;
    encodeFunctionData(functionFragment: "setReserveInterestRateStrategyAddress", values: [string, string]): string;
    encodeFunctionData(functionFragment: "setUserUseReserveAsCollateral", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "swapBorrowRateMode", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [string, BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "borrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalizeTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashLoan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConfiguration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserveData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserveNormalizedIncome", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserveNormalizedVariableDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReservesList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserAccountData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserConfiguration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initReserve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidationCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rebalanceStableBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfiguration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReserveInterestRateStrategyAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUserUseReserveAsCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapBorrowRateMode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "Borrow(address,address,address,uint256,uint256,uint256,uint16)": EventFragment;
        "Deposit(address,address,address,uint256,uint16)": EventFragment;
        "FlashLoan(address,address,address,uint256,uint256,uint16)": EventFragment;
        "LiquidationCall(address,address,address,uint256,uint256,address,bool)": EventFragment;
        "Paused()": EventFragment;
        "RebalanceStableBorrowRate(address,address)": EventFragment;
        "Repay(address,address,address,uint256)": EventFragment;
        "ReserveDataUpdated(address,uint256,uint256,uint256,uint256,uint256)": EventFragment;
        "ReserveUsedAsCollateralDisabled(address,address)": EventFragment;
        "ReserveUsedAsCollateralEnabled(address,address)": EventFragment;
        "Swap(address,address,uint256)": EventFragment;
        "Unpaused()": EventFragment;
        "Withdraw(address,address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Borrow"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FlashLoan"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidationCall"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RebalanceStableBorrowRate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Repay"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReserveDataUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReserveUsedAsCollateralDisabled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReserveUsedAsCollateralEnabled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}
export declare type BorrowEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    number
], {
    reserve: string;
    user: string;
    onBehalfOf: string;
    amount: BigNumber;
    borrowRateMode: BigNumber;
    borrowRate: BigNumber;
    referral: number;
}>;
export declare type BorrowEventFilter = TypedEventFilter<BorrowEvent>;
export declare type DepositEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    number
], {
    reserve: string;
    user: string;
    onBehalfOf: string;
    amount: BigNumber;
    referral: number;
}>;
export declare type DepositEventFilter = TypedEventFilter<DepositEvent>;
export declare type FlashLoanEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    number
], {
    target: string;
    initiator: string;
    asset: string;
    amount: BigNumber;
    premium: BigNumber;
    referralCode: number;
}>;
export declare type FlashLoanEventFilter = TypedEventFilter<FlashLoanEvent>;
export declare type LiquidationCallEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    string,
    boolean
], {
    collateralAsset: string;
    debtAsset: string;
    user: string;
    debtToCover: BigNumber;
    liquidatedCollateralAmount: BigNumber;
    liquidator: string;
    receiveAToken: boolean;
}>;
export declare type LiquidationCallEventFilter = TypedEventFilter<LiquidationCallEvent>;
export declare type PausedEvent = TypedEvent<[], {}>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
export declare type RebalanceStableBorrowRateEvent = TypedEvent<[
    string,
    string
], {
    reserve: string;
    user: string;
}>;
export declare type RebalanceStableBorrowRateEventFilter = TypedEventFilter<RebalanceStableBorrowRateEvent>;
export declare type RepayEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], {
    reserve: string;
    user: string;
    repayer: string;
    amount: BigNumber;
}>;
export declare type RepayEventFilter = TypedEventFilter<RepayEvent>;
export declare type ReserveDataUpdatedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], {
    reserve: string;
    liquidityRate: BigNumber;
    stableBorrowRate: BigNumber;
    variableBorrowRate: BigNumber;
    liquidityIndex: BigNumber;
    variableBorrowIndex: BigNumber;
}>;
export declare type ReserveDataUpdatedEventFilter = TypedEventFilter<ReserveDataUpdatedEvent>;
export declare type ReserveUsedAsCollateralDisabledEvent = TypedEvent<[
    string,
    string
], {
    reserve: string;
    user: string;
}>;
export declare type ReserveUsedAsCollateralDisabledEventFilter = TypedEventFilter<ReserveUsedAsCollateralDisabledEvent>;
export declare type ReserveUsedAsCollateralEnabledEvent = TypedEvent<[
    string,
    string
], {
    reserve: string;
    user: string;
}>;
export declare type ReserveUsedAsCollateralEnabledEventFilter = TypedEventFilter<ReserveUsedAsCollateralEnabledEvent>;
export declare type SwapEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    reserve: string;
    user: string;
    rateMode: BigNumber;
}>;
export declare type SwapEventFilter = TypedEventFilter<SwapEvent>;
export declare type UnpausedEvent = TypedEvent<[], {}>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export declare type WithdrawEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], {
    reserve: string;
    user: string;
    to: string;
    amount: BigNumber;
}>;
export declare type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;
export interface ILendingPool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ILendingPoolInterface;
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
        borrow(asset: string, amount: BigNumberish, interestRateMode: BigNumberish, referralCode: BigNumberish, onBehalfOf: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        deposit(asset: string, amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        finalizeTransfer(asset: string, from: string, to: string, amount: BigNumberish, balanceFromAfter: BigNumberish, balanceToBefore: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        flashLoan(receiverAddress: string, assets: string[], amounts: BigNumberish[], modes: BigNumberish[], onBehalfOf: string, params: BytesLike, referralCode: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getConfiguration(asset: string, overrides?: CallOverrides): Promise<[ReserveConfigurationMapStructOutput]>;
        getReserveData(asset: string, overrides?: CallOverrides): Promise<[ReserveDataStructOutput]>;
        getReserveNormalizedIncome(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getReserveNormalizedVariableDebt(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getReservesList(overrides?: CallOverrides): Promise<[string[]]>;
        getUserAccountData(user: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            totalCollateralETH: BigNumber;
            totalDebtETH: BigNumber;
            availableBorrowsETH: BigNumber;
            currentLiquidationThreshold: BigNumber;
            ltv: BigNumber;
            healthFactor: BigNumber;
        }>;
        getUserConfiguration(user: string, overrides?: CallOverrides): Promise<[UserConfigurationMapStructOutput]>;
        initReserve(reserve: string, aTokenAddress: string, stableDebtAddress: string, variableDebtAddress: string, interestRateStrategyAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        liquidationCall(collateralAsset: string, debtAsset: string, user: string, debtToCover: BigNumberish, receiveAToken: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        rebalanceStableBorrowRate(asset: string, user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        repay(asset: string, amount: BigNumberish, rateMode: BigNumberish, onBehalfOf: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setConfiguration(reserve: string, configuration: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPause(val: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setReserveInterestRateStrategyAddress(reserve: string, rateStrategyAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setUserUseReserveAsCollateral(asset: string, useAsCollateral: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapBorrowRateMode(asset: string, rateMode: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdraw(asset: string, amount: BigNumberish, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    borrow(asset: string, amount: BigNumberish, interestRateMode: BigNumberish, referralCode: BigNumberish, onBehalfOf: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    deposit(asset: string, amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    finalizeTransfer(asset: string, from: string, to: string, amount: BigNumberish, balanceFromAfter: BigNumberish, balanceToBefore: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    flashLoan(receiverAddress: string, assets: string[], amounts: BigNumberish[], modes: BigNumberish[], onBehalfOf: string, params: BytesLike, referralCode: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getConfiguration(asset: string, overrides?: CallOverrides): Promise<ReserveConfigurationMapStructOutput>;
    getReserveData(asset: string, overrides?: CallOverrides): Promise<ReserveDataStructOutput>;
    getReserveNormalizedIncome(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getReserveNormalizedVariableDebt(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getReservesList(overrides?: CallOverrides): Promise<string[]>;
    getUserAccountData(user: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        totalCollateralETH: BigNumber;
        totalDebtETH: BigNumber;
        availableBorrowsETH: BigNumber;
        currentLiquidationThreshold: BigNumber;
        ltv: BigNumber;
        healthFactor: BigNumber;
    }>;
    getUserConfiguration(user: string, overrides?: CallOverrides): Promise<UserConfigurationMapStructOutput>;
    initReserve(reserve: string, aTokenAddress: string, stableDebtAddress: string, variableDebtAddress: string, interestRateStrategyAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    liquidationCall(collateralAsset: string, debtAsset: string, user: string, debtToCover: BigNumberish, receiveAToken: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    rebalanceStableBorrowRate(asset: string, user: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    repay(asset: string, amount: BigNumberish, rateMode: BigNumberish, onBehalfOf: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setConfiguration(reserve: string, configuration: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPause(val: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setReserveInterestRateStrategyAddress(reserve: string, rateStrategyAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setUserUseReserveAsCollateral(asset: string, useAsCollateral: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapBorrowRateMode(asset: string, rateMode: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdraw(asset: string, amount: BigNumberish, to: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        borrow(asset: string, amount: BigNumberish, interestRateMode: BigNumberish, referralCode: BigNumberish, onBehalfOf: string, overrides?: CallOverrides): Promise<void>;
        deposit(asset: string, amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, overrides?: CallOverrides): Promise<void>;
        finalizeTransfer(asset: string, from: string, to: string, amount: BigNumberish, balanceFromAfter: BigNumberish, balanceToBefore: BigNumberish, overrides?: CallOverrides): Promise<void>;
        flashLoan(receiverAddress: string, assets: string[], amounts: BigNumberish[], modes: BigNumberish[], onBehalfOf: string, params: BytesLike, referralCode: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getConfiguration(asset: string, overrides?: CallOverrides): Promise<ReserveConfigurationMapStructOutput>;
        getReserveData(asset: string, overrides?: CallOverrides): Promise<ReserveDataStructOutput>;
        getReserveNormalizedIncome(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getReserveNormalizedVariableDebt(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getReservesList(overrides?: CallOverrides): Promise<string[]>;
        getUserAccountData(user: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            totalCollateralETH: BigNumber;
            totalDebtETH: BigNumber;
            availableBorrowsETH: BigNumber;
            currentLiquidationThreshold: BigNumber;
            ltv: BigNumber;
            healthFactor: BigNumber;
        }>;
        getUserConfiguration(user: string, overrides?: CallOverrides): Promise<UserConfigurationMapStructOutput>;
        initReserve(reserve: string, aTokenAddress: string, stableDebtAddress: string, variableDebtAddress: string, interestRateStrategyAddress: string, overrides?: CallOverrides): Promise<void>;
        liquidationCall(collateralAsset: string, debtAsset: string, user: string, debtToCover: BigNumberish, receiveAToken: boolean, overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        rebalanceStableBorrowRate(asset: string, user: string, overrides?: CallOverrides): Promise<void>;
        repay(asset: string, amount: BigNumberish, rateMode: BigNumberish, onBehalfOf: string, overrides?: CallOverrides): Promise<BigNumber>;
        setConfiguration(reserve: string, configuration: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setPause(val: boolean, overrides?: CallOverrides): Promise<void>;
        setReserveInterestRateStrategyAddress(reserve: string, rateStrategyAddress: string, overrides?: CallOverrides): Promise<void>;
        setUserUseReserveAsCollateral(asset: string, useAsCollateral: boolean, overrides?: CallOverrides): Promise<void>;
        swapBorrowRateMode(asset: string, rateMode: BigNumberish, overrides?: CallOverrides): Promise<void>;
        withdraw(asset: string, amount: BigNumberish, to: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "Borrow(address,address,address,uint256,uint256,uint256,uint16)"(reserve?: string | null, user?: null, onBehalfOf?: string | null, amount?: null, borrowRateMode?: null, borrowRate?: null, referral?: BigNumberish | null): BorrowEventFilter;
        Borrow(reserve?: string | null, user?: null, onBehalfOf?: string | null, amount?: null, borrowRateMode?: null, borrowRate?: null, referral?: BigNumberish | null): BorrowEventFilter;
        "Deposit(address,address,address,uint256,uint16)"(reserve?: string | null, user?: null, onBehalfOf?: string | null, amount?: null, referral?: BigNumberish | null): DepositEventFilter;
        Deposit(reserve?: string | null, user?: null, onBehalfOf?: string | null, amount?: null, referral?: BigNumberish | null): DepositEventFilter;
        "FlashLoan(address,address,address,uint256,uint256,uint16)"(target?: string | null, initiator?: string | null, asset?: string | null, amount?: null, premium?: null, referralCode?: null): FlashLoanEventFilter;
        FlashLoan(target?: string | null, initiator?: string | null, asset?: string | null, amount?: null, premium?: null, referralCode?: null): FlashLoanEventFilter;
        "LiquidationCall(address,address,address,uint256,uint256,address,bool)"(collateralAsset?: string | null, debtAsset?: string | null, user?: string | null, debtToCover?: null, liquidatedCollateralAmount?: null, liquidator?: null, receiveAToken?: null): LiquidationCallEventFilter;
        LiquidationCall(collateralAsset?: string | null, debtAsset?: string | null, user?: string | null, debtToCover?: null, liquidatedCollateralAmount?: null, liquidator?: null, receiveAToken?: null): LiquidationCallEventFilter;
        "Paused()"(): PausedEventFilter;
        Paused(): PausedEventFilter;
        "RebalanceStableBorrowRate(address,address)"(reserve?: string | null, user?: string | null): RebalanceStableBorrowRateEventFilter;
        RebalanceStableBorrowRate(reserve?: string | null, user?: string | null): RebalanceStableBorrowRateEventFilter;
        "Repay(address,address,address,uint256)"(reserve?: string | null, user?: string | null, repayer?: string | null, amount?: null): RepayEventFilter;
        Repay(reserve?: string | null, user?: string | null, repayer?: string | null, amount?: null): RepayEventFilter;
        "ReserveDataUpdated(address,uint256,uint256,uint256,uint256,uint256)"(reserve?: string | null, liquidityRate?: null, stableBorrowRate?: null, variableBorrowRate?: null, liquidityIndex?: null, variableBorrowIndex?: null): ReserveDataUpdatedEventFilter;
        ReserveDataUpdated(reserve?: string | null, liquidityRate?: null, stableBorrowRate?: null, variableBorrowRate?: null, liquidityIndex?: null, variableBorrowIndex?: null): ReserveDataUpdatedEventFilter;
        "ReserveUsedAsCollateralDisabled(address,address)"(reserve?: string | null, user?: string | null): ReserveUsedAsCollateralDisabledEventFilter;
        ReserveUsedAsCollateralDisabled(reserve?: string | null, user?: string | null): ReserveUsedAsCollateralDisabledEventFilter;
        "ReserveUsedAsCollateralEnabled(address,address)"(reserve?: string | null, user?: string | null): ReserveUsedAsCollateralEnabledEventFilter;
        ReserveUsedAsCollateralEnabled(reserve?: string | null, user?: string | null): ReserveUsedAsCollateralEnabledEventFilter;
        "Swap(address,address,uint256)"(reserve?: string | null, user?: string | null, rateMode?: null): SwapEventFilter;
        Swap(reserve?: string | null, user?: string | null, rateMode?: null): SwapEventFilter;
        "Unpaused()"(): UnpausedEventFilter;
        Unpaused(): UnpausedEventFilter;
        "Withdraw(address,address,address,uint256)"(reserve?: string | null, user?: string | null, to?: string | null, amount?: null): WithdrawEventFilter;
        Withdraw(reserve?: string | null, user?: string | null, to?: string | null, amount?: null): WithdrawEventFilter;
    };
    estimateGas: {
        borrow(asset: string, amount: BigNumberish, interestRateMode: BigNumberish, referralCode: BigNumberish, onBehalfOf: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        deposit(asset: string, amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        finalizeTransfer(asset: string, from: string, to: string, amount: BigNumberish, balanceFromAfter: BigNumberish, balanceToBefore: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        flashLoan(receiverAddress: string, assets: string[], amounts: BigNumberish[], modes: BigNumberish[], onBehalfOf: string, params: BytesLike, referralCode: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getConfiguration(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getReserveData(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getReserveNormalizedIncome(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getReserveNormalizedVariableDebt(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getReservesList(overrides?: CallOverrides): Promise<BigNumber>;
        getUserAccountData(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        getUserConfiguration(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        initReserve(reserve: string, aTokenAddress: string, stableDebtAddress: string, variableDebtAddress: string, interestRateStrategyAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        liquidationCall(collateralAsset: string, debtAsset: string, user: string, debtToCover: BigNumberish, receiveAToken: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        rebalanceStableBorrowRate(asset: string, user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        repay(asset: string, amount: BigNumberish, rateMode: BigNumberish, onBehalfOf: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setConfiguration(reserve: string, configuration: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPause(val: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setReserveInterestRateStrategyAddress(reserve: string, rateStrategyAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setUserUseReserveAsCollateral(asset: string, useAsCollateral: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapBorrowRateMode(asset: string, rateMode: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdraw(asset: string, amount: BigNumberish, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        borrow(asset: string, amount: BigNumberish, interestRateMode: BigNumberish, referralCode: BigNumberish, onBehalfOf: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        deposit(asset: string, amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        finalizeTransfer(asset: string, from: string, to: string, amount: BigNumberish, balanceFromAfter: BigNumberish, balanceToBefore: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        flashLoan(receiverAddress: string, assets: string[], amounts: BigNumberish[], modes: BigNumberish[], onBehalfOf: string, params: BytesLike, referralCode: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getConfiguration(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReserveData(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReserveNormalizedIncome(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReserveNormalizedVariableDebt(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReservesList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserAccountData(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserConfiguration(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initReserve(reserve: string, aTokenAddress: string, stableDebtAddress: string, variableDebtAddress: string, interestRateStrategyAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        liquidationCall(collateralAsset: string, debtAsset: string, user: string, debtToCover: BigNumberish, receiveAToken: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rebalanceStableBorrowRate(asset: string, user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        repay(asset: string, amount: BigNumberish, rateMode: BigNumberish, onBehalfOf: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setConfiguration(reserve: string, configuration: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPause(val: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setReserveInterestRateStrategyAddress(reserve: string, rateStrategyAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setUserUseReserveAsCollateral(asset: string, useAsCollateral: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapBorrowRateMode(asset: string, rateMode: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdraw(asset: string, amount: BigNumberish, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
