let euros = parseFloat(prompt("Introduce los euros a convertir"));
let moneda = prompt("Tipo de moneda: Libras, Dolares o Yenes");
const Libras = 0.86;
const Dolares = 1.28611;
const Yenes = 129.852;

cambio(euros, moneda);

 function cambio(euros, moneda) {
     switch (moneda) {
         case "Libras":
            result = (euros*Libras);
            console.log(result.toFixed(2));
             break;
         case "Dolares":
            result = (euros*Dolares);
            console.log(result.toFixed(2));
             break;
         case "Yenes":
            result = (euros*Yenes);
            console.log(result.toFixed(2));
             break;
         default:
             break;
     }
}

