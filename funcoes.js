// Funções

// Precisa chamar
// Pode ou não receber parâmetros
// Pode ou não retornar dados

// Função gerar nome
function gerarNome(nome, sobrenome, idade) {
    console.log('Nome: ', nome + sobrenome)
    console.log('Idade: ', idade)
}

gerarNome('Cauê', ' Krespi', 22)
gerarNome('João', ' da Silva', 55)

// Função nome gerado
function nomeGerado(nome, sobrenome) {
    return 'Nome: ' + nome + sobrenome
}

console.log(nomeGerado('Pedro', ' Paulo'))

const nomeGerado2 = nomeGerado('Pedro', " da Silva")
console.log(nomeGerado2)