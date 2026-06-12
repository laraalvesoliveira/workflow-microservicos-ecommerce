const express = require('express');
const app = express();

app.get('/pedidos', (req, res) => {
  res.json([
    { id: 1, cliente: 'Cliente Teste', status: 'Criado' }
  ]);
});

app.listen(3002, () => {
  console.log('Serviço de Pedidos rodando na porta 3002');
});