console.log(`Trabalhando com listas`);

// const salvador = `Salvador`; 
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Brasilia`)// adicionando um item na lista
console.log("Destinos:")
console.log(listaDeDestinos)

listaDeDestinos.splice(1,1);//removendo item da lista
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);