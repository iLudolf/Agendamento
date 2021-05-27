let router = require('express').Router();

const ramaisController = require('../controllers/ramais-controller');

router.post('/', ramaisController.adicionarRamal);

router.get('/', ramaisController.listarRamal);

router.get('/:id', ramaisController.listarRamalPorID);

router.put('/:id', ramaisController.atualizarRamal);

router.delete('/:id', ramaisController.removerRamal);

module.exports = router;