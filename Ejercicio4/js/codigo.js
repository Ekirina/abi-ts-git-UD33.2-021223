let num = prompt("Introduce número a factorizar");
let factorial = [];
let numFinal = 1;

for (let i = 1; i <= num; i++) {
    factorial.push(i);
}

for (let i = 0; i < factorial.length; i++) {
    numFinal = numFinal * factorial[i];
}
alert(numFinal);