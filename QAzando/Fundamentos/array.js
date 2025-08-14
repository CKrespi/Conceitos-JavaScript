const paises = ['Brasil', 'Argentina', 'Alemanha'] // Lista de dados

console.log('Acessando o país: ' + paises[1]) // Acessando uma posição do array
console.log('Tamanho do array: ' + paises.length) // Tamanho do array

// Operações com o array

paises.push('USA', 'Canadá') // Adiciona no final do array
paises.pop() // Remove ultimo elemento
paises.unshift('França', 'Itália') // Adiciona no início do array
paises.shift() // Remove o primeiro elemento

console.log(paises)