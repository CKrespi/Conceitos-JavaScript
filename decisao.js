//if - else

// if ( condição ) {
//} else {    
//}

// Desição, nome
const nome = 'Cauê'

if (nome == 'Cauê') {
    console.log('Condição atendida!')
} else {
    console.log('Condição não atendida!')
}

console.log(nome == 'Cauê')

// Desição, idade
let idade = 23

if (idade == 22) {
    console.log('Condição atendida!')
} else {
    console.log('Condição não atendida!')
}

console.log(idade == 22)

// Desição, maior ou menor de idade.
let idade2 = 18

if (idade2 >= 18) {
    console.log('Maior de idade')
} else {
    console.log('Menor de idade')
}

console.log(idade2 >= 18)

// Desição, idade diferente
let idade3 = 30

if (idade3 != 30) {
    console.log('Condição atendida!')
} else {
    console.log('Condição não atendida!')
}

console.log(idade3 != 30)

// Desição, idade diferente com else if
let idade4 = 33

if (idade4 == 30) {
    console.log('Condição atendida!')
} else if (idade4 == 33) {
    console.log('Idade 33!')
} else {
    console.log('Nenhuma condição atendida!')
}

// Desição com booleano
const e_maior_idade = true

if (e_maior_idade) {
    console.log('É maior de idade!')
} else {
    console.log('Não é maior de idade')
}