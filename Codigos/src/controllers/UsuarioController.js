const mongoose = require('mongoose');


const Usuario = mongoose.model('User');


module.exports = {
    
   
    async insert (req, res) {
        const usuarios = await Usuario.create(req.body);

        return res.json(usuarios);
    },
    async get_all(req,res){
        
            const {page} = req.query;
            const usuarios = await Usuario.paginate({},{page, limit : 5});
            return res.json(usuarios);
    },
    async get_By_Id(req,res){
        const usuarios = await Usuario.findById(req.params.id);
        return res.json(usuarios);

    },
    async atualiza(req,res){
        const usuarios = await Usuario.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.json(usuarios);

    },
    async apagar(req,res){
        const usuarios = await Usuario.findByIdAndDelete(req.params.id);
        return res.send();
    }


}