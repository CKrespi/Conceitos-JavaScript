// Aula 5 - Curso em Vídeo - JavaScript
// Aprendizados sobre comentários, boas práticas de variáveis e tipos de dados

/* 
 Comentários de múltiplas linhas:
 Esse bloco serve para documentar melhor o código.
*/

// Tipos primitivos
let numero = 42;                // number
let infinito = Infinity;        // também é do tipo number
let naoNumero = NaN;            // Not a Number, também do tipo number

let texto = "Olá, mundo!";      // string
let verdadeiro = true;          // boolean
let nulo = null;                // null (tipo especial, representa 'ausência' de valor)
let indefinido;                 // undefined (variável declarada mas não inicializada)

// Tipos derivados (ou estruturais)
let objeto = {
    nome: "Cauê",
    idade: 23,
    estudante: true
}; // object

let lista = ["JS", "HTML", "CSS"]; // array (que é um tipo de object)

function saudacao(nome) {
    return `Olá, ${nome}!`;
} // function (também é um objeto especial)

// Saída no console para visualizar os tipos
console.log(typeof numero);      // number
console.log(typeof infinito);    // number
console.log(typeof naoNumero);   // number
console.log(typeof texto);       // string
console.log(typeof verdadeiro);  // boolean
console.log(typeof nulo);        // object (comportamento histórico do JS)
console.log(typeof indefinido);  // undefined
console.log(typeof objeto);      // object
console.log(typeof lista);       // object
console.log(typeof saudacao);    // function

// Teste de função
console.log(saudacao("Cauê"));