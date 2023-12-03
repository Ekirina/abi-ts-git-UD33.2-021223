let num = parseInt(prompt("Introduce un numero"));
let primo = true;

for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        primo = false;
    }
}

alert(primo);

