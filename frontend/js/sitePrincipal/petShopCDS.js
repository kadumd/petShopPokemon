export default class PetShopCDS {
    constructor() {
        this.fazerPedidoParaPokeApi()
    }

    painelDeVendasMoves = document.querySelector('#painelDeVendasMoves')

    fazerPedidoParaPokeApi = async (url = 'https://pokeapi.co/api/v2/move/?offset=0&limit=24') => {
        const pedido = await fetch(url)
        const pokeapi = await pedido.json()

        this.criarCards(pokeapi)
    }

    criarCards = (pokeapiParam) => {
        let pokeapiArray = pokeapiParam.results
        console.log(pokeapiArray)
        this.painelDeVendasMoves.innerHTML = ''
        pokeapiArray.forEach(async element => {
            const pedido = await fetch(element.url)
            const pokeapi = await pedido.json()
            console.log(pokeapi)

            const cards = document.createElement('div')
            cards.classList.add('cardsMoves')

            const name = document.createElement('p')
            name.classList.add('nomeDosMoves')
            name.textContent = pokeapi.name
            
            const precoDoCDMove = document.createElement('p')
            precoDoCDMove.classList.add('precoDoCDMove')
            precoDoCDMove.textContent = `${pokeapi.id} R$`

            cards.appendChild(name)
            cards.appendChild(precoDoCDMove)
            this.painelDeVendasMoves.appendChild(cards)
            
            cards.addEventListener('click', () => {
                this.clickDosCards(element.name, pokeapi.id, element.url)
            })
        });
    }

    clickDosCards = (name, id, url) => {
        const telaCinza = document.querySelector('#telaCinza')
        const conteudoDoCard = document.querySelector('#conteudoDoCard')
        telaCinza.style.display = 'flex'
        conteudoDoCard.style.display = 'flex'
        conteudoDoCard.innerHTML = ''

        const tituloDoMoveCDSQueFoiClicada = document.createElement('p')
        tituloDoMoveCDSQueFoiClicada.classList.add('tituloDoMoveCDSQueFoiClicada')
        tituloDoMoveCDSQueFoiClicada.textContent = name

        const precoDoMoveClicado = document.createElement('p')
        precoDoMoveClicado.classList.add('precoDoMoveClicado')
        precoDoMoveClicado.textContent = `${id} R$`

        const divDoBotao = document.createElement('div')
        divDoBotao.classList.add('divDoBotao')

        const botaoParaComprar = document.createElement('button')
        botaoParaComprar.classList.add('botaoParaComprarMoves')
        botaoParaComprar.textContent = "Comprar"

        divDoBotao.appendChild(botaoParaComprar)
        conteudoDoCard.appendChild(tituloDoMoveCDSQueFoiClicada)
        conteudoDoCard.appendChild(precoDoMoveClicado)
        conteudoDoCard.appendChild(divDoBotao)

        telaCinza.addEventListener('click', () => {
            telaCinza.style.display = 'none'
            conteudoDoCard.style.display = 'none'
        })

        botaoParaComprar.addEventListener('click', () => {
            let preco = id
            fetch('/adicionarNoCarrinhoOutros', {
                method: "POST",
                body: JSON.stringify({ name, url, preco })
            })
        })
    }
}