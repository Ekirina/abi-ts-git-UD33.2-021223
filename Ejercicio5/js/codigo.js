let num = parseInt(prompt("Indica que número quieres convertir en binario"));

function convertToBinary1(num) {
    let binary = (num % 2).toString();
    for (; num > 1;) {
      num = parseInt(num / 2);
      binary = (num % 2) + (binary);
    }
    alert(binary);
  }

convertToBinary1(num);