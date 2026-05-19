export default class LogarNaConta {
    constructor() {
        this.adicionarEventosDeClick()
    }

    botaoParaEntrarNoSite = document.querySelector('#botaoParaEntrarNoSite')
    botaoParaCriarConta = document.querySelector('#botaoParaCriarConta')

    adicionarEventosDeClick = () => {
        this.botaoParaEntrarNoSite.addEventListener('click', this.entrarNoSite)
        this.botaoParaCriarConta.addEventListener('click', this.criarContaParaEntrarNoSite)
    }

    entrarNoSite = () => {
        const nomeLoginInput = document.querySelector('#nomeLogin')
        const emailLoginInput = document.querySelector('#emailLogin')
        const senhaLoginInput = document.querySelector('#senhaLogin')

        let nomeLogin = nomeLoginInput.value
        let emailLogin = emailLoginInput.value
        let senhaLogin = senhaLoginInput.value

        fetch('/login', {
            method: "POST",
            body: JSON.stringify({ nomeLogin, emailLogin, senhaLogin })
        }).then(r => r.json()).then(r => {
            if (r.resposta === "lacuna vazia") {
                window.alert("Alguma das lacunas está vazia")
                return
            }
            if (r.acesso === "permitido") {
                location.assign("./frontend/html/petShop.html")
            } else {
                window.alert("Alguma das lacunas está incorreta")
            }
        })
    }

    criarContaParaEntrarNoSite = () => {
        const nomeCriarContaInput = document.querySelector('#nomeCriarConta')
        const emailCriarContaInput = document.querySelector('#emailCriarConta')
        const senhaCriarContaInput = document.querySelector('#senhaCriarConta')
        const selectEstadosInput = document.querySelector('#selectEstadosInput')

        let nome = nomeCriarContaInput.value
        let email = emailCriarContaInput.value
        let senha = senhaCriarContaInput.value
        let localizacao = selectEstadosInput.value

        fetch('/criarConta', {
            method: "POST",
            body: JSON.stringify({ nome, email, senha, localizacao })
        }).then(r => r.json()).then(r => {
            if (r.resposta === "Alguma lacuna esta vazia") {
                window.alert("Alguma das lacunas está vazia")
            }
            if (r.resposta === "O nome ja esta sendo usado") {
                window.alert("Este nome já está sendo usado")
            }
            if (r.resposta === "Voltar ao fazer login") {
                location.assign("/")
            }
        })
    }
}