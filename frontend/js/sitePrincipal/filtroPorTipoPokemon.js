export default class FiltroPorTipoPokemon {
    constructor(petShopPokemon) {
        this.petShopPokemon = petShopPokemon
        this.adicionarClickNosOption()
    }

    enviarTiposDePokemon = document.querySelector('#enviarTiposDePokemon')
    selecionaFiltroDoTipoPokemonUm = document.querySelector('#selecionaFiltroDoTipoPokemonUm')
    selecionaFiltroDoTipoPokemonDois = document.querySelector('#selecionaFiltroDoTipoPokemonDois')
    painelDeVendasPokemons = document.querySelector('#painelDeVendasPokemons')

    adicionarClickNosOption = () => {
        this.enviarTiposDePokemon.addEventListener('click', this.verificacaoDeQuantosTiposTem)
    }

    verificacaoDeQuantosTiposTem = async () => {
        let valorDoPrimeiroTipo = this.selecionaFiltroDoTipoPokemonUm.value
        let valorDoSegundoTipo = this.selecionaFiltroDoTipoPokemonDois.value

        if (!valorDoPrimeiroTipo && !valorDoSegundoTipo) {
            this.petShopPokemon.fazerPedidoParaPokeApi()
            return
        }

        if (valorDoPrimeiroTipo && !valorDoSegundoTipo) {
            this.painelDeVendasPokemons.innerHTML = ''
            const pedido = await fetch(`https://pokeapi.co/api/v2/type/${valorDoPrimeiroTipo}/`)
            const pokeapi = await pedido.json()
            let pokeapiArray = pokeapi.pokemon
            this.fazerPesquisaComUmTipo(pokeapiArray)
            return
        }

        if (!valorDoPrimeiroTipo && valorDoSegundoTipo) {
            this.painelDeVendasPokemons.innerHTML = ''
            const pedido = await fetch(`https://pokeapi.co/api/v2/type/${valorDoSegundoTipo}/`)
            const pokeapi = await pedido.json()
            let pokeapiArray = pokeapi.pokemon
            this.fazerPesquisaComUmTipo(pokeapiArray)
            return
        }

        if (valorDoPrimeiroTipo && valorDoSegundoTipo) {
            this.fazerPesquisaComDoisTipos(valorDoPrimeiroTipo, valorDoSegundoTipo)
            return
        }
    }

    fazerPesquisaComDoisTipos = async (valorDoPrimeiroTipo, valorDoSegundoTipo) => {
        this.painelDeVendasPokemons.innerHTML = ''

        const pedidoUm = await fetch(`https://pokeapi.co/api/v2/type/${valorDoPrimeiroTipo}/`)
        const pokeapiUm = await pedidoUm.json()
        let pokeapiArrayUm = pokeapiUm.pokemon

        const pedidoDois = await fetch(`https://pokeapi.co/api/v2/type/${valorDoSegundoTipo}/`)
        const pokeapiDois = await pedidoDois.json()
        let pokeapiArrayDois = pokeapiDois.pokemon

        const filtrandoOsDoisArrays = pokeapiArrayUm.filter(array1 => {
            return pokeapiArrayDois.some(array2 => array1.pokemon.name === array2.pokemon.name)
        });
        
        this.fazerPesquisaComUmTipo(filtrandoOsDoisArrays)

    }

    fazerPesquisaComUmTipo = async (pokeapi) => {
        pokeapi.forEach(async element => {
            const pedido = await fetch(element.pokemon.url)
            const pokeapi = await pedido.json()
            console.log(pokeapi)


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

            cards.appendChild(img)
            cards.appendChild(nomeDoPokemon)
            cards.appendChild(precoDoPokemon)
            this.painelDeVendasPokemons.appendChild(cards)


            cards.addEventListener('click', () => {
                this.petShopPokemon.clickDosCards(name, weight, height, idDoPokemon, caminhoDaImagem, tipoDoPokemon, element.pokemon.url)
            })
        });

        console.log(pokeapi)
    }
}