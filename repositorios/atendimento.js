const query = require('../infraestrutura/database/quries')

class Atendimento {
    adiciona(atendimento) {
        const sql = 'INSERT INTO Atendimentos SET ?'
        return query(sql, atendimento)
    }
}

module.export = new Atendimento()