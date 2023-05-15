const lista = [
    {
      nome: "Daniel",
      idade: 24,
      cartoes: ["1234", "9871"]
    },
    {
      nome: "Quintina",
      idade: 23,
      cartoes: ["2314", "4243"]
    },
    {
      nome: "Junior",
      idade: 35,
      cartoes: ["1265", "9873"]
    },
  
    {
      nome: "Darlene",
      idade: 32,
      cartoes: ["1235", "5972"]
    },
    {
      nome: "Jose",
      idade: 27,
      cartoes: ["5431", "8792"]
    },
    {
      nome: "Edla",
      idade: 40,
      cartoes: ["1235", "9519"]
    },
    {
      nome: "Alex",
      idade: 45,
      cartoes: ["4312", "5195"]
    },
    {
      nome: "Davilla",
      idade: 20,
      cartoes: ["1234", "2197"]
    },
    {
      nome: "Isaac",
      idade: 7,
      cartoes: ["8941", "9511"]
    },
    {
      nome: "Henrique",
      idade: 03,
      cartoes: ["7654", "1235"]
    },
  ];

  const cartoes = lista.flatMap((cartao) => cartao.cartoes);

  console.log(cartoes)