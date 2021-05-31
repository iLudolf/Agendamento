
const express = require('express');
var cors = require('cors');

const syncPG = require('./services/conect.postgres').sincronizarPostgres;
const syncDB = require('./services/conect.mongodb');  //Sincroniza o Mongodb
const app = express();



const port = 3001;
const hostname = 'localhost';


(async () => await syncPG())() //Sincroniza o Postgres


// const mongoose = require('mongoose');

// mongoose.connect(`mongodb+srv://root:dCblujdTceylQaMx@cluster0.c5jyf.mongodb.net/dev?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Erro ao conectar no Mongo'));
// db.once('open', function() {
//     console.log("Banco de Dados Mongo conectado com sucesso");
// });


//Rotas
const defaultRoutes = require('./routes/default-routes');
const pessoaRoutes = require('./routes/pessoa-routes');
const unidadeRoutes = require('./routes/unidade-routes');
const agendamentoRoutes = require('./routes/agendamento-routes');


//Parsing do conteúdo das requisições 
app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());
app.use(cors());


app.use('/', defaultRoutes);
app.use('/pg/pessoas/', pessoaRoutes);
app.use('/pg/unidades/', unidadeRoutes);
app.use('/pg/agendamentos/', agendamentoRoutes);

app.listen(port, hostname, () => {
  console.log(`Servidor rodando no endereço: http://${hostname}:${port}\n\n`);
});

