import { Conta } from "./Conta";

export class ContaCorrente extends Conta{
    //atributos
    static numeroDeContas = 0;

    constructor(cliente, agencia){
        super(0, cliente, agencia);//faz uma referencia de conta
        ContaCorrente.numeroDeContas +=1; 
    }
    // teste(){
    //     super.teste();
    //     console.log('teste na classe conta corrente')
    // }
    //sobreescrevendo o comportamneto de sacar
    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor,taxa);
    }
}