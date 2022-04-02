import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ICCPool, ICCPoolInterface } from "../ICCPool";
export declare class ICCPool__factory {
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ICCPoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICCPool;
}
