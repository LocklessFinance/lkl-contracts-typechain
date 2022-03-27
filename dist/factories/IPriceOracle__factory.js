"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.__esModule = true;
var ethers_1 = require("ethers");
{
    IPriceOracle, IPriceOracleInterface;
}
from;
"../IPriceOracle";
var _abi = [
    {
        inputs: [],
        name: "getLargestSafeQueryWindow",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum IPriceOracle.Variable",
                name: "variable",
                type: "uint8"
            },
        ],
        name: "getLatest",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "enum IPriceOracle.Variable",
                        name: "variable",
                        type: "uint8"
                    },
                    {
                        internalType: "uint256",
                        name: "ago",
                        type: "uint256"
                    },
                ],
                internalType: "struct IPriceOracle.OracleAccumulatorQuery[]",
                name: "queries",
                type: "tuple[]"
            },
        ],
        name: "getPastAccumulators",
        outputs: [
            {
                internalType: "int256[]",
                name: "results",
                type: "int256[]"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "enum IPriceOracle.Variable",
                        name: "variable",
                        type: "uint8"
                    },
                    {
                        internalType: "uint256",
                        name: "secs",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "ago",
                        type: "uint256"
                    },
                ],
                internalType: "struct IPriceOracle.OracleAverageQuery[]",
                name: "queries",
                type: "tuple[]"
            },
        ],
        name: "getTimeWeightedAverage",
        outputs: [
            {
                internalType: "uint256[]",
                name: "results",
                type: "uint256[]"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
];
var IPriceOracle__factory = (function () {
    function IPriceOracle__factory() {
    }
    IPriceOracle__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IPriceOracle__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IPriceOracle__factory.abi = _abi;
    return IPriceOracle__factory;
}());
exports.IPriceOracle__factory = IPriceOracle__factory;
