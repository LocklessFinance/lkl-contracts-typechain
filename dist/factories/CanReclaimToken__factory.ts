/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CanReclaimToken,
  CanReclaimTokenInterface,
} from "../CanReclaimToken";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "_token",
        type: "address",
      },
    ],
    name: "reclaimToken",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "previousOwner",
        type: "address",
      },
    ],
    name: "OwnershipRenounced",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
];

const _bytecode =
  "0x6080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610682806100536000396000f300608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806317ffc32014610067578063715018a6146100aa5780638da5cb5b146100c1578063f2fde38b14610118575b600080fd5b34801561007357600080fd5b506100a8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061015b565b005b3480156100b657600080fd5b506100bf6102e0565b005b3480156100cd57600080fd5b506100d66103e2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561012457600080fd5b50610159600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610407565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156101b857600080fd5b8173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561025357600080fd5b505af1158015610267573d6000803e3d6000fd5b505050506040513d602081101561027d57600080fd5b810190808051906020019092919050505090506102dc6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16828473ffffffffffffffffffffffffffffffffffffffff1661046e9092919063ffffffff16565b5050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561033b57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a260008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561046257600080fd5b61046b8161055c565b50565b8273ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561051157600080fd5b505af1158015610525573d6000803e3d6000fd5b505050506040513d602081101561053b57600080fd5b8101908080519060200190929190505050151561055757600080fd5b505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561059857600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a72305820b0cedb1fc21bd9e6db93911cc87ef0da93b8c2d4100357218794d52173dbd35c0029";

type CanReclaimTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CanReclaimTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CanReclaimToken__factory extends ContractFactory {
  constructor(...args: CanReclaimTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CanReclaimToken> {
    return super.deploy(overrides || {}) as Promise<CanReclaimToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CanReclaimToken {
    return super.attach(address) as CanReclaimToken;
  }
  connect(signer: Signer): CanReclaimToken__factory {
    return super.connect(signer) as CanReclaimToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CanReclaimTokenInterface {
    return new utils.Interface(_abi) as CanReclaimTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CanReclaimToken {
    return new Contract(address, _abi, signerOrProvider) as CanReclaimToken;
  }
}
