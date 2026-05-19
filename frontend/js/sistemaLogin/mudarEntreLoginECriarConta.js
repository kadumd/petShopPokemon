export default class MudarEntreLoginECriarConta {
    constructor() {
        this.adicionarEventoClick()
    }

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
    }

    fazerLogin = () => {
        this.divCriarConta.style.display = 'none'
        this.divLogin.style.display = 'flex'
    }
}