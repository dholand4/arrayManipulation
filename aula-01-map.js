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

const converterObjeto = (objeto) => {
    return {
        ...objeto,
        nomeidade: `${objeto.nome} + ${objeto.idade}`
    }
}

console.log(lista.map(converterObjeto));
