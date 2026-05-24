export default class Localizacao {
    constructor() {
        this.adicionarClickNosOptions()
    }

    selectEstadosInput = document.querySelector('#selectEstadosInput')

    adicionarClickNosOptions = async () => {
        this.selectEstadosInput.addEventListener('change', async function () {
            let cidadeEscolhida = this.value
            const pedido = await fetch("/frontend/json/sistemaLogin/localizacaoRuas.json")
            const ruasApi = await pedido.json()

            let ruasDaCidadeClicada = ruasApi[`${cidadeEscolhida}`]

            let selectRuasInput = document.querySelector('#selectRuasInput')
            selectRuasInput.innerHTML = ''
            selectRuasInput.style.display = 'flex'

            ruasDaCidadeClicada.forEach(element => {
                let option = document.createElement('option')
                option.textContent = element
                option.value = element

                selectRuasInput.appendChild(option)
            });
        })
    }
}