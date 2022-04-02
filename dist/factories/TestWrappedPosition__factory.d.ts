import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestWrappedPosition, TestWrappedPositionInterface } from "../TestWrappedPosition";
declare type TestWrappedPositionConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestWrappedPosition__factory extends ContractFactory {
    constructor(...args: TestWrappedPositionConstructorParams);
    deploy(_token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestWrappedPosition>;
    getDeployTransaction(_token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestWrappedPosition;
    connect(signer: Signer): TestWrappedPosition__factory;
    static readonly bytecode = "0x60a060405260646007553480156200001657600080fd5b5060405162002b5638038062002b5683398181016040528101906200003c91906200044f565b806040518060400160405280600f81526020017f454c656d656e742046696e616e636500000000000000000000000000000000008152506040518060400160405280601381526020017f5465737457726170706564506f736974696f6e0000000000000000000000000081525081818160009080519060200190620000c392919062000371565b508060019080519060200190620000dc92919062000371565b506012600260006101000a81548160ff021916908360ff1602179055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600360008073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600360003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550620001d16200035160201b60201c565b7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f600060405162000203919062000565565b60405180910390206040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250805190602001204630604051602001620002609594939291906200057e565b6040516020818303038152906040528051906020012060068190555050508273ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b81525050620003478373ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156200030057600080fd5b505afa15801562000315573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200033b91906200047b565b6200035360201b60201c565b50505050620006fd565b565b80600260006101000a81548160ff021916908360ff16021790555050565b8280546200037f9062000664565b90600052602060002090601f016020900481019282620003a35760008555620003ef565b82601f10620003be57805160ff1916838001178555620003ef565b82800160010185558215620003ef579182015b82811115620003ee578251825591602001919060010190620003d1565b5b509050620003fe919062000402565b5090565b5b808211156200041d57600081600090555060010162000403565b5090565b6000815190506200043281620006c9565b92915050565b6000815190506200044981620006e3565b92915050565b6000602082840312156200046257600080fd5b6000620004728482850162000421565b91505092915050565b6000602082840312156200048e57600080fd5b60006200049e8482850162000438565b91505092915050565b620004b281620005fb565b82525050565b620004c3816200060f565b82525050565b60008154620004d88162000664565b620004e48186620005f0565b9450600182166000811462000502576001811462000514576200054b565b60ff198316865281860193506200054b565b6200051f85620005db565b60005b83811015620005435781548189015260018201915060208101905062000522565b838801955050505b50505092915050565b6200055f816200064d565b82525050565b6000620005738284620004c9565b915081905092915050565b600060a082019050620005956000830188620004b8565b620005a46020830187620004b8565b620005b36040830186620004b8565b620005c2606083018562000554565b620005d16080830184620004a7565b9695505050505050565b60008190508160005260206000209050919050565b600081905092915050565b600062000608826200062d565b9050919050565b6000819050919050565b60006200062682620005fb565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b600060028204905060018216806200067d57607f821691505b602082108114156200069457620006936200069a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b620006d48162000619565b8114620006e057600080fd5b50565b620006ee8162000657565b8114620006fa57600080fd5b50565b60805160601c61241e6200073860003960008181610a230152818161110601528181611146015281816111f101526114fd015261241e6000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80637ecebe00116100b8578063a9059cbb1161007c578063a9059cbb14610390578063b5c5f672146103c0578063d505accf146103f1578063dd62ed3e1461040d578063e613deb21461043d578063fc0c546a1461046d57610137565b80637ecebe00146102d657806385f45c8814610306578063886263d01461033857806395d89b41146103565780639c08be581461037457610137565b80633644e515116100ff5780633644e515146101f65780633af9e6691461021457806347e7ef241461024457806367caf8711461027457806370a08231146102a657610137565b806306fdde031461013c578063095ea7b31461015a57806323b872dd1461018a57806330adf81f146101ba578063313ce567146101d8575b600080fd5b61014461048b565b6040516101519190611d38565b60405180910390f35b610174600480360381019061016f9190611781565b610519565b6040516101819190611c41565b60405180910390f35b6101a4600480360381019061019f9190611694565b61060b565b6040516101b19190611c41565b60405180910390f35b6101c261098e565b6040516101cf9190611c5c565b60405180910390f35b6101e06109b5565b6040516101ed9190611eb5565b60405180910390f35b6101fe6109c8565b60405161020b9190611c5c565b60405180910390f35b61022e6004803603810190610229919061162f565b6109ce565b60405161023b9190611e3a565b60405180910390f35b61025e60048036038101906102599190611781565b610a1f565b60405161026b9190611e3a565b60405180910390f35b61028e600480360381019061028991906117bd565b610af2565b60405161029d93929190611e7e565b60405180910390f35b6102c060048036038101906102bb919061162f565b610b68565b6040516102cd9190611e3a565b60405180910390f35b6102f060048036038101906102eb919061162f565b610b80565b6040516102fd9190611e3a565b60405180910390f35b610320600480360381019061031b919061162f565b610b98565b60405161032f93929190611e7e565b60405180910390f35b610340610c0d565b60405161034d9190611e3a565b60405180910390f35b61035e610c13565b60405161036b9190611d38565b60405180910390f35b61038e60048036038101906103899190611835565b610ca1565b005b6103aa60048036038101906103a59190611781565b610cab565b6040516103b79190611c41565b60405180910390f35b6103da60048036038101906103d591906117bd565b610cc0565b6040516103e8929190611e55565b60405180910390f35b61040b600480360381019061040691906116e3565b610ce7565b005b61042760048036038101906104229190611658565b6110cd565b6040516104349190611e3a565b60405180910390f35b61045760048036038101906104529190611835565b6110f2565b6040516104649190611e3a565b60405180910390f35b610475611104565b6040516104829190611d1d565b60405180910390f35b6000805461049890612245565b80601f01602080910402602001604051908101604052809291908181526020018280546104c490612245565b80156105115780601f106104e657610100808354040283529160200191610511565b820191906000526020600020905b8154815290600101906020018083116104f457829003601f168201915b505050505081565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516105f99190611e3a565b60405180910390a36001905092915050565b600080600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610693576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068a90611e1a565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614610840576000600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461083e57838110156107b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a890611d5a565b60405180910390fd5b83816107bd9190612149565b600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b505b828161084c9190612149565b600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555082600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546108da9190611ef7565b600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8560405161097a9190611e3a565b60405180910390a360019150509392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960001b81565b600260009054906101000a900460ff1681565b60065481565b6000610a18600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611128565b9050919050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401610a7e93929190611bb8565b602060405180830381600087803b158015610a9857600080fd5b505af1158015610aac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad0919061180c565b506000610adb61113f565b509050610ae88482611295565b8091505092915050565b600080600080600260009054906101000a900460ff16600a610b149190611fd1565b90506000610b2182611128565b90506000818389610b3291906120ef565b610b3c9190611f4d565b9050600080610b4d8b848b8761138d565b91509150818382975097509750505050505093509350939050565b60036020528060005260406000206000915090505481565b60056020528060005260406000206000915090505481565b6000806000806000610ba861113f565b915091506000600360008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050610bfa8784611295565b8282829550955095505050509193909250565b60075481565b60018054610c2090612245565b80601f0160208091040260200160405190810160405280929190818152602001828054610c4c90612245565b8015610c995780601f10610c6e57610100808354040283529160200191610c99565b820191906000526020600020905b815481529060010190602001808311610c7c57829003601f168201915b505050505081565b8060078190555050565b6000610cb833848461060b565b905092915050565b600080600080610cd3878787600061138d565b915091508181935093505050935093915050565b60006006547f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960001b898989600560008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548a604051602001610d6996959493929190611c77565b60405160208183030381529060405280519060200120604051602001610d90929190611b66565b604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff161415610e18576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e0f90611d9a565b60405180910390fd5b60018185858560405160008152602001604052604051610e3b9493929190611cd8565b6020604051602081039080840390855afa158015610e5d573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff1614610ed4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ecb90611dba565b60405180910390fd5b6000851480610ee35750844211155b610f22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f1990611dfa565b60405180910390fd5b7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08260001c1115610f88576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f7f90611d7a565b60405180910390fd5b600560008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190610fd890612277565b919050555085600460008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508673ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925886040516110bb9190611e3a565b60405180910390a35050505050505050565b6004602052816000526040600020602052806000526040600020600091509150505481565b60006110fd82611128565b9050919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006007548261113891906120ef565b9050919050565b60008060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161119d9190611b9d565b60206040518083038186803b1580156111b557600080fd5b505afa1580156111c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111ed919061185e565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e30443bc3060006040518363ffffffff1660e01b815260040161124b929190611bef565b600060405180830381600087803b15801561126557600080fd5b505af1158015611279573d6000803e3d6000fd5b505050506007548161128b9190611f4d565b8192509250509091565b80600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546112e09190611ef7565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516113819190611e3a565b60405180910390a35050565b60008061139a3386611400565b6000806113a88789876114f8565b91509150858210156113ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113e690611dda565b60405180910390fd5b818193509350505094509492505050565b80600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461144b9190612149565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516114ec9190611e3a565b60405180910390a35050565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e22f03c1856007548861154691906120ef565b6040518363ffffffff1660e01b8152600401611563929190611c18565b600060405180830381600087803b15801561157d57600080fd5b505af1158015611591573d6000803e3d6000fd5b50505050600754856115a391906120ef565b600091509150935093915050565b6000813590506115c081612375565b92915050565b6000815190506115d58161238c565b92915050565b6000813590506115ea816123a3565b92915050565b6000813590506115ff816123ba565b92915050565b600081519050611614816123ba565b92915050565b600081359050611629816123d1565b92915050565b60006020828403121561164157600080fd5b600061164f848285016115b1565b91505092915050565b6000806040838503121561166b57600080fd5b6000611679858286016115b1565b925050602061168a858286016115b1565b9150509250929050565b6000806000606084860312156116a957600080fd5b60006116b7868287016115b1565b93505060206116c8868287016115b1565b92505060406116d9868287016115f0565b9150509250925092565b600080600080600080600060e0888a0312156116fe57600080fd5b600061170c8a828b016115b1565b975050602061171d8a828b016115b1565b965050604061172e8a828b016115f0565b955050606061173f8a828b016115f0565b94505060806117508a828b0161161a565b93505060a06117618a828b016115db565b92505060c06117728a828b016115db565b91505092959891949750929550565b6000806040838503121561179457600080fd5b60006117a2858286016115b1565b92505060206117b3858286016115f0565b9150509250929050565b6000806000606084860312156117d257600080fd5b60006117e0868287016115b1565b93505060206117f1868287016115f0565b9250506040611802868287016115f0565b9150509250925092565b60006020828403121561181e57600080fd5b600061182c848285016115c6565b91505092915050565b60006020828403121561184757600080fd5b6000611855848285016115f0565b91505092915050565b60006020828403121561187057600080fd5b600061187e84828501611605565b91505092915050565b6118908161217d565b82525050565b61189f8161218f565b82525050565b6118ae8161219b565b82525050565b6118c56118c08261219b565b6122c0565b82525050565b6118d4816121dc565b82525050565b6118e381612200565b82525050565b60006118f482611ed0565b6118fe8185611edb565b935061190e818560208601612212565b61191781612357565b840191505092915050565b600061192f601d83611edb565b91507f45524332303a20696e73756666696369656e742d616c6c6f77616e63650000006000830152602082019050919050565b600061196f600283611eec565b91507f19010000000000000000000000000000000000000000000000000000000000006000830152600282019050919050565b60006119af602283611edb565b91507f45524332303a20696e76616c6964207369676e6174757265202773272076616c60008301527f75650000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611a15601883611edb565b91507f45524332303a20696e76616c69642d616464726573732d3000000000000000006000830152602082019050919050565b6000611a55601583611edb565b91507f45524332303a20696e76616c69642d7065726d697400000000000000000000006000830152602082019050919050565b6000611a95601583611edb565b91507f4e6f7420656e6f75676820756e6465726c79696e6700000000000000000000006000830152602082019050919050565b6000611ad5601583611edb565b91507f45524332303a207065726d69742d6578706972656400000000000000000000006000830152602082019050919050565b6000611b15601b83611edb565b91507f45524332303a20696e73756666696369656e742d62616c616e636500000000006000830152602082019050919050565b611b51816121c5565b82525050565b611b60816121cf565b82525050565b6000611b7182611962565b9150611b7d82856118b4565b602082019150611b8d82846118b4565b6020820191508190509392505050565b6000602082019050611bb26000830184611887565b92915050565b6000606082019050611bcd6000830186611887565b611bda6020830185611887565b611be76040830184611b48565b949350505050565b6000604082019050611c046000830185611887565b611c1160208301846118da565b9392505050565b6000604082019050611c2d6000830185611887565b611c3a6020830184611b48565b9392505050565b6000602082019050611c566000830184611896565b92915050565b6000602082019050611c7160008301846118a5565b92915050565b600060c082019050611c8c60008301896118a5565b611c996020830188611887565b611ca66040830187611887565b611cb36060830186611b48565b611cc06080830185611b48565b611ccd60a0830184611b48565b979650505050505050565b6000608082019050611ced60008301876118a5565b611cfa6020830186611b57565b611d0760408301856118a5565b611d1460608301846118a5565b95945050505050565b6000602082019050611d3260008301846118cb565b92915050565b60006020820190508181036000830152611d5281846118e9565b905092915050565b60006020820190508181036000830152611d7381611922565b9050919050565b60006020820190508181036000830152611d93816119a2565b9050919050565b60006020820190508181036000830152611db381611a08565b9050919050565b60006020820190508181036000830152611dd381611a48565b9050919050565b60006020820190508181036000830152611df381611a88565b9050919050565b60006020820190508181036000830152611e1381611ac8565b9050919050565b60006020820190508181036000830152611e3381611b08565b9050919050565b6000602082019050611e4f6000830184611b48565b92915050565b6000604082019050611e6a6000830185611b48565b611e776020830184611b48565b9392505050565b6000606082019050611e936000830186611b48565b611ea06020830185611b48565b611ead6040830184611b48565b949350505050565b6000602082019050611eca6000830184611b57565b92915050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b6000611f02826121c5565b9150611f0d836121c5565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611f4257611f416122ca565b5b828201905092915050565b6000611f58826121c5565b9150611f63836121c5565b925082611f7357611f726122f9565b5b828204905092915050565b6000808291508390505b6001851115611fc857808604811115611fa457611fa36122ca565b5b6001851615611fb35780820291505b8081029050611fc185612368565b9450611f88565b94509492505050565b6000611fdc826121c5565b9150611fe7836121cf565b92506120147fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff848461201c565b905092915050565b60008261202c57600190506120e8565b8161203a57600090506120e8565b8160018114612050576002811461205a57612089565b60019150506120e8565b60ff84111561206c5761206b6122ca565b5b8360020a915084821115612083576120826122ca565b5b506120e8565b5060208310610133831016604e8410600b84101617156120be5782820a9050838111156120b9576120b86122ca565b5b6120e8565b6120cb8484846001611f7e565b925090508184048111156120e2576120e16122ca565b5b81810290505b9392505050565b60006120fa826121c5565b9150612105836121c5565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561213e5761213d6122ca565b5b828202905092915050565b6000612154826121c5565b915061215f836121c5565b925082821015612172576121716122ca565b5b828203905092915050565b6000612188826121a5565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006121e7826121ee565b9050919050565b60006121f9826121a5565b9050919050565b600061220b826121c5565b9050919050565b60005b83811015612230578082015181840152602081019050612215565b8381111561223f576000848401525b50505050565b6000600282049050600182168061225d57607f821691505b6020821081141561227157612270612328565b5b50919050565b6000612282826121c5565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156122b5576122b46122ca565b5b600182019050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b60008160011c9050919050565b61237e8161217d565b811461238957600080fd5b50565b6123958161218f565b81146123a057600080fd5b50565b6123ac8161219b565b81146123b757600080fd5b50565b6123c3816121c5565b81146123ce57600080fd5b50565b6123da816121cf565b81146123e557600080fd5b5056fea26469706673582212209851195db0ee5aefa22d180c9ce566e5befa5ddf224f37cff08eda2a113cccc164736f6c63430008000033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): TestWrappedPositionInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestWrappedPosition;
}
export {};
