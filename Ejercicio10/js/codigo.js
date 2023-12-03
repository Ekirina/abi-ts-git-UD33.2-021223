let tamaño = prompt("Introduce el tamaño del array");
tamaño = parseInt(tamaño);
let primo = true;
let array = [];
let num;

const numRandom = () => {
    num = Math.floor(Math.random() * (100 - 3) + 3);
    return num;
}

const calculaPrimo = (valor) => {
    primo = true;
    for (let a = 2; a < valor; a++) {
        if (valor % a == 0) {
            primo = false;
        }
    }
}

const añadirArray = () => {
    while (array.length < tamaño) {
        calculaPrimo(numRandom());
        if (primo) {
            array.push(num);
        }
    }
}

añadirArray();
console.log(array);
