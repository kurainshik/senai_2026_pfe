let peso = 75.5;
let altura = 1.75;

let imc = peso / (altura ** 2);

console.log("Seu IMC é: " + imc.toFixed(2));

if (imc < 18.5) {
    console.log("Classificação: Abaixo do peso");
} else if (imc < 25) {
    console.log("Classificação: Normal");
} else if (imc < 30) {
    console.log("Classificação: Sobrepeso");
} else {
    console.log("Classificação: Obesidade");
}