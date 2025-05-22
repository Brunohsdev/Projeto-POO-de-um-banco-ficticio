export class Conta{
    constructor( saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        if(this.constructor == Conta){
            throw new Error("Você não deveria intansciar um objeto do tipo conta diretamente, pois essa é uma classe abstrata");
        }
    }

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
     //metodos
    depositar(valor){
        if(valor <= 0) return;
            console.log(`Saldo depositado ${valor}`);
            this._Saldo += valor;
        
    
        }
        //metodo abstrado
    sacar(valor){
     
       
    }
    _sacar(valor, taxa ){
        const valorSacado = taxa * valor;
        if(this._Saldo >= valor){
            this._Saldo -= valor;
            console.log(`Valor Sacado! Agora você tem R$${this._Saldo}\n`)
            return valorSacado;
        }
        else{
            console.log(`Saldo insuficiente! Você tem apenas R$${this._Saldo} e você quer sacar R$${valor}`);
            return 0;
        }
    }
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        }

        teste(){
            console.log('teste na class conta')
        } 
}