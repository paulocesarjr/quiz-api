const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const server = express();
const PORT = process.env.PORT || 5000;

server.use(bodyParser.json());
server.use(cors());

const quizRoutes = require('./routes/quiz');
const authRoute = require('./routes/authenticate');
const salvaRoutes = require('./routes/salvapergunta')
const listaperguntas = require('./routes/listaperguntas');

server.get('/', (req, res) => {
    res.json({ status: 'OK', message: 'Quiz API está online com CI/CD.' })
})

server.use('/quiz', quizRoutes);
server.use('/auth', authRoute);
server.use('/pergunta', salvaRoutes);
server.use('/listapergunta', listaperguntas);

// importação de rotas aqui...

server.listen(PORT, () => {
    console.log(`API do quiz rodando na porta: ${PORT}`);
});



