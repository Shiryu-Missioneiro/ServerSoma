class calculadora {
    
    calculo = (operacao, v1, v2) => { 
    switch(operacao) {
        case "soma":
        case "+":
            return(`Resultado do cálculo é ${v1 + v2}`);
        break;
        case "sub":
        case "-":
            return(`Resultado do cálculo é ${v1 - v2}`);
        break;
        case "mult":
        case "*":
            return(`Resultado do cálculo é ${v1 * v2}`);
        break;
        case "div":
        case "/":
            return(`Resultado do cálculo é ${v1 / v2}`);
        break;
        default:
            break;
    }
}};

module.exports = new calculadora();