const conexao = require('../database/conexao');

const executaQuery = (query, parametros = '') => {
    return new Promise((resolve, reject) => {
        conexao.query(query, parametros, (erros, resultados, campos) => {
            if (erro) {
                reject(erros)
            } else {
                resolve(resultados  )
            }
        })
    })
}

module.exports = executaQuery