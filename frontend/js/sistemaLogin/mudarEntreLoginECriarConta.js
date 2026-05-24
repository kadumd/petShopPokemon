export default class MudarEntreLoginECriarConta {
    constructor() {
        this.adicionarEventoClick()
    }

    selectRuasInput = document.querySelector('#selectRuasInput')

    aparecerPaginaCriarConta = document.querySelector('#aparecerPaginaCriarConta')
    aparecerPaginaFazerLogin = document.querySelector('#aparecerPaginaFazerLogin')
    divLogin = document.querySelector('#div-login')
    divCriarConta = document.querySelector('#div-criarConta')

    adicionarEventoClick = () => {
        this.aparecerPaginaCriarConta.addEventListener('click', this.criarConta)
        this.aparecerPaginaFazerLogin.addEventListener('click', this.fazerLogin)
    }

    criarConta = () => {
        console.log('oi')
        this.divLogin.style.display = 'none'
        this.divCriarConta.style.display = 'flex'
        this.selectRuasInput.style.display = 'none'
        this.selectRuasInput.innerHTML = ''
    }

    fazerLogin = () => {
        this.divCriarConta.style.display = 'none'
        this.divLogin.style.display = 'flex'
    }
}