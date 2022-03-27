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
    Authorizable, AuthorizableInterface;
}
from;
"../Authorizable";
var _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "who",
                type: "address"
            },
        ],
        name: "authorize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        name: "authorized",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "who",
                type: "address"
            },
        ],
        name: "deauthorize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "who",
                type: "address"
            },
        ],
        name: "isAuthorized",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
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
                internalType: "address",
                name: "who",
                type: "address"
            },
        ],
        name: "setOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061060f806100606000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806313af40351461006757806327c97fa5146100835780638da5cb5b1461009f578063b6a5d7de146100bd578063b9181611146100d9578063fe9fbb8014610109575b600080fd5b610081600480360381019061007c9190610496565b610139565b005b61009d60048036038101906100989190610496565b61020a565b005b6100a76102f3565b6040516100b4919061051d565b60405180910390f35b6100d760048036038101906100d29190610496565b610317565b005b6100f360048036038101906100ee9190610496565b6103b1565b6040516101009190610538565b60405180910390f35b610123600480360381019061011e9190610496565b6103d1565b6040516101309190610538565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101be90610553565b60405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610298576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161028f90610553565b60405180910390fd5b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039c90610553565b60405180910390fd5b6103ae81610427565b50565b60016020528060005260406000206000915054906101000a900460ff1681565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600081359050610490816105c2565b92915050565b6000602082840312156104a857600080fd5b60006104b684828501610481565b91505092915050565b6104c881610584565b82525050565b6104d781610596565b82525050565b60006104ea601083610573565b91507f53656e646572206e6f74206f776e6572000000000000000000000000000000006000830152602082019050919050565b600060208201905061053260008301846104bf565b92915050565b600060208201905061054d60008301846104ce565b92915050565b6000602082019050818103600083015261056c816104dd565b9050919050565b600082825260208201905092915050565b600061058f826105a2565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6105cb81610584565b81146105d657600080fd5b5056fea26469706673582212203871c466d38d7a4d2b733eb974d7ac20f8ec700e666f40a86362620cf98b18ad64736f6c63430008000033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var Authorizable__factory = (function (_super) {
    __extends(Authorizable__factory, _super);
    function Authorizable__factory() {
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
    Authorizable__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    Authorizable__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    Authorizable__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    Authorizable__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    Authorizable__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Authorizable__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Authorizable__factory.bytecode = _bytecode;
    Authorizable__factory.abi = _abi;
    return Authorizable__factory;
}(ethers_1.ContractFactory));
exports.Authorizable__factory = Authorizable__factory;
