/* by: brunocneuhaus */

const elephantSQL = require('../config/elephantsql');

const listarPerguntas = (req, res) => { // listar todas as perguntas

    elephantSQL.query('SELECT * FROM perguntas').then((result) => {
        res.json({ perguntas: result.rows });
    }, error => {
        res.json({ error: error });
    });
}

const inserirPontuacao = (req, res) => {
    const sql = 'INSERT INTO ranking(nickname, pontuacao) VALUES ($1, $2);';
    const values = [req.body.nickname, req.body.pontuacao];

    if (req.body.nickname == "") {
        res.json({ message: 'Favor inserir um nickname válido!' });
    }
    if (Number.isInteger(req.body.pontuacao)) {
        elephantSQL.query(sql, values).then(() => {
            res.json({ message: 'Pontuação inserida com sucesso!' });
        }
        )
    }
    else {
        res.json({ message: 'Pontuação inválida!' });
    }
    error => {
        res.json({ error: error });
    };
}

module.exports = {
    listarPerguntas,
    inserirPontuacao
}