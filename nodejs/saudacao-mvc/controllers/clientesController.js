const clientesModel = require('../models/clientesModel');

module.exports = {
    clientes: (req, res) => {
        res.sendFile('clientes.html', {root: './views'});
    },

    formulariologin: (req, res) => {
        res.sendFile('formulariologin.html', {root: './views'});
    },

    login: (req, res) => {
        const { login, senha} = req.body;
        const mensagem = clientesModel.gerarMensagem(login, senha);
        res.send(`<h1>${mensagem}</h1>`);
      }
};