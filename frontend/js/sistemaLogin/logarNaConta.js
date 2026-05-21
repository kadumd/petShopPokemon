export default class LogarNaConta {
    constructor() {
        this.adicionarEventosDeClick()
    }

    nomeLoginInput = document.querySelector('#nomeLogin')
    emailLoginInput = document.querySelector('#emailLogin')
    senhaLoginInput = document.querySelector('#senhaLogin')

    nomeCriarContaInput = document.querySelector('#nomeCriarConta')
    emailCriarContaInput = document.querySelector('#emailCriarConta')
    senhaCriarContaInput = document.querySelector('#senhaCriarConta')
    selectEstadosInput = document.querySelector('#selectEstadosInput')

    botaoParaEntrarNoSite = document.querySelector('#botaoParaEntrarNoSite')
    botaoParaCriarConta = document.querySelector('#botaoParaCriarConta')

    adicionarEventosDeClick = () => {
        this.nomeLoginInput.addEventListener('keydown', (e) => {
            let tecla = e.key
            if (tecla === 'Enter') {
                this.entrarNoSite()
            }
        })
        this.emailLoginInput.addEventListener('keydown', (e) => {
            let tecla = e.key
            if (tecla === 'Enter') {
                this.entrarNoSite()
            }
        })
        this.senhaLoginInput.addEventListener('keydown', (e) => {
            let tecla = e.key
            if (tecla === 'Enter') {
                this.entrarNoSite()
            }
        })
        this.botaoParaEntrarNoSite.addEventListener('click', this.entrarNoSite)

        this.botaoParaCriarConta.addEventListener('click', this.criarContaParaEntrarNoSite)
        this.nomeCriarContaInput.addEventListener('keydown', (e) => {
            let tecla = e.key
            if (tecla === 'Enter') {
                this.criarContaParaEntrarNoSite()
            }
        })
        this.emailCriarContaInput.addEventListener('keydown', (e) => {
            let tecla = e.key
            if (tecla === 'Enter') {
                this.criarContaParaEntrarNoSite()
            }
        })
        this.senhaCriarContaInput.addEventListener('keydown', (e) => {
            let tecla = e.key
            if (tecla === 'Enter') {
                this.criarContaParaEntrarNoSite()
            }
        })
        this.selectEstadosInput.addEventListener('keydown', (e) => {
            let tecla = e.key
            if (tecla === 'Enter') {
                this.criarContaParaEntrarNoSite()
            }
        })
    }

    entrarNoSite = () => {
        let nomeLogin = this.nomeLoginInput.value
        let emailLogin = this.emailLoginInput.value
        let senhaLogin = this.senhaLoginInput.value

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
        let nome = this.nomeCriarContaInput.value
        let email = this.emailCriarContaInput.value
        let senha = this.senhaCriarContaInput.value
        let localizacao = this.selectEstadosInput.value

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