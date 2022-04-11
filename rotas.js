const express = require('express');
const calculadora = require('./calculo');
const rotas = express.Router();

rotas.get('/:operacao', (requisicao, resposta) => {
    const operacao = requisicao.params.operacao;
    const valor1 = parseInt(requisicao.query.v1);
    const valor2 = parseInt(requisicao.query.v2);
    const resultado = calculadora.calculo(operacao, valor1, valor2);
    resposta.send(resultado);
});

module.exports = rotas;