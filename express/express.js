const express = require('express');

function controlador(req, res) {
  console.log(req);
  res.end('recibido')
}

const app = express();

app.get('/saludos', controlador);

const port = 8080;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});