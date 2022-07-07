/* by: Gu1lh3rm3Fr4nca */

const express = require('express');
const router = express.Router();
const perguntaController = require('../controllers/pergunta');

router.get('/:id', perguntaController.pegarPergunta);
router.put('/:id', perguntaController.editarPergunta);
router.post('/', perguntaController.salvarPergunta);

module.exports = router;