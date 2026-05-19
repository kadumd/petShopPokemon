export default class SistemaDePesquisa {
    constructor(petShopPokemon, petShopBerries, petShopPokebolas, petShopCDS) {
        this.petShopPokemon = petShopPokemon
        this.petShopBerries = petShopBerries
        this.petShopPokebolas = petShopPokebolas
        this.petShopCDS = petShopCDS
        this.detectarClickEEnter()
    }

    pesquisasPorPokemons = document.querySelector('#pesquisaPokemonInput')
    pesquisasPorBerries = document.querySelector('#pesquisaBerriesInput')
    pesquisasPorPokebolas = document.querySelector('#pesquisaPokebolasInput')
    pesquisasPorMovesCDS = document.querySelector('#pesquisaMovesCDSInput')
    painelDeVendasPokemons = document.querySelector('#painelDeVendasPokemons')
    painelDeVendasBerries = document.querySelector('#painelDeVendasBerries')
    painelDeVendasPokebolas = document.querySelector('#painelDeVendasPokebolas')
    painelDeVendasMoves = document.querySelector('#painelDeVendasMoves')

    detectarClickEEnter = () => {
        this.pesquisasPorPokemons.addEventListener('keydown', this.pesquisaDaAbaPokemon)
        this.pesquisasPorBerries.addEventListener('keydown', this.pesquisaDaAbaBerries)
        this.pesquisasPorPokebolas.addEventListener('keydown', this.pesquisaDaAbaPokebola)
        this.pesquisasPorMovesCDS.addEventListener('keydown', this.pesquisaDaAbaMoves)
    }

    pesquisaDaAbaPokemon = async (e) => {
        if (e.key === 'Enter') {
            const pesquisasPorPokemonsValor = this.pesquisasPorPokemons.value
            if (!pesquisasPorPokemonsValor) {
                this.petShopPokemon.fazerPedidoParaPokeApi()
                return
            }
            let link = `https://pokeapi.co/api/v2/pokemon/${pesquisasPorPokemonsValor}`
            const pedido = await fetch(link)
            const pokeapi = await pedido.json()

            let { name, weight, height } = pokeapi
            let caminhoDaImagem = pokeapi['sprites']['versions']['generation-v']['black-white']['animated']
            let tipoDoPokemon = pokeapi.types
            let idDoPokemon = pokeapi.id

            const cards = document.createElement('div')
            cards.classList.add('cardsPokemons')

            const img = document.createElement('img')
            img.classList.add('imagemDosPokemons')
            img.src = caminhoDaImagem['front_default']

            const nomeDoPokemon = document.createElement('p')
            nomeDoPokemon.classList.add('nome')
            nomeDoPokemon.textContent = name

            const precoDoPokemon = document.createElement('p')
            precoDoPokemon.classList.add('precoDoPokemon')
            precoDoPokemon.textContent = `${idDoPokemon} R$`

            this.painelDeVendasPokemons.innerHTML = ''
            cards.appendChild(img)
            cards.appendChild(nomeDoPokemon)
            cards.appendChild(precoDoPokemon)
            this.painelDeVendasPokemons.appendChild(cards)

            cards.addEventListener('click', () => {
                this.petShopPokemon.clickDosCards(name, weight, height, idDoPokemon, caminhoDaImagem, tipoDoPokemon, link)
            })
        }
    }

    pesquisaDaAbaBerries = async (e) => {
        if (e.key === 'Enter') {
            const pesquisasPorBerriesValor = this.pesquisasPorBerries.value
            if (!pesquisasPorBerriesValor) {
                this.petShopBerries.fazerPedidoParaPokeApi()
                return
            }
            let link = `https://pokeapi.co/api/v2/berry/${pesquisasPorBerriesValor}`
            const pedido = await fetch(link)
            const pokeapi = await pedido.json()

            const { name } = pokeapi

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

            this.painelDeVendasBerries.innerHTML = ''
            cards.appendChild(img)
            cards.appendChild(nameDosBerries)
            this.painelDeVendasBerries.appendChild(cards)

            cards.addEventListener('click', () => {
                this.petShopBerries.clickDosCards(name)
            })
        }
    }

    pesquisaDaAbaPokebola = async (e) => {
        if (e.key === 'Enter') {
            const pesquisasPorPokebolasValor = this.pesquisasPorPokebolas.value
            if (!pesquisasPorPokebolasValor) {
                this.petShopPokebolas.fazerPedidoParaPokeApi()
                return
            }

            let link = `https://pokeapi.co/api/v2/item/${pesquisasPorPokebolasValor}`
            const pedido = await fetch(link)
            const pokeapi = await pedido.json()

            const cards = document.createElement('div')
            cards.classList.add('cardsPokebolas')

            const img = document.createElement('img')
            img.classList.add('imagemDasPokebolas')
            img.src = pokeapi.sprites.default

            const name = document.createElement('p')
            name.classList.add('nomeDasPokebolas')
            name.textContent = pokeapi.name

            this.painelDeVendasPokebolas.innerHTML = ''
            cards.appendChild(img)
            cards.appendChild(name)
            this.painelDeVendasPokebolas.appendChild(cards)

            cards.addEventListener('click', () => {
                this.petShopPokebolas.clickDosCards(pokeapi.name)
            })
        }
    }

    pesquisaDaAbaMoves = async (e) => {
        if (e.key === 'Enter') {
            const pesquisasPorMovesCDSValor = this.pesquisasPorMovesCDS.value
            if (!pesquisasPorMovesCDSValor) {
                this.petShopCDS.fazerPedidoParaPokeApi()
                return
            }

            let link = `https://pokeapi.co/api/v2/move/${pesquisasPorMovesCDSValor}`
            const pedido = await fetch(link)
            const pokeapi = await pedido.json()

            const cards = document.createElement('div')
            cards.classList.add('cardsMoves')

            const name = document.createElement('p')
            name.classList.add('nomeDosMoves')
            name.textContent = pokeapi.name

            this.painelDeVendasMoves.innerHTML = ''
            cards.appendChild(name)
            this.painelDeVendasMoves.appendChild(cards)
            
            cards.addEventListener('click', () => {
                this.petShopCDS.clickDosCards(pokeapi.name)
            })
        }
    }
}