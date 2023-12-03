let array = [];
let tamanyo = prompt("Introduce tamaño del array");
tamanyo = parseInt(tamanyo);
let suma = 0;

function relleno(min, max) {
    for (let i = 1; i <= tamanyo; i++) {
    array.push(parseInt(Math.random() * (max - min + 1)) + min);
    }
}

function arraymuestra() {
    array.forEach(numero => {
        suma = suma + numero;
    });
    console.log(array);
    console.log(suma);
}

relleno(0,9);
arraymuestra();

