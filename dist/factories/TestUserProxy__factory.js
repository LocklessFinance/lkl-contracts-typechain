"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestUserProxy__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_weth",
                type: "address",
            },
            {
                internalType: "address",
                name: "_trancheFactory",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "_trancheBytecodeHash",
                type: "bytes32",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "who",
                type: "address",
            },
        ],
        name: "authorize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "authorized",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "who",
                type: "address",
            },
        ],
        name: "deauthorize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "deprecate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "position",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "expiration",
                type: "uint256",
            },
        ],
        name: "deriveTranche",
        outputs: [
            {
                internalType: "contract ITranche",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "who",
                type: "address",
            },
        ],
        name: "isAuthorized",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "isFrozen",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "contract IERC20",
                name: "_underlying",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_expiration",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_position",
                type: "address",
            },
            {
                components: [
                    {
                        internalType: "contract IERC20Permit",
                        name: "tokenContract",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "who",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "expiration",
                        type: "uint256",
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
                    {
                        internalType: "uint8",
                        name: "v",
                        type: "uint8",
                    },
                ],
                internalType: "struct UserProxy.PermitData[]",
                name: "_permitCallData",
                type: "tuple[]",
            },
        ],
        name: "mint",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "_newState",
                type: "bool",
            },
        ],
        name: "setIsFrozen",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "who",
                type: "address",
            },
        ],
        name: "setOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "weth",
        outputs: [
            {
                internalType: "contract IWETH",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_expiration",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_position",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amountPT",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_amountYT",
                type: "uint256",
            },
            {
                components: [
                    {
                        internalType: "contract IERC20Permit",
                        name: "tokenContract",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "who",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "expiration",
                        type: "uint256",
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
                    {
                        internalType: "uint8",
                        name: "v",
                        type: "uint8",
                    },
                ],
                internalType: "struct UserProxy.PermitData[]",
                name: "_permitCallData",
                type: "tuple[]",
            },
        ],
        name: "withdrawWeth",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
const _bytecode = "0x60e06040526000600260006101000a81548160ff0219169083151502179055503480156200002c57600080fd5b50604051620026b7380380620026b78339818101604052810190620000529190620001b0565b828282336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620000a6336200012860201b60201c565b8273ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250508173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508060c0818152505050505050505062000278565b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600081519050620001938162000244565b92915050565b600081519050620001aa816200025e565b92915050565b600080600060608486031215620001c657600080fd5b6000620001d68682870162000182565b9350506020620001e98682870162000182565b9250506040620001fc8682870162000199565b9150509250925092565b6000620002138262000224565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6200024f8162000206565b81146200025b57600080fd5b50565b62000269816200021a565b81146200027557600080fd5b50565b60805160601c60a05160601c60c0516123e7620002d060003960006113300152600061130e01526000818160cd01528181610601015281816107a401528181610c8301528181610ff3015261107401526123e76000f3fe6080604052600436106100c65760003560e01c806364eda74b1161007f578063b6a5d7de11610059578063b6a5d7de146102a3578063b841d2d2146102cc578063b9181611146102fd578063fe9fbb801461033a57610125565b806364eda74b146102265780636f1ea24c1461024f5780638da5cb5b1461027857610125565b80630a08ca671461012a5780630fcc0c281461016757806313af40351461017e57806327c97fa5146101a757806333eeb147146101d05780633fc8cef3146101fb57610125565b36610125577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461012357600080fd5b005b600080fd5b34801561013657600080fd5b50610151600480360381019061014c9190611729565b610377565b60405161015e9190611e7f565b60405180910390f35b34801561017357600080fd5b5061017c61038b565b005b34801561018a57600080fd5b506101a560048036038101906101a09190611700565b610432565b005b3480156101b357600080fd5b506101ce60048036038101906101c99190611700565b610503565b005b3480156101dc57600080fd5b506101e56105ec565b6040516101f29190611e64565b60405180910390f35b34801561020757600080fd5b506102106105ff565b60405161021d9190611e9a565b60405180910390f35b34801561023257600080fd5b5061024d60048036038101906102489190611765565b610623565b005b34801561025b57600080fd5b506102766004803603810190610271919061185b565b610688565b005b34801561028457600080fd5b5061028d610d8c565b60405161029a9190611d7a565b60405180910390f35b3480156102af57600080fd5b506102ca60048036038101906102c59190611700565b610db0565b005b6102e660048036038101906102e191906118ed565b610e4a565b6040516102f4929190612039565b60405180910390f35b34801561030957600080fd5b50610324600480360381019061031f9190611700565b611261565b6040516103319190611e64565b60405180910390f35b34801561034657600080fd5b50610361600480360381019061035c9190611700565b611281565b60405161036e9190611e64565b60405180910390f35b600061038383836112d7565b905092915050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610419576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041090611ed5565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16ff5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b790611ed5565b60405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610591576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058890611ed5565b60405180910390fd5b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600260009054906101000a900460ff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b61062c33611281565b61066b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066290611ef5565b60405180910390fd5b80600260006101000a81548160ff02191690831515021790555050565b600260009054906101000a900460ff16156106d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106cf90611fd5565b60405180910390fd5b8181808060200260200160405190810160405280939291908181526020016000905b8282101561072a57848483905060e0020180360381019061071b9190611809565b815260200190600101906106fa565b505050505060008151146107a25760005b81518110156107a05761078d828281518110610780577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151611388565b808061079890612203565b91505061073b565b505b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1663fc0c546a6040518163ffffffff1660e01b815260040160206040518083038186803b15801561081f57600080fd5b505afa158015610833573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061085791906117b7565b73ffffffffffffffffffffffffffffffffffffffff16146108ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a490611f35565b60405180910390fd5b6000851415806108be575060008414155b6108fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f490611f15565b60405180910390fd5b600061090987896112d7565b90506000806000808914610a37578373ffffffffffffffffffffffffffffffffffffffff166323b872dd33308c6040518463ffffffff1660e01b815260040161095493929190611d95565b602060405180830381600087803b15801561096e57600080fd5b505af1158015610982573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a6919061178e565b508373ffffffffffffffffffffffffffffffffffffffff1663884e17f38a306040518363ffffffff1660e01b81526004016109e2929190612010565b602060405180830381600087803b1580156109fc57600080fd5b505af1158015610a10573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a349190611832565b92505b60008814610be75760008473ffffffffffffffffffffffffffffffffffffffff1663764b666c6040518163ffffffff1660e01b815260040160206040518083038186803b158015610a8757600080fd5b505afa158015610a9b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610abf91906117e0565b90508073ffffffffffffffffffffffffffffffffffffffff166323b872dd33308c6040518463ffffffff1660e01b8152600401610afe93929190611d95565b602060405180830381600087803b158015610b1857600080fd5b505af1158015610b2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b50919061178e565b508473ffffffffffffffffffffffffffffffffffffffff16631210aac28a306040518363ffffffff1660e01b8152600401610b8c929190612010565b6040805180830381600087803b158015610ba557600080fd5b505af1158015610bb9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bdd919061197f565b8093508194505050505b60008914610c34576000831415610c33576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c2a90611f55565b60405180910390fd5b5b60008814610c81576000821415610c80576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7790611f75565b60405180910390fd5b5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d828486610cca91906120a4565b610cd491906120a4565b6040518263ffffffff1660e01b8152600401610cf09190611ff5565b600060405180830381600087803b158015610d0a57600080fd5b505af1158015610d1e573d6000803e3d6000fd5b505050503373ffffffffffffffffffffffffffffffffffffffff166108fc828486610d4991906120a4565b610d5391906120a4565b9081150290604051600060405180830381858888f19350505050158015610d7e573d6000803e3d6000fd5b505050505050505050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610e3e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e3590611ed5565b60405180910390fd5b610e478161141e565b50565b600080600260009054906101000a900460ff1615610e9d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9490611fd5565b60405180910390fd5b8383808060200260200160405190810160405280939291908181526020016000905b82821015610eef57848483905060e00201803603810190610ee09190611809565b81526020019060010190610ebf565b50505050506000815114610f675760005b8151811015610f6557610f52828281518110610f45577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151611388565b8080610f5d90612203565b915050610f00565b505b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee73ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff16141561112557883414610ff1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fe890611fb5565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b15801561105957600080fd5b505af115801561106d573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb878b6040518363ffffffff1660e01b81526004016110cd929190611e3b565b602060405180830381600087803b1580156110e757600080fd5b505af11580156110fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061111f919061178e565b506111f9565b60003414611168576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161115f90611eb5565b60405180910390fd5b8773ffffffffffffffffffffffffffffffffffffffff166323b872dd33888c6040518463ffffffff1660e01b81526004016111a593929190611d95565b602060405180830381600087803b1580156111bf57600080fd5b505af11580156111d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111f7919061178e565b505b6000806112068989611478565b915091508a81101561124d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161124490611f95565b60405180910390fd5b818194509450505050965096945050505050565b60016020528060005260406000206000915054906101000a900460ff1681565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60008083836040516020016112ed929190611d00565b604051602081830303815290604052805190602001209050600060ff60f81b7f0000000000000000000000000000000000000000000000000000000000000000837f00000000000000000000000000000000000000000000000000000000000000006040516020016113629493929190611d2c565b6040516020818303038152906040528051906020012090508060001c9250505092915050565b806000015173ffffffffffffffffffffffffffffffffffffffff1663d505accf338360200151846040015185606001518660c0015187608001518860a001516040518863ffffffff1660e01b81526004016113e99796959493929190611dcc565b600060405180830381600087803b15801561140357600080fd5b505af1158015611417573d6000803e3d6000fd5b5050505050565b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600080600061148784866112d7565b90508073ffffffffffffffffffffffffffffffffffffffff166385f45c88336040518263ffffffff1660e01b81526004016114c29190611d7a565b6040805180830381600087803b1580156114db57600080fd5b505af11580156114ef573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611513919061197f565b92509250509250929050565b60008135905061152e816122f9565b92915050565b60008083601f84011261154657600080fd5b8235905067ffffffffffffffff81111561155f57600080fd5b6020830191508360e082028301111561157757600080fd5b9250929050565b60008135905061158d81612310565b92915050565b6000815190506115a281612310565b92915050565b6000813590506115b781612327565b92915050565b6000813590506115cc8161233e565b92915050565b6000813590506115e181612355565b92915050565b6000815190506115f681612355565b92915050565b60008151905061160b8161236c565b92915050565b600060e0828403121561162357600080fd5b61162d60e0612062565b9050600061163d848285016115bd565b60008301525060206116518482850161151f565b6020830152506040611665848285016116c1565b6040830152506060611679848285016116c1565b606083015250608061168d848285016115a8565b60808301525060a06116a1848285016115a8565b60a08301525060c06116b5848285016116eb565b60c08301525092915050565b6000813590506116d081612383565b92915050565b6000815190506116e581612383565b92915050565b6000813590506116fa8161239a565b92915050565b60006020828403121561171257600080fd5b60006117208482850161151f565b91505092915050565b6000806040838503121561173c57600080fd5b600061174a8582860161151f565b925050602061175b858286016116c1565b9150509250929050565b60006020828403121561177757600080fd5b60006117858482850161157e565b91505092915050565b6000602082840312156117a057600080fd5b60006117ae84828501611593565b91505092915050565b6000602082840312156117c957600080fd5b60006117d7848285016115e7565b91505092915050565b6000602082840312156117f257600080fd5b6000611800848285016115fc565b91505092915050565b600060e0828403121561181b57600080fd5b600061182984828501611611565b91505092915050565b60006020828403121561184457600080fd5b6000611852848285016116d6565b91505092915050565b60008060008060008060a0878903121561187457600080fd5b600061188289828a016116c1565b965050602061189389828a0161151f565b95505060406118a489828a016116c1565b94505060606118b589828a016116c1565b935050608087013567ffffffffffffffff8111156118d257600080fd5b6118de89828a01611534565b92509250509295509295509295565b60008060008060008060a0878903121561190657600080fd5b600061191489828a016116c1565b965050602061192589828a016115d2565b955050604061193689828a016116c1565b945050606061194789828a0161151f565b935050608087013567ffffffffffffffff81111561196457600080fd5b61197089828a01611534565b92509250509295509295509295565b6000806040838503121561199257600080fd5b60006119a0858286016116d6565b92505060206119b1858286016116d6565b9150509250929050565b6119c4816120fa565b82525050565b6119db6119d6826120fa565b61224c565b82525050565b6119ea8161210c565b82525050565b611a016119fc82612118565b61225e565b82525050565b611a1081612144565b82525050565b611a27611a2282612144565b612268565b82525050565b611a36816121bb565b82525050565b611a45816121df565b82525050565b6000611a58600b83612093565b91507f4e6f6e2070617961626c650000000000000000000000000000000000000000006000830152602082019050919050565b6000611a98601083612093565b91507f53656e646572206e6f74206f776e6572000000000000000000000000000000006000830152602082019050919050565b6000611ad8601583612093565b91507f53656e646572206e6f7420417574686f72697a656400000000000000000000006000830152602082019050919050565b6000611b18601083612093565b91507f496e76616c6964207769746864726177000000000000000000000000000000006000830152602082019050919050565b6000611b58600e83612093565b91507f4e6f6e207765746820746f6b656e0000000000000000000000000000000000006000830152602082019050919050565b6000611b98600683612093565b91507f52756767656400000000000000000000000000000000000000000000000000006000830152602082019050919050565b6000611bd8601083612093565b91507f4e6f207969656c642061636372756564000000000000000000000000000000006000830152602082019050919050565b6000611c18601183612093565b91507f4e6f7420656e6f756768206d696e7465640000000000000000000000000000006000830152602082019050919050565b6000611c58601983612093565b91507f496e636f727265637420616d6f756e742070726f7669646564000000000000006000830152602082019050919050565b6000611c98600f83612093565b91507f436f6e74726163742066726f7a656e00000000000000000000000000000000006000830152602082019050919050565b611cd4816121a4565b82525050565b611ceb611ce6826121a4565b612284565b82525050565b611cfa816121ae565b82525050565b6000611d0c82856119ca565b601482019150611d1c8284611cda565b6020820191508190509392505050565b6000611d3882876119f0565b600182019150611d4882866119ca565b601482019150611d588285611a16565b602082019150611d688284611a16565b60208201915081905095945050505050565b6000602082019050611d8f60008301846119bb565b92915050565b6000606082019050611daa60008301866119bb565b611db760208301856119bb565b611dc46040830184611ccb565b949350505050565b600060e082019050611de1600083018a6119bb565b611dee60208301896119bb565b611dfb6040830188611ccb565b611e086060830187611ccb565b611e156080830186611cf1565b611e2260a0830185611a07565b611e2f60c0830184611a07565b98975050505050505050565b6000604082019050611e5060008301856119bb565b611e5d6020830184611ccb565b9392505050565b6000602082019050611e7960008301846119e1565b92915050565b6000602082019050611e946000830184611a2d565b92915050565b6000602082019050611eaf6000830184611a3c565b92915050565b60006020820190508181036000830152611ece81611a4b565b9050919050565b60006020820190508181036000830152611eee81611a8b565b9050919050565b60006020820190508181036000830152611f0e81611acb565b9050919050565b60006020820190508181036000830152611f2e81611b0b565b9050919050565b60006020820190508181036000830152611f4e81611b4b565b9050919050565b60006020820190508181036000830152611f6e81611b8b565b9050919050565b60006020820190508181036000830152611f8e81611bcb565b9050919050565b60006020820190508181036000830152611fae81611c0b565b9050919050565b60006020820190508181036000830152611fce81611c4b565b9050919050565b60006020820190508181036000830152611fee81611c8b565b9050919050565b600060208201905061200a6000830184611ccb565b92915050565b60006040820190506120256000830185611ccb565b61203260208301846119bb565b9392505050565b600060408201905061204e6000830185611ccb565b61205b6020830184611ccb565b9392505050565b6000604051905081810181811067ffffffffffffffff82111715612089576120886122bd565b5b8060405250919050565b600082825260208201905092915050565b60006120af826121a4565b91506120ba836121a4565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156120ef576120ee61228e565b5b828201905092915050565b600061210582612184565b9050919050565b60008115159050919050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b6000819050919050565b6000612159826120fa565b9050919050565b600061216b826120fa565b9050919050565b600061217d826120fa565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006121c6826121cd565b9050919050565b60006121d882612184565b9050919050565b60006121ea826121f1565b9050919050565b60006121fc82612184565b9050919050565b600061220e826121a4565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156122415761224061228e565b5b600182019050919050565b600061225782612272565b9050919050565b6000819050919050565b6000819050919050565b600061227d826122ec565b9050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008160601b9050919050565b612302816120fa565b811461230d57600080fd5b50565b6123198161210c565b811461232457600080fd5b50565b61233081612144565b811461233b57600080fd5b50565b6123478161214e565b811461235257600080fd5b50565b61235e81612160565b811461236957600080fd5b50565b61237581612172565b811461238057600080fd5b50565b61238c816121a4565b811461239757600080fd5b50565b6123a3816121ae565b81146123ae57600080fd5b5056fea26469706673582212209fc5e48b242cdfea6ecfe8a4a5315385318440ab5e58c84e0f745e0189842f6064736f6c63430008000033";
const isSuperArgs = (xs) => xs.length > 1;
class TestUserProxy__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_weth, _trancheFactory, _trancheBytecodeHash, overrides) {
        return super.deploy(_weth, _trancheFactory, _trancheBytecodeHash, overrides || {});
    }
    getDeployTransaction(_weth, _trancheFactory, _trancheBytecodeHash, overrides) {
        return super.getDeployTransaction(_weth, _trancheFactory, _trancheBytecodeHash, overrides || {});
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
exports.TestUserProxy__factory = TestUserProxy__factory;
TestUserProxy__factory.bytecode = _bytecode;
TestUserProxy__factory.abi = _abi;
