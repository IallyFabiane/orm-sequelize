const database = require('../models')
const Services = require('./Services')

class MatriculasServices extends Services {
    constructor () {
        super('Matriculas')
    }
    //métodos específicos do MatriculasController
    async pegaRegistrosAtivos ( where = {} ) {
        return database[this.nomeDoModelo].findAll({ where: {...where}})
    }
    async pegaTodosOsRegistros ( where = {} ) {
        return database[this.nomeDoModelo].scope().findAll({ where: {...where}})
    }
}
module.exports = MatriculasServices