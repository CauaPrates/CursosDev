console.log(`Trabalhando com condicionais \n \n`);


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagem = true;



console.log("Destinos:")
console.log(listaDeDestinos)

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade")
//     listaDeDestinos.splice(1, 1);//removendo item da lista
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado")
//     listaDeDestinos.splice(1, 1);//removendo item da lista
// } else {
//     console.log("Comprador não é maior de idade.");
// }

if (idadeComprador >= 18 || estaAcompanhada) {//uma ou outra tem que ser verdadeiras
    console.log("Comprador maior de idade")
    listaDeDestinos.splice(2, 1);//removendo item da lista
} else {
    console.log("Comprador não é maior de idade.");
}
console.log("Embarque: \n \n")

if(idadeComprador >= 18 && temPassagem){// && as duas tem que ser verdadeiras
    console.log("Boa viagem")
} else{
    console.log("Você não pode embarcar")
}



console.log(listaDeDestinos);
