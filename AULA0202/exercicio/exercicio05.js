let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

if (num1 === 0 || num2 === 0) {
    console.log("Atenção: Um dos números digitados é zero.");
}

if (num1 > num2) {
    console.log("O primeiro número (" + num1 + ") é maior que o segundo.");
} else if (num2 > num1) {
    console.log("O segundo número (" + num2 + ") é maior que o primeiro.");
} else {
    console.log("Os dois números são iguais.");
}