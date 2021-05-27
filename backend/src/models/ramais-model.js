const Sequelize = require('../services/conect.postgres').Sequelize;
const postgres = require('../services/conect.postgres').sequelize;

const ramaisModel = postgres.define('ramais', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    setor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    unidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numero: {
        type: Sequelize.STRING,
        allowNull: false
    },  
    
});

module.exports = ramaisModel