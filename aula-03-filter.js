const lista = [
    {
        nome: 'Daniel',
        idade: 24,
        exibir: true,
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
    {
        nome: 'Isaac',
        idade: 7
    },
    {
        nome: 'Henrique',
        idade: 03
    },

]

const filtrarPessoa = (pessoa) => pessoa.idade > 30;

const listaFiltrada = lista.filter(filtrarPessoa);

console.log(lista)

console.log(listaFiltrada)