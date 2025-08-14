// Aula 08 – Curso em Vídeo (JavaScript)
// Operadores relacionais, lógicos e ternário

console.log("=== OPERADORES RELACIONAIS ===");

var a = 5;
var b = 8;
console.log("a > b:", a > b);         // false
console.log("a < b:", a < b);         // true
console.log("a == b:", a == b);       // false
console.log("a != b:", a != b);       // true
console.log("a == '5':", a == '5');   // true (compara só valor)
console.log("a === '5':", a === '5'); // false (compara valor e tipo)
console.log("a === 5:", a === 5);     // true

console.log("\n=== OPERADORES LÓGICOS ===");

console.log("true && false:", true && false); // false
console.log("true && true:", true && true);   // true
console.log("false || true:", false || true); // true
console.log("!false:", !false);               // true

console.log("\nExemplo com variáveis:");
var idade = 19;
console.log("idade >= 15 && idade <= 17:", idade >= 15 && idade <= 17); // false

var estado = 'SC';
console.log("estado == 'RJ' || estado == 'SP':", estado == 'RJ' || estado == 'SP'); // false

var salario = 2000;
var sexo = 'F';
console.log("salario > 1500 && sexo != 'M':", salario > 1500 && sexo != 'M'); // true

console.log("\n=== PRECEDÊNCIA E EXPRESSÕES ===");

console.log("a > b && b % 2 == 0:", a > b && b % 2 == 0); // false
console.log("a <= b || b / 2 == 2:", a <= b || b / 2 == 2); // true

console.log("\n=== OPERADOR TERNÁRIO ===");

var x = 7;
var resultado = x % 2 == 0 ? "PAR" : "ÍMPAR";
console.log("x é:", resultado); // ÍMPAR

var r = idade >= 18 ? "MAIOR" : "MENOR";
console.log("idade:", idade, "→", r);