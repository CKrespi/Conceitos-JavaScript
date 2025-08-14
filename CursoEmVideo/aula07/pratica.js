// Aula 07 - Curso em Vídeo (JavaScript)
// Operadores, Ordem de Precedência, Formas Simplificadas

console.log("=== OPERADORES ARITMÉTICOS ===");

var a = 10;
var b = 3;

console.log("a =", a, "b =", b);
console.log("Soma:", a + b);         // 13
console.log("Subtração:", a - b);    // 7
console.log("Multiplicação:", a * b);// 30
console.log("Divisão:", a / b);      // 3.333...
console.log("Resto da divisão:", a % b); // 1
console.log("Potência:", a ** b);    // 1000

console.log("\n=== ORDEM DE PRECEDÊNCIA ===");
// 1º () → 2º ** → 3º * / % → 4º + -
var resultado = 5 + 3 * 2;            // 5 + 6 = 11
var resultado2 = (5 + 3) * 2;         // 8 * 2 = 16
console.log("5 + 3 * 2 =", resultado);
console.log("(5 + 3) * 2 =", resultado2);

console.log("\n=== FORMAS SIMPLIFICADAS ===");

var n = 5;
console.log("Valor inicial de n:", n);

n = n + 1;           // forma comum
console.log("n = n + 1 →", n);

n += 1;              // forma simplificada (incremento)
console.log("n += 1 →", n);

n++;                 // pós-incremento (soma 1 depois)
console.log("n++ →", n);

++n;                 // pré-incremento (soma 1 antes)
console.log("++n →", n);

n *= 2;              // multiplicando n por 2
console.log("n *= 2 →", n);

n -= 4;              // subtraindo 4
console.log("n -= 4 →", n);

console.log("\n=== DICA FINAL ===");
// Pós-incremento vs Pré-incremento
var x = 5;
console.log("x =", x);
console.log("x++ →", x++); // Mostra 5, depois vira 6
console.log("Depois do x++:", x);
console.log("++x →", ++x); // Vira 7 antes de mostrar