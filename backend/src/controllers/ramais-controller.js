const ramaisModel = require('../models/ramais-model');

exports.adicionarRamal = async (req, res) => {
    const ramal = req.body;

    const ramalExiste = await ramaisModel.findAll({
        where: {
            numero: ramal.numero
        }
    });

    // console.log(ramalExiste);

    if (ramalExiste.length > 0) {     
        res.status(403).json({
            status: "erro",
            resultado: "Já existe o ramal cadastrado"
        })
    } else {
        const ramalInserido = await ramaisModel.create({
            nome: ramal.nome,
            email: ramal.email,
            setor: ramal.setor,
            unidade: ramal.unidade,
            numero: ramal.numero

        });
        res.status(200).json({
            status: 'ok',
            resultado: ramalInserido
        })
    }
}

exports.listarRamal = async (req, res) => {
    try {
        const ramais = await ramaisModel.findAll();
        res.status(200).json({
            status: 'OK',
            alunos: ramais
        })
    } catch (error) {   
        res.status(404).json({
            status: 'erro',
            message: 'Não foi possível recuperar os ramais'
        })
    }
}

exports.listarRamalPorID = async (req, res) => {
    let registro_id = req.params.id;

    try {
        const ramal = await ramaisModel.findByPk(registro_id);
        // console.log(ramal);
        if (ramal) {
            res.status(200).json({
                status: "ok",
                message: "Ramal encontrado com sucesso!",
                aluno: ramal
            })
        } else {
            res.status(406).json({
                status: "erro",
                message: `Não foi possivel localizar o ramal de id ${registro_id}!`
            })
        }
    } catch (erro) {       
        res.status(404).json({
            status: "erro",
            message: `Erro ao localizar o registro com id ${registro_id}!`
        })
    }
}

exports.atualizarRamal = async (req, res) => {

    try {
        let registro_id = req.params.id;

        let novoRegistro = {
            nome: req.body.nome,
            email: req.body.email,
            idade: req.body.idade,
            data_alteracao: new Date()
        }

        if (registro_id) {

            let registroAtualizado = await ramaisModel.update(novoRegistro, { where: { id: registro_id } })

            if (registroAtualizado) {
                res.status(200).json({
                    status: "ok",
                    message: "Registro atualizado com sucesso!",
                    novoRegistro: novoRegistro
                })
            } else {
                res.status(404).json({
                    status: "erro",
                    message: `Erro ao atualizar o registro de id ${registro_id}`
                })
            }
        } else {
            console.log('Sem id');
        }
    } catch (error) {
        res.status(406).json({
            status: "erro",
            message: error
        })
    }

}

exports.removerRamal = async (req, res) => {
    let registro_id = req.params.id;

    if(registro_id){
        try{
            let alunoDeletado = await ramaisModel.destroy({where: {id: registro_id}});
            if(alunoDeletado){
                res.status(200).json({
                    status: "ok",
                    message: `Registro de id ${registro_id} deletado com sucesso!`
                })
            }else{
                res.status(404).json({
                    status: "erro",
                    message: `Não foi possível deletar o Registro de id ${registro_id}`
                })

            }
        }catch(erro){
            res.status(406).json({
                status: "erro",
                message: `Não foi possível deletar o Registro de id ${registro_id} `
            })
        }
    }

}