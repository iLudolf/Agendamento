const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://root:dCblujdTceylQaMx@cluster0.c5jyf.mongodb.net/dev?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

try {
    db.on('error', console.error.bind(console, 'Erro ao conectar no Mongo'));
    db.once('open', function () {
        console.log("Banco de Dados Mongo conectado com sucesso");
    });
} catch (error) {
    console.log(error)
}

module.export = db;