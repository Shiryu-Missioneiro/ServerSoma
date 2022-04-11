const express = require('express');
const calculadora = require('./calculo');
const rotas = require('./rotas');
const app = express();
const port = 3000;

app.get('./operacao', (requisicao, resposta) => {
    let resultado = calculadoraz()
    console.log(requisicao.query);
    const operacao = requisicao.params.operacao;
    const v1 = parseInt(requisicao.query.v1);
    const v2 = parseInt(requisicao.query.v2);
    resposta.send(`${calculadora}`)
});

app.use(rotas);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});