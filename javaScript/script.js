/* crie um programa que percorra os numeros de 1 até 100 diga, quando for multiplo de 3 "Mar" e quando for multiplo de 4 "Menino" e quando for multiplo dos dois "Mar menino"
*/

let contadorMarMenino = 0
let contadorMar = 0
let contadorMenino = 0

for (let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 4 === 0) {
        //console.log(`${i} Mar Menino`)
        contadorMarMenino++
    } else if (i % 3 === 0) {
        //console.log(`${i} Mar`)
        contadorMar++
    } if( i % 4 === 0) {
        //console.log(`${i} Menino`)
        contadorMenino++
    }
    
}
console.log(contadorMarMenino,contadorMar,contadorMenino)