const agendamentoModel = require('../models/agendamento-model');

// exports.adicionarAgendamento = async (req, res) => {
//     const unidade = req.body;

//     const unidadeExiste = await agendamentoModel.findAll({
//         where: {
//             email_unidade: unidade.email_unidade
//         }
//     });



//     if (unidadeExiste.length > 0) {
//         res.status(403).json({
//             status: "Erro",
//             resultado: `A unidade com e-mail: ${unidade.email_unidade} já está cadastrado no Sistema!` 
//         })
//     } else {
//         const unidadeExiste = await agendamentoModel.create({
//             nome_unidade: unidade.nome_unidade,
//             descricao_unidade: unidade.descricao_unidade,
//             endereço_unidade: unidade.endereço_unidade,
//             telefone_unidade: unidade.telefone_unidade,
//             email_unidade: unidade.email_unidade,
//             // endereço_unidade: pessoa.endereço_unidade,            
//         });
//         res.status(200).json({
//             status: 'ok',
//             resultado: 'Unidade criada com sucesso!'
//         })
//     }
// }

exports.listarAgendamento = async (req, res) => {
   
    try {
        const agendamento = await agendamentoModel.findAll();
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json({
            status: 'OK',
            Agendamentos: agendamento
        })
    } catch (error) {
        res.status(404).json({
            status: 'erro',
            message: 'Não foi possível recuperar os usuários'
        })
    }
}

exports.listarAgendamentoPorID = async (req, res) => {
    let agendamento_id = req.params.id;

    try {
        const agendamento = await agendamentoModel.findByPk(agendamento_id);

        if (agendamento) {
            res.status(200).json({
                status: "ok",
                message: "usuário encontrado com sucesso!",              
            })
        } else {
            res.status(406).json({
                status: "erro",
                message: `Não foi possivel localizar o usuário de id ${agendamento_id}!`
            })
        }
    } catch (erro) {
        res.status(404).json({
            status: "erro",
            message: `Erro ao localizar o usuários com id ${agendamento_id}!`
        })
    }
}

exports.atualizarAgendamento = async (req, res) => {

    try {
        let agendamento_id = req.params.id;

        let novoRegistro = {
            nome: req.body.nome,
            email: req.body.email,
            idade: req.body.idade,
            data_alteracao: new Date()
        }

        if (agendamento_id) {

            let registroAtualizado = await agendamentoModel.update(novoRegistro, { where: { id: agendamento_id } })

            if (registroAtualizado) {
                res.status(200).json({
                    status: "ok",
                    message: "Registro atualizado com sucesso!",
                    novoRegistro: novoRegistro
                })
            } else {
                res.status(404).json({
                    status: "erro",
                    message: `Erro ao atualizar o registro de id ${agendamento_id}`
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
    let agendamento_id = req.params.id;

    if (agendamento_id) {
        try {
            let agendamentoDeletado = await agendamentoModel.destroy({ where: { id: agendamento_id } });
            if (agendamentoDeletado) {
                res.status(200).json({
                    status: "ok",
                    message: `o Agendamento com id ${agendamento_id}, foi deletado com sucesso!`
                })
            } else {
                res.status(404).json({
                    status: "erro",
                    message: `Não foi possível deletar o Registro de id ${agendamento_id}`
                })

            }
        } catch (erro) {
            res.status(406).json({
                status: "erro",
                message: `Não foi possível deletar o Registro de id ${agendamento_id} `
            })
        }
    }

}