export default class PetShopPokebolas {
    constructor() {
        this.fazerPedidoParaPokeApi()
    }

    painelDeVendasPokebolas = document.querySelector('#painelDeVendasPokebolas')

    fazerPedidoParaPokeApi = async (url = 'https://pokeapi.co/api/v2/item-category/33/', urlDois = 'https://pokeapi.co/api/v2/item-category/34/', urlTres = 'https://pokeapi.co/api/v2/item-category/39/') => {
        const pedidoUm = await fetch(url)
        const pokebolaUmApi = await pedidoUm.json()

        const pedidoDois = await fetch(urlDois)
        const pokebolaDoisApi = await pedidoDois.json()

        const pedidoTres = await fetch(urlTres)
        const pokebolaTresApi = await pedidoTres.json()

        this.criarCards(pokebolaUmApi, pokebolaDoisApi, pokebolaTresApi)
    }

    criarCards = (pokebolaUmApi, pokebolaDoisApi, pokebolaTresApi) => {
        console.log(pokebolaUmApi, pokebolaDoisApi, pokebolaTresApi)
        this.painelDeVendasPokebolas.innerHTML = ''
        pokebolaUmApi.items.forEach(async element => {
            const pedidoSpecialBalls = await fetch(element.url)
            const specialBalls = await pedidoSpecialBalls.json()
            console.log(specialBalls)

            const cards = document.createElement('div')
            cards.classList.add('cardsPokebolas')

            const img = document.createElement('img')
            img.classList.add('imagemDasPokebolas')
            img.src = specialBalls.sprites.default

            const name = document.createElement('p')
            name.classList.add('nomeDasPokebolas')
            name.textContent = element.name

            const precoDaPokebola = document.createElement('p')
            precoDaPokebola.classList.add('precoDaPokebola')
            precoDaPokebola.textContent = `${specialBalls.id} R$`

            cards.appendChild(img)
            cards.appendChild(name)
            cards.appendChild(precoDaPokebola)
            this.painelDeVendasPokebolas.appendChild(cards)

            cards.addEventListener('click', () => {
                this.clickDosCards(element.name, specialBalls.id, specialBalls.sprites.default, element.url)
            })
        });


        pokebolaDoisApi.items.forEach(async element => {
            const pedidoStandardBalls = await fetch(element.url)
            const standardBalls = await pedidoStandardBalls.json()

            const cards = document.createElement('div')
            cards.classList.add('cardsPokebolas')

            const img = document.createElement('img')
            img.classList.add('imagemDasPokebolas')
            img.src = standardBalls.sprites.default

            const name = document.createElement('p')
            name.classList.add('nomeDasPokebolas')
            name.textContent = element.name

            const precoDaPokebola = document.createElement('p')
            precoDaPokebola.classList.add('precoDaPokebola')
            precoDaPokebola.textContent = `${standardBalls.id} R$`

            cards.appendChild(img)
            cards.appendChild(name)
            cards.appendChild(precoDaPokebola)
            this.painelDeVendasPokebolas.appendChild(cards)

            cards.addEventListener('click', () => {
                this.clickDosCards(element.name, standardBalls.id, standardBalls.sprites.default, element.url)
            })
        });


        pokebolaTresApi.items.forEach(async element => {
            const pedidoApricornBalls = await fetch(element.url)
            const apricornBalls = await pedidoApricornBalls.json()

            const cards = document.createElement('div')
            cards.classList.add('cardsPokebolas')

            const img = document.createElement('img')
            img.classList.add('imagemDasPokebolas')
            img.src = apricornBalls.sprites.default

            const name = document.createElement('p')
            name.classList.add('nomeDasPokebolas')
            name.textContent = element.name

            const precoDaPokebola = document.createElement('p')
            precoDaPokebola.classList.add('precoDaPokebola')
            precoDaPokebola.textContent = `${apricornBalls.id} R$`

            cards.appendChild(img)
            cards.appendChild(name)
            cards.appendChild(precoDaPokebola)
            this.painelDeVendasPokebolas.appendChild(cards)

            cards.addEventListener('click', () => {
                this.clickDosCards(element.name, apricornBalls.id, apricornBalls.sprites.default, element.url)
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
        img.classList.add('imagemDasPokebolas')
        img.src = imagem

        const tituloDaPokebolaQueFoiClicada = document.createElement('p')
        tituloDaPokebolaQueFoiClicada.classList.add('tituloDaPokebolaQueFoiClicada')
        tituloDaPokebolaQueFoiClicada.textContent = name

        const precoDaPokebolaClicada = document.createElement('p')
        precoDaPokebolaClicada.classList.add('precoDaPokebolaClicada')
        precoDaPokebolaClicada.textContent = `${id} R$`

        const divDoBotao = document.createElement('div')
        divDoBotao.classList.add('divDoBotao')

        const botaoParaComprar = document.createElement('button')
        botaoParaComprar.classList.add('botaoParaComprarPokebola')
        botaoParaComprar.textContent = "Comprar"

        divDoBotao.appendChild(botaoParaComprar)
        conteudoDoCard.appendChild(img)
        conteudoDoCard.appendChild(tituloDaPokebolaQueFoiClicada)
        conteudoDoCard.appendChild(precoDaPokebolaClicada)
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