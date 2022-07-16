const Sequelize = require('sequelize')

const connection = new Sequelize('guiaperguntas','root', 'Joana20121992',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection; 