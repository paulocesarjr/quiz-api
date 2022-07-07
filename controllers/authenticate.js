/* by: ArthurSV */

const author_key = "4U70r";

exports.auth = async (req, res) => {
    var nickname = req.body.nickname
    var response

    if (nickname == author_key) {

        //se true AUTOR
        response = true
    } else {
        // se false JOGADOR
        response = false
    }

    await res.status(200).send({ valid: response })
}