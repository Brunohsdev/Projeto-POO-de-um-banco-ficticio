import { Conta } from "./Conta/Conta.js";

export class ContaSalario extends Conta{
    constructor(cliente){
        super(0,cliente, 100);
    }

    sacar(valor){
        const taxa = 1.001;
        return this._sacar(valor, taxa);
    }
}