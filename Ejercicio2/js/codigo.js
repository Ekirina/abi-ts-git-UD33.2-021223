let qtty = prompt("Introduce la cantidad de numeros que quieres");
let min = parseInt(prompt("Introduce el número mínimo"));
let max = parseInt(prompt("Introduce el número máximo"));
let num = [];

aleatorio(qtty, min, max);
console.log(num);

function aleatorio(qtty, min, max) {
    for (let i = 1; i <= qtty; i++) {
        num.push(parseInt(Math.random() * (max - min) + min));
    }
}


