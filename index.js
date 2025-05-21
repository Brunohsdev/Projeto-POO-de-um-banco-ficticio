import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./contaCorrente.js";

//colocando os dados
const PessoaBruno = new Cliente("bruno",3048239584 );
const ContacorrenteCliente1 = new ContaCorrente(PessoaBruno, 1001 );
const cliente2 = new Cliente("alice",43839534);
const conta2 = new ContaCorrente(cliente2, 102);




//aqui testa se está funcionando

// ContacorrenteCliente1.depositar(10000);
// const valorSacado = ContacorrenteCliente1.sacar(500);

// console.log(valorSacado);




// ContacorrenteCliente1.transferir(500, conta2);
// console.log(ContacorrenteCliente1);
// console.log(conta2.saldo);
// console.log(cliente2.cpf)


// console.log(ContaCorrente.numeroDeContas)