const express = require('express');
const bodyParser = require('body-parser');

const server = express();
const PORT = process.env.PORT || 5000;

server.use(bodyParser.json());

server.get('/', (req, res) => {
    res.json({ status: 'OK', message: 'Quiz API is running' })
})

// importação de rotas aqui...

server.listen(PORT, () => {
    console.log(`API do quiz rodando na porta: ${PORT}`);
});



