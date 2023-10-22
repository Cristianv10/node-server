const express = require('express');
const app = express();

const tasks = [
  { id: 1, description: 'Hacer la compra', status: 'Pendiente' },
  { id: 2, description: 'Lavar el coche', status: 'Completada' },
  { id: 3, description: 'Estudiar para el examen', status: 'Pendiente' },
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});