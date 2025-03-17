// repetição por array

// array.forEach(elemento => {
// });

const cidades = ['Gaspar', 'Blumenau', 'Florianópolis', 'São Paulo']

cidades.forEach((elemento, index) => {
    console.log('Execução numero: ' + index)
    console.log(elemento)
})

// for normal

// for (let index = 0; index < 10; index++) {
// }

for (let indice = 0; indice < cidades.length; indice++) {
    console.log(cidades[indice])
}