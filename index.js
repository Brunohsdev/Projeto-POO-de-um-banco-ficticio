import { Cliente } from "./Cliente.js";
import { Gerente } from "./funcionario/Gerente.js";
import { Diretor } from "./funcionario/Diretor.js";
import { SistemaAutenticacao } from "./sistemaDeAutenticacao.js";



const cliente = new Cliente("larissa", 3949432, 1233,98765);

console.log(cliente)

const diretor = new Diretor("ROberto", 10000, 12123454356);
const gerente = new Gerente("Laercio", 423, 3245365765765);
gerente.cadrastrarSenha(12123454356);
diretor.cadrastrarSenha(1234);
const diretorestaLogado = SistemaAutenticacao.login(diretor,"1234");

const gerenteestaLogado = SistemaAutenticacao.login(gerente,"12123454356");

console.log(diretorestaLogado);
console.log(gerenteestaLogado);