/* by: brunocneuhaus */

const express = require('express');
const router = express.Router();
const quizController = require('./../controllers/quiz');

router.get('/perguntas', quizController.listarPerguntas);
router.post('/inserir-pontuacao', quizController.inserirPontuacao);

module.exports = router;