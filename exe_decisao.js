// Exercício 2 - Estrutura de decisão

// Percorrer uma lista de cidades
// Contendo: ['São Paulo', 'Rio de Janeiro', 'Florianópolis', 'Recife']
// Para cada item, verificar se a cidade Florianópolis está presente na lista
// Printar nome da cidade
// Caso esteja, avisar
// Caso não esteja o elemento procurado, avisar
// Numero da execução

// Execução: 1
// Cidade: São Paulo
// Encontrado / Não Encontrado
// -------------------

const cidades = ['São Paulo', 'Rio de Janeiro', 'Florianópolis', 'Recife']
    
cidades.forEach((elemento, index) => { 
    console.log('Execução: ' + (index + 1)) 
    console.log('Cidade: ' + elemento)
    if (elemento == 'Florianópolis') {
        console.log('Encontrado')
    } else {
        console.log('Não Encontrado')
    }
    console.log('-------------------')
})