"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.__esModule = true;
var ethers_1 = require("ethers");
{
    CurveStethPool,
        CurveStethPoolInterface,
    ;
}
from;
"../CurveStethPool";
var _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_token_amount",
                type: "uint256"
            },
            {
                internalType: "int128",
                name: "i",
                type: "int128"
            },
        ],
        name: "calc_withdraw_one_coin",
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
];
var CurveStethPool__factory = (function () {
    function CurveStethPool__factory() {
    }
    CurveStethPool__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    CurveStethPool__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    CurveStethPool__factory.abi = _abi;
    return CurveStethPool__factory;
}());
exports.CurveStethPool__factory = CurveStethPool__factory;
