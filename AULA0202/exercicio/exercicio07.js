let num1 = Number(prompt("Digite o primeiro número:"));
let operacao = prompt("Digite o símbolo da operação (+, -, *, /):");
let num2 = Number(prompt("Digite o segundo número:"));

let resultado;

switch (operacao) {
    case "+":
        resultado = num1 + num2;
        break;
    case "-":
        resultado = num1 - num2;
        break;
    case "*":
        resultado = num1 * num2;
        break;
    case "/":

        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            resultado = "Erro: Divisão por zero!";
        }
        break;
    default:
        resultado = "Operação inválida!";
}

console.log("Resultado: " + resultado);