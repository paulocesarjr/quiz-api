/* by: HenriqueFoletto */

const elephantSQL = require('./../config/elephantsql');

const listarperguntas = (req, res) => {

    elephantSQL.query('SELECT * FROM perguntas').then((result) => {
        res.json({ perguntas: result.rows });
    }, error => {
        res.json({ error: error });
    });
}

const deletarperguntas = (req, res) => {

    const sql = 'DELETE FROM perguntas WHERE pergunta_id=$1;';
    const values = [req.params.id];

    elephantSQL.query(sql, values).then(() => {
        res.json({ message: 'Pergunta removida!' });
    }, error => {
        res.json({ error: error });

    });
}

module.exports = {
    listarperguntas,
    deletarperguntas
}