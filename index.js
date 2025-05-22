import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { Conta } from "./Conta.js";

//colocando os dados
const PessoaBruno = new Cliente("bruno",3048239584 );
const ContacorrenteCliente1 = new ContaCorrente(0, PessoaBruno, 1001 );



const contapoupanca = new Conta(50, PessoaBruno, 1001);

ContacorrenteCliente1.teste();
// const conta1 = new Conta(0, PessoaBruno, 9002)
// console.log(Conta)