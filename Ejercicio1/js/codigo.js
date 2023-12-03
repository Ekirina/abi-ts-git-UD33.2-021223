const PI = 3.1416;
let quest = prompt("¿Qué área quieres saber? Triangulo, Cuadrado o Circulo?");
let result;

switch (quest) {
    case "Triangulo":
        areaTriangulo();
        console.log("El área es " + result);
        break;
    case "Cuadrado":
        areaCuadrado();
        console.log("El área es " + result);
        break;
    case "Circulo":
        areaCirculo();
        console.log("El área es " + result);
        break;        
    default:
        break;
}

function areaCirculo() {
    let radio = prompt("Introduce el radio del círculo");
    result = (radio ** 2) * PI;
}

function areaTriangulo() {
    let t1 = prompt("Introduce la base");
    let t2 = prompt("Introduce la altura");
    result = (t1*t2) / 2;

}
function areaCuadrado() {
    let c1 = promp("Introduce un lado");
    result = (c1*c1);

}

