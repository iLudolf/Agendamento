
const express = require('express');
const sync = require('./services/conect.postgres').sincronizarPostgres;
const app = express();

const port = 3000;
const hostname = 'localhost';


(async () => await sync())() //Sincroniza o Postgres

//Rotas
const defaultRoutes = require('./routes/default-routes');
const ramaisRoutes = require('./routes/ramais-routes');


//Parsing do conteúdo das requisições 
app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());


app.use('/', defaultRoutes);
app.use('/ramais/', ramaisRoutes);

app.listen(port, hostname, () => {
  console.log(`Servidor rodando no endereço: http://${hostname}:${port}\n\n`);
});

