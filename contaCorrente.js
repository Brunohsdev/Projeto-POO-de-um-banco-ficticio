import { Cliente } from "./cliente.js";

export class ContaCorrente{
    //atributos
    static numeroDeContas = 0;
    Agencia;
    _cliente;
    _Saldo = 0;
    //acessores
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }
    get cliente(){
        return this._cliente;
    }
    get saldo(){
        return this._Saldo;
    }
    constructor(cliente, Agencia){
        this.Agencia = Agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas ++; 
    }
    //metodos
    depositar(valor){
        if(valor <= 0) return;
            console.log(`Saldo depositado ${valor}`);
            this._Saldo += valor;
        
       
    }
    sacar(valor){
        if(this._Saldo >= valor){
            this._Saldo -= valor;
            console.log(`Valor Sacado! Agora você tem R$${this._Saldo}\n`)
            return valor;
        }
        else{
            console.log(`Saldo insuficiente! Você tem apenas R$${this._Saldo} e você quer sacar R$${valor}`)
        }
    }
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}