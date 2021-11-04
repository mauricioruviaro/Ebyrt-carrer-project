const express = require('express');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (_request, response) => {
  response.send();
});

app.listen(PORT, () => console.log('Ouvindo aqui'));
