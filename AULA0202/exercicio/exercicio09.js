let precoOriginal = 100.00;
let cupom = "PRATA";
let desconto = 0;

switch (cupom.toUpperCase()) {
    case "BRONZE":
        desconto = 0.05;
        break;
    case "PRATA":
        desconto = 0.10;
        break;
    case "OURO":
        desconto = 0.15;
        break;
    default:
        console.log("Cupom inválido. Nenhum desconto aplicado.");
        desconto = 0;
}

let valorDesconto = precoOriginal * desconto;
let precoFinal = precoOriginal - valorDesconto;

console.log("Preço original: R$ " + precoOriginal.toFixed(2));
console.log("Cupom aplicado: " + cupom);
console.log("Valor do desconto: R$ " + valorDesconto.toFixed(2));
console.log("Total a pagar: R$ " + precoFinal.toFixed(2));