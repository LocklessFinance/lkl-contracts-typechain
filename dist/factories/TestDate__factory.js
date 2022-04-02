"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestDate__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "prefix",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
        ],
        name: "encodePrefixTimestamp",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
        ],
        name: "encodeTimestamp",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "testString",
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
];
const _bytecode = "0x60806040526040518060400160405280600681526020017f5465737465720000000000000000000000000000000000000000000000000000815250600090805190602001906200005192919062000066565b503480156200005f57600080fd5b506200017b565b828054620000749062000116565b90600052602060002090601f016020900481019282620000985760008555620000e4565b82601f10620000b357805160ff1916838001178555620000e4565b82800160010185558215620000e4579182015b82811115620000e3578251825591602001919060010190620000c6565b5b509050620000f39190620000f7565b5090565b5b8082111562000112576000816000905550600101620000f8565b5090565b600060028204905060018216806200012f57607f821691505b602082108114156200014657620001456200014c565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6118ea806200018b6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806302542a8f146100465780636aec4af614610076578063fb8f0f59146100a6575b600080fd5b610060600480360381019061005b9190611296565b6100c4565b60405161006d9190611390565b60405180910390f35b610090600480360381019061008b91906112ee565b6101aa565b60405161009d9190611390565b60405180910390f35b6100ae610249565b6040516100bb9190611390565b60405180910390f35b606061011684848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508360006102d7565b6000805461012390611753565b80601f016020809104026020016040519081016040528092919081815260200182805461014f90611753565b801561019c5780601f106101715761010080835404028352916020019161019c565b820191906000526020600020905b81548152906001019060200180831161017f57829003601f168201915b505050505090509392505050565b60606101b78260006104bd565b600080546101c490611753565b80601f01602080910402602001604051908101604052809291908181526020018280546101f090611753565b801561023d5780601f106102125761010080835404028352916020019161023d565b820191906000526020600020905b81548152906001019060200180831161022057829003601f168201915b50505050509050919050565b6000805461025690611753565b80601f016020809104026020016040519081016040528092919081815260200182805461028290611753565b80156102cf5780601f106102a4576101008083540402835291602001916102cf565b820191906000526020600020905b8154815290600101906020018083116102b257829003601f168201915b505050505081565b6000839050600082905060005b82518110156103e75781838281518110610327577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b908080548061034090611753565b80601f811461034e57610364565b83600052602060002060ff1984168155603f9350505b506002820183556001810192505050600190038154600116156103965790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff021916907f01000000000000000000000000000000000000000000000000000000000000008404021790555080806103df90611785565b9150506102e4565b50807f2d00000000000000000000000000000000000000000000000000000000000000908080548061041890611753565b80601f81146104265761043c565b83600052602060002060ff1984168155603f9350505b5060028201835560018101925050506001900381546001161561046e5790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff021916907f0100000000000000000000000000000000000000000000000000000000000000840402179055506104b68484610e98565b5050505050565b600081905060008060006104de62015180876104d99190611523565b610ea6565b9250925092506000600a826104f39190611523565b905084817f300000000000000000000000000000000000000000000000000000000000000060f81c6105259190611482565b60f81b908080548061053690611753565b80601f81146105445761055a565b83600052602060002060ff1984168155603f9350505b5060028201835560018101925050506001900381546001161561058c5790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff021916907f0100000000000000000000000000000000000000000000000000000000000000840402179055506000600a836105d991906117ce565b905085817f300000000000000000000000000000000000000000000000000000000000000060f81c61060b9190611482565b60f81b908080548061061c90611753565b80601f811461062a57610640565b83600052602060002060ff1984168155603f9350505b506002820183556001810192505050600190038154600116156106725790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff021916907f0100000000000000000000000000000000000000000000000000000000000000840402179055505050600182141561072c57610727847f4a000000000000000000000000000000000000000000000000000000000000007f41000000000000000000000000000000000000000000000000000000000000007f4e00000000000000000000000000000000000000000000000000000000000000611045565b610cb0565b60028214156107a6576107a1847f46000000000000000000000000000000000000000000000000000000000000007f45000000000000000000000000000000000000000000000000000000000000007f4200000000000000000000000000000000000000000000000000000000000000611045565b610caf565b60038214156108205761081b847f4d000000000000000000000000000000000000000000000000000000000000007f41000000000000000000000000000000000000000000000000000000000000007f5200000000000000000000000000000000000000000000000000000000000000611045565b610cae565b600482141561089a57610895847f41000000000000000000000000000000000000000000000000000000000000007f50000000000000000000000000000000000000000000000000000000000000007f5200000000000000000000000000000000000000000000000000000000000000611045565b610cad565b60058214156109145761090f847f4d000000000000000000000000000000000000000000000000000000000000007f41000000000000000000000000000000000000000000000000000000000000007f5900000000000000000000000000000000000000000000000000000000000000611045565b610cac565b600682141561098e57610989847f4a000000000000000000000000000000000000000000000000000000000000007f55000000000000000000000000000000000000000000000000000000000000007f4e00000000000000000000000000000000000000000000000000000000000000611045565b610cab565b6007821415610a0857610a03847f4a000000000000000000000000000000000000000000000000000000000000007f55000000000000000000000000000000000000000000000000000000000000007f4c00000000000000000000000000000000000000000000000000000000000000611045565b610caa565b6008821415610a8257610a7d847f41000000000000000000000000000000000000000000000000000000000000007f55000000000000000000000000000000000000000000000000000000000000007f4700000000000000000000000000000000000000000000000000000000000000611045565b610ca9565b6009821415610afc57610af7847f53000000000000000000000000000000000000000000000000000000000000007f45000000000000000000000000000000000000000000000000000000000000007f5000000000000000000000000000000000000000000000000000000000000000611045565b610ca8565b600a821415610b7657610b71847f4f000000000000000000000000000000000000000000000000000000000000007f43000000000000000000000000000000000000000000000000000000000000007f5400000000000000000000000000000000000000000000000000000000000000611045565b610ca7565b600b821415610bf057610beb847f4e000000000000000000000000000000000000000000000000000000000000007f4f000000000000000000000000000000000000000000000000000000000000007f5600000000000000000000000000000000000000000000000000000000000000611045565b610ca6565b600c821415610c6a57610c65847f44000000000000000000000000000000000000000000000000000000000000007f45000000000000000000000000000000000000000000000000000000000000007f4300000000000000000000000000000000000000000000000000000000000000611045565b610ca5565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c9c906113b2565b60405180910390fd5b5b5b5b5b5b5b5b5b5b5b5b6000606484610cbf91906117ce565b90506000600a82610cd09190611523565b905085817f300000000000000000000000000000000000000000000000000000000000000060f81c610d029190611482565b60f81b9080805480610d1390611753565b80601f8114610d2157610d37565b83600052602060002060ff1984168155603f9350505b50600282018355600181019250505060019003815460011615610d695790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff021916907f0100000000000000000000000000000000000000000000000000000000000000840402179055506000600a83610db691906117ce565b905086817f300000000000000000000000000000000000000000000000000000000000000060f81c610de89190611482565b60f81b9080805480610df990611753565b80601f8114610e0757610e1d565b83600052602060002060ff1984168155603f9350505b50600282018355600181019250505060019003815460011615610e4f5790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff021916907f010000000000000000000000000000000000000000000000000000000000000084040217905550505050505050505050565b610ea282826104bd565b5050565b600080600080849050600062253d8c62010bd983610ec491906113ee565b610ece91906113ee565b9050600062023ab1826004610ee39190611554565b610eed91906114b9565b9050600460038262023ab1610f029190611554565b610f0c91906113ee565b610f1691906114b9565b82610f21919061166b565b9150600062164b09600184610f3691906113ee565b610fa0610f439190611554565b610f4d91906114b9565b9050601f6004826105b5610f619190611554565b610f6b91906114b9565b84610f76919061166b565b610f8091906113ee565b9250600061098f846050610f949190611554565b610f9e91906114b9565b9050600060508261098f610fb29190611554565b610fbc91906114b9565b85610fc7919061166b565b9050600b82610fd691906114b9565b945084600c610fe59190611554565b600283610ff291906113ee565b610ffc919061166b565b9150848360318661100d919061166b565b60646110199190611554565b61102391906113ee565b61102d91906113ee565b92508298508197508096505050505050509193909250565b8383908080548061105590611753565b80601f811461106357611079565b83600052602060002060ff1984168155603f9350505b506002820183556001810192505050600190038154600116156110ab5790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff021916907f010000000000000000000000000000000000000000000000000000000000000084040217905550838290808054806110f990611753565b80601f81146111075761111d565b83600052602060002060ff1984168155603f9350505b5060028201835560018101925050506001900381546001161561114f5790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff021916907f0100000000000000000000000000000000000000000000000000000000000000840402179055508381908080548061119d90611753565b80601f81146111ab576111c1565b83600052602060002060ff1984168155603f9350505b506002820183556001810192505050600190038154600116156111f35790600052602060002090602091828204019190065b909190919091601f036101000a81548160ff021916907f01000000000000000000000000000000000000000000000000000000000000008404021790555050505050565b60008083601f84011261124957600080fd5b8235905067ffffffffffffffff81111561126257600080fd5b60208301915083600182028301111561127a57600080fd5b9250929050565b6000813590506112908161189d565b92915050565b6000806000604084860312156112ab57600080fd5b600084013567ffffffffffffffff8111156112c557600080fd5b6112d186828701611237565b935093505060206112e486828701611281565b9150509250925092565b60006020828403121561130057600080fd5b600061130e84828501611281565b91505092915050565b6000611322826113d2565b61132c81856113dd565b935061133c818560208601611720565b6113458161188c565b840191505092915050565b600061135d6013836113dd565b91507f64617465206465636f64696e67206572726f72000000000000000000000000006000830152602082019050919050565b600060208201905081810360008301526113aa8184611317565b905092915050565b600060208201905081810360008301526113cb81611350565b9050919050565b600081519050919050565b600082825260208201905092915050565b60006113f9826116ff565b9150611404836116ff565b9250817f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0383136000831215161561143f5761143e6117ff565b5b817f8000000000000000000000000000000000000000000000000000000000000000038312600083121615611477576114766117ff565b5b828201905092915050565b600061148d82611713565b915061149883611713565b92508260ff038211156114ae576114ad6117ff565b5b828201905092915050565b60006114c4826116ff565b91506114cf836116ff565b9250826114df576114de61182e565b5b600160000383147f800000000000000000000000000000000000000000000000000000000000000083141615611518576115176117ff565b5b828205905092915050565b600061152e82611709565b915061153983611709565b9250826115495761154861182e565b5b828204905092915050565b600061155f826116ff565b915061156a836116ff565b9250827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821160008413600084131616156115a9576115a86117ff565b5b817f800000000000000000000000000000000000000000000000000000000000000005831260008412600084131616156115e6576115e56117ff565b5b827f80000000000000000000000000000000000000000000000000000000000000000582126000841360008412161615611623576116226117ff565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff05821260008412600084121616156116605761165f6117ff565b5b828202905092915050565b6000611676826116ff565b9150611681836116ff565b9250827f8000000000000000000000000000000000000000000000000000000000000000018212600084121516156116bc576116bb6117ff565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0182136000841216156116f4576116f36117ff565b5b828203905092915050565b6000819050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561173e578082015181840152602081019050611723565b8381111561174d576000848401525b50505050565b6000600282049050600182168061176b57607f821691505b6020821081141561177f5761177e61185d565b5b50919050565b600061179082611709565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156117c3576117c26117ff565b5b600182019050919050565b60006117d982611709565b91506117e483611709565b9250826117f4576117f361182e565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b6118a681611709565b81146118b157600080fd5b5056fea2646970667358221220b45ba6ee533a383cf20263ee43389281f7dcbafc9b43f0628fa3ed4d95a7b1ee64736f6c63430008000033";
const isSuperArgs = (xs) => xs.length > 1;
class TestDate__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
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
exports.TestDate__factory = TestDate__factory;
TestDate__factory.bytecode = _bytecode;
TestDate__factory.abi = _abi;
