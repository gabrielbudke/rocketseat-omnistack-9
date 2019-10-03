/**
 *  O Controller vai receber uma requisição, vai tratar da requisição 
    fazendo todo tipo de regra de negócio que ele precisa e devolver 
    uma resposta.
 */

/**
 *  Métodos do Controler: index, show, store, update, destroy
 * 
 *      index: Significa que estamos criando um método que vai retornar uma listagem de spots.
 *      show: Serve quando queremos listar um único spot.
 *      store: Quando quero criar um spot.
 *      update: Quando quero editar/alterar um spot
 *      destroy: Quando quero remover/deletar um spot
 * 
 */

const User = require('../models/User');
const Spot = require('../models/Spot');

module.exports = {
    // Método para listagem dos spots
    async index(req, res) {
        const { tech } = req.query;

        const spots = await Spot.find({ techs: tech });

        return res.json(spots);
    },
   
    // Método para criação de spots
    async store(req, res) {
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if(!user){
            return res.status(400).json({ error: 'User does not exists' });
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company: company,
            techs: techs.split(',').map(tech => tech.trim()),
            price: price
        }) 

        return res.json(spot)
    }
};    