let tamanyo1 = parseInt(prompt("Introduce la dimensión del primer array"));
let tamanyo2 = parseInt(prompt("Introduce la dimensión del segundo array"));
let array1 = rellenaArray(tamanyo1);
let array2 = rellenaArray(tamanyo2);
let result = multiplicacion(array1, array2);

console.log("Tamaño del primer array: ", array1);
console.log("Tamaño del segundo array: ", array2);
console.log("Resultado de la multiplicación: ", result);



function numRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rellenaArray(tamanyo) {
    let array = [];
    for (let i = 0; i < tamanyo; i++) {
        array.push(numRandom(1, 100));
    }
    return array;
}

function multiplicacion(array1, array2) {
    let resultado = [];
    for (let i = 0; i < Math.min(array1.length, array2.length); i++) {
        resultado.push(array1[i] * array2[i]);
    }
    return resultado;
}

