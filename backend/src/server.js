
const express = require('express');
var cors = require('cors');

const sync = require('./services/conect.postgres').sincronizarPostgres;
const app = express();



const port = 3443;
const hostname = 'localhost';


(async () => await sync())() //Sincroniza o Postgres

//Rotas
const defaultRoutes = require('./routes/default-routes');
const ramaisRoutes = require('./routes/pessoa-routes');


//Parsing do conteúdo das requisições 
app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());
app.use(cors());


app.use('/', defaultRoutes);
app.use('/pessoas/', ramaisRoutes);

app.listen(port, hostname, () => {
  console.log(`Servidor rodando no endereço: http://${hostname}:${port}\n\n`);
});

