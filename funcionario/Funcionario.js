export class Funcionario{
    constructor(nome, salario,cpf){
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;
        this._bonificacao = 1;
        this._senha;
    }
    get senha(){
        return this._senha;
    }
    cadrastrarSenha(senha){
        this._senha = senha;
    }
}