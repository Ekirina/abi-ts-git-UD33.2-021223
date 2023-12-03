let array = [];

for (let i = 1; i <= 10; i++) {
    array.push(prompt("Introduce el número de la posición " + i + " del array."));
}
      
for (let i = 0; i < array.length; i++) {
    console.log(array[i] + " es el valor de la posición " + i + " del array.");
}