"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.__esModule = true;
var ethers_1 = require("ethers");
{
    BasePoolFactory,
        BasePoolFactoryInterface,
    ;
}
from;
"../BasePoolFactory";
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "pool",
                type: "address"
            },
        ],
        name: "PoolCreated",
        type: "event"
    },
    {
        inputs: [],
        name: "getVault",
        outputs: [
            {
                internalType: "contract IVault",
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
                name: "pool",
                type: "address"
            },
        ],
        name: "isPoolFromFactory",
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
];
var BasePoolFactory__factory = (function () {
    function BasePoolFactory__factory() {
    }
    BasePoolFactory__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    BasePoolFactory__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    BasePoolFactory__factory.abi = _abi;
    return BasePoolFactory__factory;
}());
exports.BasePoolFactory__factory = BasePoolFactory__factory;
