// requerimos express
const express = require('express');
// crear contante app que escucha al servidor
const app = express();

//endpoint raiz
app.get('/', (req, res) => {
  return res.send('saludos');
});

app.listen(3000, () => {
  console.log('Server running at port 3000: http://localhost:3000');
});

// exportar el modulo
module.exports = app
