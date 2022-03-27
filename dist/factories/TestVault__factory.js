"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
{
    TestVault, TestVaultInterface;
}
from;
"../TestVault";
var _abi = [
    {
        stateMutability: "nonpayable",
        type: "fallback"
    },
    {
        inputs: [],
        name: "pool",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum TestVault.PoolSpecialization",
                name: "",
                type: "uint8"
            },
        ],
        name: "registerPool",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            },
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            },
            {
                internalType: "address[]",
                name: "",
                type: "address[]"
            },
            {
                internalType: "address[]",
                name: "",
                type: "address[]"
            },
        ],
        name: "registerTokens",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_pool",
                type: "address"
            },
        ],
        name: "setPool",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b5061050d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100505760003560e01c806309b2760f1461007b57806316f0115b146100ab5780634437152a146100c957806366a9c7d2146100e557610051565b5b3660008037600080366000346000545af180610071573d6000803e3d6000fd5b3d6000803e3d6000f35b61009560048036038101906100909190610354565b610101565b6040516100a291906103b6565b60405180910390f35b6100b361016b565b6040516100c0919061039b565b60405180910390f35b6100e360048036038101906100de91906102ac565b61018f565b005b6100ff60048036038101906100fa91906102d5565b6101d2565b005b6000336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f30783030000000000000000000000000000000000000000000000000000000009050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b505050565b60006101ea6101e584610402565b6103d1565b9050808382526020820190508285602086028201111561020957600080fd5b60005b85811015610239578161021f8882610243565b84526020840193506020830192505060018101905061020c565b5050509392505050565b60008135905061025281610499565b92915050565b600082601f83011261026957600080fd5b81356102798482602086016101d7565b91505092915050565b600081359050610291816104b0565b92915050565b6000813590506102a6816104c7565b92915050565b6000602082840312156102be57600080fd5b60006102cc84828501610243565b91505092915050565b6000806000606084860312156102ea57600080fd5b60006102f886828701610282565b935050602084013567ffffffffffffffff81111561031557600080fd5b61032186828701610258565b925050604084013567ffffffffffffffff81111561033e57600080fd5b61034a86828701610258565b9150509250925092565b60006020828403121561036657600080fd5b600061037484828501610297565b91505092915050565b6103868161042e565b82525050565b61039581610440565b82525050565b60006020820190506103b0600083018461037d565b92915050565b60006020820190506103cb600083018461038c565b92915050565b6000604051905081810181811067ffffffffffffffff821117156103f8576103f761046a565b5b8060405250919050565b600067ffffffffffffffff82111561041d5761041c61046a565b5b602082029050602081019050919050565b60006104398261044a565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6104a28161042e565b81146104ad57600080fd5b50565b6104b981610440565b81146104c457600080fd5b50565b600381106104d457600080fd5b5056fea26469706673582212206fafe3f13cafc73e70160c3a7ae2b7bd8c1e5330cbdc4716e2c1e51bbb86baca64736f6c63430008000033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var TestVault__factory = (function (_super) {
    __extends(TestVault__factory, _super);
    function TestVault__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        return _this;
    }
    TestVault__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    TestVault__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    TestVault__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    TestVault__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    TestVault__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    TestVault__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    TestVault__factory.bytecode = _bytecode;
    TestVault__factory.abi = _abi;
    return TestVault__factory;
}(ethers_1.ContractFactory));
exports.TestVault__factory = TestVault__factory;
