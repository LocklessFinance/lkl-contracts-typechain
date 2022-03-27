/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { USDC, USDCInterface } from "../USDC";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101606040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9610140908152503480156200003a57600080fd5b5060405162002b6b38038062002b6b8339818101604052810190620000609190620004dd565b6040518060400160405280600881526020017f55534420436f696e000000000000000000000000000000000000000000000000815250806040518060400160405280600181526020017f31000000000000000000000000000000000000000000000000000000000000008152506040518060400160405280600881526020017f55534420436f696e0000000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f555344430000000000000000000000000000000000000000000000000000000081525081600390805190602001906200015192919062000416565b5080600490805190602001906200016a92919062000416565b50505060008280519060200120905060008280519060200120905060007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f90508260e081815250508161010081815250504660a08181525050620001d68184846200024160201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508061012081815250505050505050506200023a8164e8d4a510006200027d60201b60201c565b506200077e565b600083838346306040516020016200025e9594939291906200057e565b6040516020818303038152906040528051906020012090509392505050565b6200028f82826200029360201b60201c565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000306576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002fd90620005db565b60405180910390fd5b6200031a600083836200040c60201b60201c565b80600260008282546200032e91906200062b565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546200038591906200062b565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620003ec9190620005fd565b60405180910390a362000408600083836200041160201b60201c565b5050565b505050565b505050565b8280546200042490620006d0565b90600052602060002090601f01602090048101928262000448576000855562000494565b82601f106200046357805160ff191683800117855562000494565b8280016001018555821562000494579182015b828111156200049357825182559160200191906001019062000476565b5b509050620004a39190620004a7565b5090565b5b80821115620004c2576000816000905550600101620004a8565b5090565b600081519050620004d78162000764565b92915050565b600060208284031215620004f057600080fd5b60006200050084828501620004c6565b91505092915050565b620005148162000688565b82525050565b62000525816200069c565b82525050565b60006200053a601f836200061a565b91507f45524332303a206d696e7420746f20746865207a65726f2061646472657373006000830152602082019050919050565b6200057881620006c6565b82525050565b600060a0820190506200059560008301886200051a565b620005a460208301876200051a565b620005b360408301866200051a565b620005c260608301856200056d565b620005d1608083018462000509565b9695505050505050565b60006020820190508181036000830152620005f6816200052b565b9050919050565b60006020820190506200061460008301846200056d565b92915050565b600082825260208201905092915050565b60006200063882620006c6565b91506200064583620006c6565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156200067d576200067c62000706565b5b828201905092915050565b60006200069582620006a6565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006002820490506001821680620006e957607f821691505b602082108114156200070057620006ff62000735565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6200076f8162000688565b81146200077b57600080fd5b50565b60805160a05160c05160601c60e05161010051610120516101405161238f620007dc600039600061084601526000610eca01526000610f0c01526000610eeb01526000610e2001526000610e7601526000610e9f015261238f6000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806340c10f1911610097578063a457c2d711610066578063a457c2d71461029c578063a9059cbb146102cc578063d505accf146102fc578063dd62ed3e14610318576100f5565b806340c10f191461020257806370a082311461021e5780637ecebe001461024e57806395d89b411461027e576100f5565b806323b872dd116100d357806323b872dd14610166578063313ce567146101965780633644e515146101b457806339509351146101d2576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd14610148575b600080fd5b610102610348565b60405161010f9190611f2b565b60405180910390f35b610132600480360381019061012d91906117d8565b6103da565b60405161013f9190611dfc565b60405180910390f35b6101506103f8565b60405161015d919061210d565b60405180910390f35b610180600480360381019061017b91906116eb565b610402565b60405161018d9190611dfc565b60405180910390f35b61019e6104fa565b6040516101ab9190612128565b60405180910390f35b6101bc610503565b6040516101c99190611e17565b60405180910390f35b6101ec60048036038101906101e791906117d8565b610512565b6040516101f99190611dfc565b60405180910390f35b61021c600480360381019061021791906117d8565b6105be565b005b61023860048036038101906102339190611686565b6105cc565b604051610245919061210d565b60405180910390f35b61026860048036038101906102639190611686565b610614565b604051610275919061210d565b60405180910390f35b610286610664565b6040516102939190611f2b565b60405180910390f35b6102b660048036038101906102b191906117d8565b6106f6565b6040516102c39190611dfc565b60405180910390f35b6102e660048036038101906102e191906117d8565b6107e1565b6040516102f39190611dfc565b60405180910390f35b6103166004803603810190610311919061173a565b6107ff565b005b610332600480360381019061032d91906116af565b610941565b60405161033f919061210d565b60405180910390f35b60606003805461035790612252565b80601f016020809104026020016040519081016040528092919081815260200182805461038390612252565b80156103d05780601f106103a5576101008083540402835291602001916103d0565b820191906000526020600020905b8154815290600101906020018083116103b357829003601f168201915b5050505050905090565b60006103ee6103e76109c8565b84846109d0565b6001905092915050565b6000600254905090565b600061040f848484610b9b565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061045a6109c8565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156104da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d19061206d565b60405180910390fd5b6104ee856104e66109c8565b8584036109d0565b60019150509392505050565b60006006905090565b600061050d610e1c565b905090565b60006105b461051f6109c8565b84846001600061052d6109c8565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546105af919061216a565b6109d0565b6001905092915050565b6105c88282610f36565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600061065d600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611096565b9050919050565b60606004805461067390612252565b80601f016020809104026020016040519081016040528092919081815260200182805461069f90612252565b80156106ec5780601f106106c1576101008083540402835291602001916106ec565b820191906000526020600020905b8154815290600101906020018083116106cf57829003601f168201915b5050505050905090565b600080600160006107056109c8565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156107c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b9906120cd565b60405180910390fd5b6107d66107cd6109c8565b858584036109d0565b600191505092915050565b60006107f56107ee6109c8565b8484610b9b565b6001905092915050565b83421115610842576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083990611fcd565b60405180910390fd5b60007f00000000000000000000000000000000000000000000000000000000000000008888886108718c6110a4565b8960405160200161088796959493929190611e32565b60405160208183030381529060405280519060200120905060006108aa82611102565b905060006108ba8287878761111c565b90508973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461092a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109219061204d565b60405180910390fd5b6109358a8a8a6109d0565b50505050505050505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a40576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a37906120ad565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ab0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa790611fad565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610b8e919061210d565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c0b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c029061208d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c7b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7290611f6d565b60405180910390fd5b610c86838383611147565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610d0c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d0390611fed565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d9f919061216a565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e03919061210d565b60405180910390a3610e1684848461114c565b50505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16148015610e9857507f000000000000000000000000000000000000000000000000000000000000000046145b15610ec5577f00000000000000000000000000000000000000000000000000000000000000009050610f33565b610f307f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611151565b90505b90565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610fa6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f9d906120ed565b60405180910390fd5b610fb260008383611147565b8060026000828254610fc4919061216a565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611019919061216a565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161107e919061210d565b60405180910390a36110926000838361114c565b5050565b600081600001549050919050565b600080600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506110f181611096565b91506110fc8161118b565b50919050565b600061111561110f610e1c565b836111a1565b9050919050565b600080600061112d878787876111d4565b9150915061113a816112e1565b8192505050949350505050565b505050565b505050565b6000838383463060405160200161116c959493929190611e93565b6040516020818303038152906040528051906020012090509392505050565b6001816000016000828254019250508190555050565b600082826040516020016111b6929190611dc5565b60405160208183030381529060405280519060200120905092915050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c111561120f5760006003915091506112d8565b601b8560ff16141580156112275750601c8560ff1614155b156112395760006004915091506112d8565b60006001878787876040516000815260200160405260405161125e9493929190611ee6565b6020604051602081039080840390855afa158015611280573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156112cf576000600192509250506112d8565b80600092509250505b94509492505050565b6000600481111561131b577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b816004811115611354577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b141561135f5761162f565b60016004811115611399577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8160048111156113d2577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b1415611413576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161140a90611f4d565b60405180910390fd5b6002600481111561144d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b816004811115611486577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14156114c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114be90611f8d565b60405180910390fd5b60036004811115611501577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b81600481111561153a577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b141561157b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115729061200d565b60405180910390fd5b6004808111156115b4577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8160048111156115ed577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b141561162e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116259061202d565b60405180910390fd5b5b50565b600081359050611641816122fd565b92915050565b60008135905061165681612314565b92915050565b60008135905061166b8161232b565b92915050565b60008135905061168081612342565b92915050565b60006020828403121561169857600080fd5b60006116a684828501611632565b91505092915050565b600080604083850312156116c257600080fd5b60006116d085828601611632565b92505060206116e185828601611632565b9150509250929050565b60008060006060848603121561170057600080fd5b600061170e86828701611632565b935050602061171f86828701611632565b92505060406117308682870161165c565b9150509250925092565b600080600080600080600060e0888a03121561175557600080fd5b60006117638a828b01611632565b97505060206117748a828b01611632565b96505060406117858a828b0161165c565b95505060606117968a828b0161165c565b94505060806117a78a828b01611671565b93505060a06117b88a828b01611647565b92505060c06117c98a828b01611647565b91505092959891949750929550565b600080604083850312156117eb57600080fd5b60006117f985828601611632565b925050602061180a8582860161165c565b9150509250929050565b61181d816121c0565b82525050565b61182c816121d2565b82525050565b61183b816121de565b82525050565b61185261184d826121de565b612284565b82525050565b600061186382612143565b61186d818561214e565b935061187d81856020860161221f565b611886816122ec565b840191505092915050565b600061189e60188361214e565b91507f45434453413a20696e76616c6964207369676e617475726500000000000000006000830152602082019050919050565b60006118de60238361214e565b91507f45524332303a207472616e7366657220746f20746865207a65726f206164647260008301527f65737300000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611944601f8361214e565b91507f45434453413a20696e76616c6964207369676e6174757265206c656e677468006000830152602082019050919050565b600061198460228361214e565b91507f45524332303a20617070726f766520746f20746865207a65726f20616464726560008301527f73730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006119ea60028361215f565b91507f19010000000000000000000000000000000000000000000000000000000000006000830152600282019050919050565b6000611a2a601d8361214e565b91507f45524332305065726d69743a206578706972656420646561646c696e650000006000830152602082019050919050565b6000611a6a60268361214e565b91507f45524332303a207472616e7366657220616d6f756e742065786365656473206260008301527f616c616e636500000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611ad060228361214e565b91507f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008301527f75650000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611b3660228361214e565b91507f45434453413a20696e76616c6964207369676e6174757265202776272076616c60008301527f75650000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611b9c601e8361214e565b91507f45524332305065726d69743a20696e76616c6964207369676e617475726500006000830152602082019050919050565b6000611bdc60288361214e565b91507f45524332303a207472616e7366657220616d6f756e742065786365656473206160008301527f6c6c6f77616e63650000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611c4260258361214e565b91507f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008301527f64726573730000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611ca860248361214e565b91507f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611d0e60258361214e565b91507f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008301527f207a65726f0000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611d74601f8361214e565b91507f45524332303a206d696e7420746f20746865207a65726f2061646472657373006000830152602082019050919050565b611db081612208565b82525050565b611dbf81612212565b82525050565b6000611dd0826119dd565b9150611ddc8285611841565b602082019150611dec8284611841565b6020820191508190509392505050565b6000602082019050611e116000830184611823565b92915050565b6000602082019050611e2c6000830184611832565b92915050565b600060c082019050611e476000830189611832565b611e546020830188611814565b611e616040830187611814565b611e6e6060830186611da7565b611e7b6080830185611da7565b611e8860a0830184611da7565b979650505050505050565b600060a082019050611ea86000830188611832565b611eb56020830187611832565b611ec26040830186611832565b611ecf6060830185611da7565b611edc6080830184611814565b9695505050505050565b6000608082019050611efb6000830187611832565b611f086020830186611db6565b611f156040830185611832565b611f226060830184611832565b95945050505050565b60006020820190508181036000830152611f458184611858565b905092915050565b60006020820190508181036000830152611f6681611891565b9050919050565b60006020820190508181036000830152611f86816118d1565b9050919050565b60006020820190508181036000830152611fa681611937565b9050919050565b60006020820190508181036000830152611fc681611977565b9050919050565b60006020820190508181036000830152611fe681611a1d565b9050919050565b6000602082019050818103600083015261200681611a5d565b9050919050565b6000602082019050818103600083015261202681611ac3565b9050919050565b6000602082019050818103600083015261204681611b29565b9050919050565b6000602082019050818103600083015261206681611b8f565b9050919050565b6000602082019050818103600083015261208681611bcf565b9050919050565b600060208201905081810360008301526120a681611c35565b9050919050565b600060208201905081810360008301526120c681611c9b565b9050919050565b600060208201905081810360008301526120e681611d01565b9050919050565b6000602082019050818103600083015261210681611d67565b9050919050565b60006020820190506121226000830184611da7565b92915050565b600060208201905061213d6000830184611db6565b92915050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600061217582612208565b915061218083612208565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156121b5576121b461228e565b5b828201905092915050565b60006121cb826121e8565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561223d578082015181840152602081019050612222565b8381111561224c576000848401525b50505050565b6000600282049050600182168061226a57607f821691505b6020821081141561227e5761227d6122bd565b5b50919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b612306816121c0565b811461231157600080fd5b50565b61231d816121de565b811461232857600080fd5b50565b61233481612208565b811461233f57600080fd5b50565b61234b81612212565b811461235657600080fd5b5056fea264697066735822122054c364d7505416027da6615c83e1f921c7140f444bba2c3ae2dc651f7252085d64736f6c63430008000033";

type USDCConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: USDCConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class USDC__factory extends ContractFactory {
  constructor(...args: USDCConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    sender: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<USDC> {
    return super.deploy(sender, overrides || {}) as Promise<USDC>;
  }
  getDeployTransaction(
    sender: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(sender, overrides || {});
  }
  attach(address: string): USDC {
    return super.attach(address) as USDC;
  }
  connect(signer: Signer): USDC__factory {
    return super.connect(signer) as USDC__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): USDCInterface {
    return new utils.Interface(_abi) as USDCInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): USDC {
    return new Contract(address, _abi, signerOrProvider) as USDC;
  }
}
