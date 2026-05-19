export default class PetShopBerries {
    constructor() {
        this.fazerPedidoParaPokeApi()
    }

    painelDeVendasBerries = document.querySelector('#painelDeVendasBerries')

    fazerPedidoParaPokeApi = async (url = 'https://pokeapi.co/api/v2/berry/?offset=0&limit=24') => {
        const pedido = await fetch(url)
        const pokeapi = await pedido.json()

        this.criarCards(pokeapi)
    }

    criarCards = (pokeapiParam) => {
        this.painelDeVendasBerries.innerHTML = ''
        let pokeapiArray = pokeapiParam.results
        console.log(pokeapiArray)
        pokeapiArray.forEach(async element => {
            const pedido = await fetch(element.url)
            const pokeapi = await pedido.json()
            console.log(pokeapi)

            const { name, id } = pokeapi

            const imagemPromisse = await fetch(pokeapi.item.url)
            const imagem = await imagemPromisse.json()

            const cards = document.createElement('div')
            cards.classList.add('cardsBerries')

            const img = document.createElement('img')
            img.classList.add('imagemDosBerries')
            img.src = imagem.sprites.default

            const nameDosBerries = document.createElement('p')
            nameDosBerries.classList.add('nomeDosBerries')
            nameDosBerries.textContent = name

            const precoDaBerrie = document.createElement('p')
            precoDaBerrie.classList.add('precoDaBerrie')
            precoDaBerrie.textContent = `${id} R$`

            cards.appendChild(img)
            cards.appendChild(nameDosBerries)
            cards.appendChild(precoDaBerrie)
            this.painelDeVendasBerries.appendChild(cards)

            cards.addEventListener('click', () => {
                this.clickDosCards(name, id, imagem.sprites.default, element.url)
            })
        });
    }

    clickDosCards = (name, id, imagem, url) => {
        const telaCinza = document.querySelector('#telaCinza')
        const conteudoDoCard = document.querySelector('#conteudoDoCard')
        telaCinza.style.display = 'flex'
        conteudoDoCard.style.display = 'flex'
        conteudoDoCard.innerHTML = ''

        const img = document.createElement('img')
        img.classList.add('imagemDosBerries')
        img.src = imagem

        const tituloDaBerrieQueFoiClicada = document.createElement('p')
        tituloDaBerrieQueFoiClicada.classList.add('tituloDaBerrieQueFoiClicada')
        tituloDaBerrieQueFoiClicada.textContent = name

        const precoDaBerrieClicada = document.createElement('p')
        precoDaBerrieClicada.classList.add('precoDaBerrieClicada')
        precoDaBerrieClicada.textContent = `${id} R$`

        const divDoBotao = document.createElement('div')
        divDoBotao.classList.add('divDoBotao')

        const botaoParaComprar = document.createElement('button')
        botaoParaComprar.classList.add('botaoParaComprarBerries')
        botaoParaComprar.textContent = "Comprar"

        divDoBotao.appendChild(botaoParaComprar)
        conteudoDoCard.appendChild(img)
        conteudoDoCard.appendChild(tituloDaBerrieQueFoiClicada)
        conteudoDoCard.appendChild(precoDaBerrieClicada)
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