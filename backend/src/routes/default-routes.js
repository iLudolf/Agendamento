let router = require('express').Router();

router.get('/', function(req, res){
    res.json(dados);
});


const pessoaModel = {
     
  }

const dados = {
    "Rotas": {
      "Name": "Todas as rotas",
      "Description": "Informações sobre a API",
      "Path": "/"
    }, 
    Pessoas: {
        "Metodo: GET": {
            "Name": "Listar todas as pessoas cadastradas",
            "Description": "Retorna todas as Pessoas e seus dados.",
            "Path": "/Ramais"
          },  
          "Metodo: GET (ID)": {
              "Name": "Listar pessoa por ID",
              "Description": "Retorna registro pegando por o ID .",
              "Path": "/Ramais/ID"
            }, 
          "Metodo: POST": {
              "Name": "Enviar registro",
              "Description": `Retorna todas as Pessoas e seus dados.`,
              "Path": "/Ramais/"
            },
          "Metodo: DELETE (ID)": {
              "Name": "Enviar registro",
              "Description": `Retorna todas as Pessoas e seus dados.`,
              "Path": "/Ramais/"
            }
    } 
    
  }



module.exports = router;