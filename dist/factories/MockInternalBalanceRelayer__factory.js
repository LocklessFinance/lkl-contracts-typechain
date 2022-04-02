"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockInternalBalanceRelayer__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract IVault",
                name: "_vault",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "sender",
                type: "address",
            },
            {
                internalType: "contract IAsset",
                name: "asset",
                type: "address",
            },
            {
                internalType: "uint256[]",
                name: "depositAmounts",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "withdrawAmounts",
                type: "uint256[]",
            },
        ],
        name: "depositAndWithdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "vault",
        outputs: [
            {
                internalType: "contract IVault",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506040516109ed3803806109ed8339818101604052810190610032919061008d565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610111565b600081519050610087816100fa565b92915050565b60006020828403121561009f57600080fd5b60006100ad84828501610078565b91505092915050565b60006100c1826100da565b9050919050565b60006100d3826100b6565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b610103816100c8565b811461010e57600080fd5b50565b6108cd806101206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80637b58efc11461003b578063fbfa77cf14610057575b600080fd5b610055600480360381019061005091906104e2565b610075565b005b61005f610201565b60405161006c91906106cf565b60405180910390f35b61008182518251610225565b60005b82518110156101fa5760606100af600087878786815181106100a257fe5b6020026020010151610236565b905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630e8e3e84826040518263ffffffff1660e01b815260040161010a91906106ad565b600060405180830381600087803b15801561012457600080fd5b505af1158015610138573d6000803e3d6000fd5b50505050606061015e6001888887878151811061015157fe5b6020026020010151610236565b905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630e8e3e84826040518263ffffffff1660e01b81526004016101b991906106ad565b600060405180830381600087803b1580156101d357600080fd5b505af11580156101e7573d6000803e3d6000fd5b5050505050508080600101915050610084565b5050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6102328183146067610321565b5050565b6060600167ffffffffffffffff8111801561025057600080fd5b5060405190808252806020026020018201604052801561028a57816020015b6102776103a4565b81526020019060019003908161026f5790505b5090506040518060a001604052808660038111156102a457fe5b81526020018473ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018573ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff168152508160008151811061030e57fe5b6020026020010181905250949350505050565b816103305761032f81610334565b5b5050565b6030600a820601600a820491506030600a830601600a830492506030600a8406018060101b8260081b8401016642414c230000000160c81b7f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260076024528060445260646000fd5b6040518060a00160405280600060038111156103bc57fe5b8152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b60008135905061042f81610852565b92915050565b600082601f83011261044657600080fd5b813561045961045482610717565b6106ea565b9150818183526020840193506020810190508385602084028201111561047e57600080fd5b60005b838110156104ae578161049488826104cd565b845260208401935060208301925050600181019050610481565b5050505092915050565b6000813590506104c781610869565b92915050565b6000813590506104dc81610880565b92915050565b600080600080608085870312156104f857600080fd5b600061050687828801610420565b9450506020610517878288016104b8565b935050604085013567ffffffffffffffff81111561053457600080fd5b61054087828801610435565b925050606085013567ffffffffffffffff81111561055d57600080fd5b61056987828801610435565b91505092959194509250565b60006105818383610636565b60a08301905092915050565b6105968161078a565b82525050565b6105a581610778565b82525050565b60006105b68261074f565b6105c08185610767565b93506105cb8361073f565b8060005b838110156105fc5781516105e38882610575565b97506105ee8361075a565b9250506001810190506105cf565b5085935050505092915050565b610612816107eb565b82525050565b6106218161080f565b82525050565b61063081610833565b82525050565b60a08201600082015161064c6000850182610627565b50602082015161065f6020850182610609565b506040820151610672604085018261069e565b506060820151610685606085018261059c565b506080820151610698608085018261058d565b50505050565b6106a7816107e1565b82525050565b600060208201905081810360008301526106c781846105ab565b905092915050565b60006020820190506106e46000830184610618565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561070d57600080fd5b8060405250919050565b600067ffffffffffffffff82111561072e57600080fd5b602082029050602081019050919050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b6000610783826107c1565b9050919050565b6000610795826107c1565b9050919050565b60006107a782610778565b9050919050565b60008190506107bc82610845565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006107f6826107fd565b9050919050565b6000610808826107c1565b9050919050565b600061081a82610821565b9050919050565b600061082c826107c1565b9050919050565b600061083e826107ae565b9050919050565b6004811061084f57fe5b50565b61085b8161078a565b811461086657600080fd5b50565b6108728161079c565b811461087d57600080fd5b50565b610889816107e1565b811461089457600080fd5b5056fea2646970667358221220f59702fcc87d0bfde60347cd26efc8cbd9b6675b700249db85325f8a86a750f364736f6c63430007010033";
const isSuperArgs = (xs) => xs.length > 1;
class MockInternalBalanceRelayer__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_vault, overrides) {
        return super.deploy(_vault, overrides || {});
    }
    getDeployTransaction(_vault, overrides) {
        return super.getDeployTransaction(_vault, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.MockInternalBalanceRelayer__factory = MockInternalBalanceRelayer__factory;
MockInternalBalanceRelayer__factory.bytecode = _bytecode;
MockInternalBalanceRelayer__factory.abi = _abi;
