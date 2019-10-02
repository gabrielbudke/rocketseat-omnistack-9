/**
 *  O Controller vai receber uma requisição, vai tratar da requisição 
    fazendo todo tipo de regra de negócio que ele precisa e devolver 
    uma resposta.
 */

/**
 *  Métodos do Controler: index, show, store, update, destroy
 * 
 *      index: Significa que estamos criando um método que vai retornar uma listagem de sessões.
 *      show: Serve quando queremos listar uma única sessão.
 *      store: Quando quero criar uma sessão.
 *      update: Quando quero editar/alterar uma sessão.
 *      destroy: Quando quero remover/deletar uma sessão
 * 
 */

const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { email } = req.body;
        
        // Verifica se já existe um e-mail cadastrado no banco de dados
        let user = await User.findOne({ email });

        if(!user){
            user = await User.create({ email });
        }

        return res.json(user);
    }
};