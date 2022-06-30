const pg = require('pg');
const client = new pg.Client('postgres://lvaocfgg:T9pCFM115QWxIIp6ox_Zmoe0mpJ-juwe@tuffi.db.elephantsql.com/lvaocfgg');

client.connect((erro) => {
    if (erro) {
        return console.log('Não foi possível se conectar com o ElephantSQL', erro);
    } else {
        return console.log('Conectado ao ElephantSQL!');
    }
});

module.exports = client;