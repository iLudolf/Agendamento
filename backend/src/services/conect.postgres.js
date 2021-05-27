const {Sequelize} = require('sequelize');

// Docker 
// const sequelize = new Sequelize(`postgres://root:Luvep!ntranet2021!@localhost:5432/luvep`, {dialect: 'postgres', logging: false});

// AWS RDS
const sequelize = new Sequelize(`postgres://postgres:Ylo7j2kc5abfkUQh2PTX@postgres.cfnnnmc4rlso.sa-east-1.rds.amazonaws.com:5432/`, {dialect: 'postgres', logging: false});

const sincronizarPostgres = async () => {
    try{
        sequelize.sync();
        console.log("\n\nTodos os modelos foram sincronizados com sucesso. \n");
    }catch(erro){
        console.error(erro);
    }
}


module.exports = {sequelize, Sequelize, sincronizarPostgres};