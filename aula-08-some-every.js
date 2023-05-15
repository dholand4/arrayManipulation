const lista = [
    {
      nome: "Daniel",
      idade: 24,
      exibir: true,
    },
    {
      nome: "Quintina",
      idade: 23,
    },
    {
      nome: "Junior",
      idade: 35,
    },
  
    {
      nome: "Darlene",
      idade: 32,
    },
    {
      nome: "Jose",
      idade: 27,
    },
    {
      nome: "Edla",
      idade: 40,
    },
    {
      nome: "Alex",
      idade: 45,
    },
    {
      nome: "Davilla",
      idade: 20,
    },
    {
      nome: "Isaac",
      idade: 7,
    },
    {
      nome: "Henrique",
      idade: 03,
    },
  ];

  const resultadoSome = lista.some((objeto) => objeto.idade > 30);

  const resultadoEvery = lista.every((objeto => objeto.idade > 01));

  console.log("resultadoSome:", resultadoSome)

  console.log("resultadoEvery: ", resultadoEvery)