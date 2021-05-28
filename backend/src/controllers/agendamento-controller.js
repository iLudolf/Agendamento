const pessoaModel = require('../models/pessoa-model');

exports.adicionarAgendamento = async (req, res) => {
    const pessoa = req.body;

    const pessoaExiste = await pessoaModel.findAll({
        where: {
            cpf_pessoa: pessoa.cpf_pessoa
        }
    });



    if (pessoaExiste.length > 0) {
        res.status(403).json({
            status: "erro",
            resultado: "Usuário já está cadastrado no Sistema!"
        })
    } else {
        const pessoaExiste = await pessoaModel.create({
            nome_pessoa: pessoa.nome_pessoa,
            cpf_pessoa: pessoa.cpf_pessoa,
            data_nascimento: pessoa.data_nascimento,
            telefone_pessoa: pessoa.telefone_pessoa,
            grupo_prioritario: pessoa.grupo_prioritario,
            endereço_pessoa: pessoa.endereço_pessoa,
            email_pessoa: pessoa.email_pessoa
        });
        res.status(200).json({
            status: 'ok',
            resultado: pessoaExiste
        })
    }
}

exports.listarAgendamento = async (req, res) => {
   
    try {
        const pessoa = await pessoaModel.findAll();
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json({
            status: 'OK',
            Pessoas: pessoa
        })
    } catch (error) {
        res.status(404).json({
            status: 'erro',
            message: 'Não foi possível recuperar os usuários'
        })
    }
}

exports.listarAgendamentoPorID = async (req, res) => {
    let pessoa_id = req.params.id;

    try {
        const pessoa = await pessoaModel.findByPk(pessoa_id);

        if (pessoa) {
            res.status(200).json({
                status: "ok",
                message: "usuário encontrado com sucesso!",
                aluno: pessoa
            })
        } else {
            res.status(406).json({
                status: "erro",
                message: `Não foi possivel localizar o usuário de id ${pessoa_id}!`
            })
        }
    } catch (erro) {
        res.status(404).json({
            status: "erro",
            message: `Erro ao localizar o usuários com id ${pessoa_id}!`
        })
    }
}

exports.atualizarAgendamento = async (req, res) => {

    try {
        let pessoa_id = req.params.id;

        let novoRegistro = {
            nome: req.body.nome,
            email: req.body.email,
            idade: req.body.idade,
            data_alteracao: new Date()
        }

        if (pessoa_id) {

            let registroAtualizado = await pessoaModel.update(novoRegistro, { where: { id: pessoa_id } })

            if (registroAtualizado) {
                res.status(200).json({
                    status: "ok",
                    message: "Registro atualizado com sucesso!",
                    novoRegistro: novoRegistro
                })
            } else {
                res.status(404).json({
                    status: "erro",
                    message: `Erro ao atualizar o registro de id ${pessoa_id}`
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

exports.removerAgendamento = async (req, res) => {
    let pessoa_id = req.params.id;

    if (pessoa_id) {
        try {
            let alunoDeletado = await pessoaModel.destroy({ where: { id: pessoa_id } });
            if (alunoDeletado) {
                res.status(200).json({
                    status: "ok",
                    message: `Registro de id ${pessoa_id} deletado com sucesso!`
                })
            } else {
                res.status(404).json({
                    status: "erro",
                    message: `Não foi possível deletar o Registro de id ${pessoa_id}`
                })

            }
        } catch (erro) {
            res.status(406).json({
                status: "erro",
                message: `Não foi possível deletar o Registro de id ${pessoa_id} `
            })
        }
    }

}