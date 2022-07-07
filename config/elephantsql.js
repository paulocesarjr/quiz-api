const pg = require('pg');
const client = new pg.Client('postgres://tvwetfwc:qlxmiAGyxzlgfl3lt3Lky9DcqwrAfS15@kesavan.db.elephantsql.com/tvwetfwc');

client.connect((erro) => {
    if (erro) {
        return console.log('Não foi possível se conectar com o ElephantSQL', erro);
    } else {
        return console.log('Conectado ao ElephantSQL!');
    }
});

module.exports = client;