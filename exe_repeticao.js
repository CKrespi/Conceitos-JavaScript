// Exercício 1 - Estrutura de repetição

// Percorrer uma lista de nomes, contendo os nomes:
// Eduardo, Maria, Fernando, Joao e Francisco
// Numero da execução, começando em 1
// Nome que está sendo executado
// Separadores

// Execução: 1
// Nome: Eduardo
// -------------------

const nomes = ['Eduardo', 'Maria', 'Fernando', 'Joao', 'Francisco']
    
nomes.forEach((elemento, index) => { 
    console.log('Execução: ' + (index + 1)) 
    console.log('Nome: ' + elemento)
    console.log('-------------------')
})