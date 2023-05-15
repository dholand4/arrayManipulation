const lista = [
    {
        nome: 'Daniel',
        idade: 24
    },
    {
        nome: 'Quintina',
        idade: 23
    },
    {
        nome: 'Junior',
        idade: 35
    },

    {
        nome: 'Darlene',
        idade: 32
    },
    {
        nome: 'Jose',
        idade: 27
    },
    {
        nome: 'Edla',
        idade: 40
    },
    {
        nome: 'Alex',
        idade: 45
    },
    {
        nome: 'Davilla',
        idade: 20
    },

]

let soma = 0;

const somaIdade = (objeto) => {
    soma += objeto.idade
}

lista.forEach(somaIdade);

console.log('Soma: ', soma)