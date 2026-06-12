const express = require('express');
const app = express();

app.get('/produtos', (req, res) => {
  res.json([
    { id: 1, nome: 'Camiseta', preco: 59.90 },
    { id: 2, nome: 'Tênis', preco: 199.90 }
  ]);
});

app.listen(3001, () => {
  console.log('Serviço de Catálogo rodando na porta 3001');
});