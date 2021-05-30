const agendamentoModel = require('../models/agendamento-model');
const pessoaModel = require('../models/pessoa-model');


exports.adicionarAgendamento = async (valores) => {
    const pessoa = valores;

    const pessoaExiste = await pessoaModel.findAll({
        where: {
            cpf_pessoa: pessoa.cpf_pessoa
        }
    });

    if (pessoaExiste.length > 0) {
        return "erro"
    } else {
        const pessoaExiste = await agendamentoModel.create({
            id_pessoa: pessoaExiste.id, 
            id_unidade: pessoaExiste.id_unidade,
            data_hora_agendamento: pessoaExiste.data_hora_agendamento,
            necessidades_especiais: pessoaExiste.necessidades_especiais,
            observacoes_agendamento: pessoaExiste.necessidades_especiais
           
        });
       
      
         
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