console.log(`\n Trabalhando com condicionais\n`);


const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);

const idadeComprador = 16;
const estaAcompanhada = false;
let temPassagem = false;
const destino = "Salvador";



console.log("\n Destinos:")
console.log(listaDeDestinos)


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true; //uma ou outra tem que ser verdadeiras

let contador = 0;
let destinoExiste = false;

while (contador < 3) {

  if (listaDeDestinos[contador] == destino) {
    console.log("Destino existe");
    destinoExiste = true;
    break;
  } else {
    destinoExiste = false;
  }
  contador += 1;
}

console.log("Destino existe: ", destinoExiste)

if (podeComprar && destinoExiste) {
  console.log("Boa viagem");
} else {
  console.log("Desculpe tivemos um erro")
}



for (let cont = 0; cont < 3; cont++) {

  if (listaDeDestinos[contador] == destino) {
    console.log("Destino existe");
    destinoExiste = true;
    
  } 
}




// console.log("Embarque: \n \n")

// if(idadeComprador >= 18 && temPassagem){// && as duas tem que ser verdadeiras
//     console.log("Boa viagem")
//     temPassagem = true;
// } else{
//     console.log("Você não pode embarcar")
//     temPassagem = false;
// }



// console.log(listaDeDestinos);
