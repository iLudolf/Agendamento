const Sequelize = require('../services/conect.postgres').Sequelize;
const postgres = require('../services/conect.postgres').sequelize;

const pessoaModel = postgres.define('pessoa', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_pessoa: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf_pessoa: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_nascimento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone_pessoa: {
        type: Sequelize.STRING,
        allowNull: false
    },
    grupo_prioritario: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },  
    endereço_pessoa: {
        type: Sequelize.STRING,
        allowNull: false
    },  
    email_pessoa: {
        type: Sequelize.STRING,
        allowNull: false
    },  
    
    
});

module.exports = pessoaModel