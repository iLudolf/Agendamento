
const express = require('express');
var cors = require('cors');

const sync = require('./services/conect.postgres').sincronizarPostgres;
const app = express();



const port = 3001;
const hostname = 'localhost';


(async () => await sync())() //Sincroniza o Postgres

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
app.use('/pessoas/', pessoaRoutes);
app.use('/unidades/', unidadeRoutes);
app.use('/agendamento/', agendamentoRoutes);

app.listen(port, hostname, () => {
  console.log(`Servidor rodando no endereço: http://${hostname}:${port}\n\n`);
});

