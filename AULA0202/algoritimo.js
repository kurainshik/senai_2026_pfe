function calcular(num1, num2, operacao) {
    let resultado;

    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero";
            break;
        default:
            resultado = "Operação inválida";
    }

    return resultado;
}

console.log("Soma: " + calcular(10, 5, '+'));
console.log("Multiplicação: " + calcular(4, 2, '*'));
console.log("Divisão: " + calcular(10, 0, '/'));