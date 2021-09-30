let votA = 0;
let votB = 0;


for( let i = 0 ; i < 5 ; i++){

    let userName = prompt("Usuario");
    let votUser = prompt("Ingrese A o B");


    if  (votUser == "A"){

        console.log("El usuario "+userName);
        console.log("Voto por A");
        votA++;

    }else if  (votUser == "B"){

        console.log("El usuario "+userName);
        console.log("Voto por B");
        votB++;

    }else if  (votUser == ""){

        console.log("El usuario "+userName);
        console.log("Voto en blanco");

    }else {

        console.log("Voto incorrecto");

    } 

}

if (votA > votB){

      console.log("Gano A");

}else if (votA < votB){

     console.log("Gano B");
     
}else{
    console.log("Voto nulo");
}
    





/*
let numberUser = prompt("Tabla del numere x");

for(let i = 1 ; i <= 10 ; i++){

    console.log(numberUser * i);

}



let number = prompt("Ingrese numero");

for(let i = 0 ; i <= 10 ; i++){

    console.log(number +)
}


var sumRest = prompt("Queres sumar o restar");

while( sumRest != "")
*/