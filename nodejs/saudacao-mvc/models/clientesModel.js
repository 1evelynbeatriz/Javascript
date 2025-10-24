module.exports = {
    gerarMensagem: (login, senha) => {
        let acesso;

        if (login === "evelyn" && senha === "1234") {
            acesso = "liberado";
        } else {
            acesso = "negado";
        }

        return `Olá, ${login}! Seu acesso foi ${acesso}.`;
    }
};