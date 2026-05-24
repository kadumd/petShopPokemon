export default class PetShopPokemon {
    constructor() {
        this.fazerPedidoParaPokeApi()
    }

    painelDeVendasPokemons = document.querySelector('#painelDeVendasPokemons')

    fazerPedidoParaPokeApi = async (url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=24') => {
        const pedido = await fetch(url)
        const pokeapi = await pedido.json()

        this.criarCards(pokeapi)
    }

    criarCards = (pokeapiParam) => {
        this.painelDeVendasPokemons.innerHTML = ''
        let pokeapiArray = pokeapiParam.results
        console.log(pokeapiArray)
        pokeapiArray.forEach(async element => {
            const pedido = await fetch(element.url)
            const pokeapi = await pedido.json()
            console.log(pokeapi)

            let { name, weight, height, id } = pokeapi
            let tipoDoPokemon = pokeapi.types

            const cards = document.createElement('div')
            cards.classList.add('cardsPokemons')

            const img = document.createElement('img')
            img.classList.add('imagemDosPokemons')
            if (pokeapi['sprites']['versions']['generation-v']['black-white']['animated']['front_default']) {
                img.src = pokeapi['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
            } else {
                img.src = pokeapi['sprites']['front_default']
            }

            const nomeDoPokemon = document.createElement('p')
            nomeDoPokemon.classList.add('nome')
            nomeDoPokemon.textContent = name

            const precoDoPokemon = document.createElement('p')
            precoDoPokemon.classList.add('precoDoPokemon')
            precoDoPokemon.textContent = `${id} R$`

            cards.appendChild(img)
            cards.appendChild(nomeDoPokemon)
            cards.appendChild(precoDoPokemon)
            this.painelDeVendasPokemons.appendChild(cards)

            cards.addEventListener('click', () => {
                this.clickDosCards(name, weight, height, id, pokeapi, tipoDoPokemon, element.url)
            })
        });
    }

    clickDosCards = (name, weight, height, id, pokeapi, tipoDoPokemon, url) => {
        const telaCinza = document.querySelector('#telaCinza')
        const conteudoDoCard = document.querySelector('#conteudoDoCard')
        telaCinza.style.display = 'flex'
        conteudoDoCard.style.display = 'flex'
        conteudoDoCard.innerHTML = ''

        const imagemDoPokemonClicado = document.createElement('img')
        imagemDoPokemonClicado.classList.add('imagemDoPokemonClicado')
        console.log(pokeapi)
        imagemDoPokemonClicado.src = pokeapi['front_default']

        const nomeDoPokemonClicado = document.createElement('p')
        nomeDoPokemonClicado.classList.add('nomeDoPokemonClicado')
        nomeDoPokemonClicado.textContent = `Nome: ${name}`

        const alturaDoPokemonClicado = document.createElement('p')
        alturaDoPokemonClicado.classList.add('alturaDoPokemonClicado')
        alturaDoPokemonClicado.textContent = `Altura: ${height}`

        const pesoDoPokemonClicado = document.createElement('p')
        pesoDoPokemonClicado.classList.add('pesoDoPokemonClicado')
        pesoDoPokemonClicado.textContent = `Peso: ${weight}`

        const tiposDoPokemonClicado = document.createElement('p')
        tiposDoPokemonClicado.classList.add('tiposDoPokemonClicado')
        console.log(tipoDoPokemon)
        if (tipoDoPokemon.length == '2') {
            let tipoUm = tipoDoPokemon['0']['type']['name']
            let tipoDois = tipoDoPokemon['1']['type']['name']
            tiposDoPokemonClicado.textContent = `Tipos: ${tipoUm}, ${tipoDois}`
            console.log(tipoUm, tipoDois)
        } else {
            let tipoTres = tipoDoPokemon['0']['type']['name']
            tiposDoPokemonClicado.textContent = `Tipos: ${tipoTres}`
            console.log(tipoTres)
        }

        const escolherGeneroDoPokemon = document.createElement('div')
        escolherGeneroDoPokemon.classList.add('escolherGeneroDoPokemon')

        const labelUm = document.createElement('label')
        labelUm.classList.add('genero')
        labelUm.htmlFor = 'Macho'
        labelUm.textContent = "Macho "

        const labelDois = document.createElement('label')
        labelDois.classList.add('genero')
        labelDois.htmlFor = 'Fêmea'
        labelDois.textContent = "Fêmea "

        const generoMasculino = document.createElement('input')
        generoMasculino.classList.add('generoMasculino')
        generoMasculino.type = 'checkbox'
        generoMasculino.value = "generoMasculino"
        generoMasculino.checked = true

        const generoFeminino = document.createElement('input')
        generoFeminino.classList.add('generoFeminino')
        generoFeminino.type = 'checkbox'
        generoFeminino.value = "generoFeminino"

        const corShiny = document.createElement('label')
        corShiny.classList.add('corShiny')
        corShiny.htmlFor = 'Shiny'
        corShiny.textContent = "Shiny(+180 no valor) "

        const checkboxShiny = document.createElement('input')
        checkboxShiny.classList.add('shiny')
        checkboxShiny.type = 'checkbox'
        checkboxShiny.value = "shiny"

        const precoDoPokemon = document.createElement('p')
        precoDoPokemon.classList.add('precoDoPokemonClick')
        precoDoPokemon.textContent = `${id} R$`

        const divDoBotao = document.createElement('div')
        divDoBotao.classList.add('divDoBotao')

        const botaoParaComprar = document.createElement('button')
        botaoParaComprar.classList.add('botaoParaComprarPokemon')
        botaoParaComprar.textContent = "Comprar"


        conteudoDoCard.appendChild(imagemDoPokemonClicado)
        conteudoDoCard.appendChild(nomeDoPokemonClicado)
        conteudoDoCard.appendChild(alturaDoPokemonClicado)
        conteudoDoCard.appendChild(pesoDoPokemonClicado)
        conteudoDoCard.appendChild(tiposDoPokemonClicado)
        conteudoDoCard.appendChild(escolherGeneroDoPokemon)
        escolherGeneroDoPokemon.appendChild(labelUm)
        escolherGeneroDoPokemon.appendChild(labelDois)
        labelUm.appendChild(generoMasculino)
        labelDois.appendChild(generoFeminino)
        conteudoDoCard.appendChild(corShiny)
        corShiny.appendChild(checkboxShiny)
        conteudoDoCard.appendChild(precoDoPokemon)
        conteudoDoCard.appendChild(divDoBotao)
        divDoBotao.appendChild(botaoParaComprar)

        telaCinza.addEventListener('click', () => {
            telaCinza.style.display = 'none'
            conteudoDoCard.style.display = 'none'
        })

        generoMasculino.addEventListener('click', () => {
            generoMasculino.checked = true
            generoFeminino.checked = false
        })

        generoFeminino.addEventListener('click', () => {
            generoFeminino.checked = true
            generoMasculino.checked = false
        })

        botaoParaComprar.addEventListener('click', () => {
            let shiny = checkboxShiny.checked
            let macho = generoMasculino.checked
            let femea = generoFeminino.checked
            let preco = id
            fetch('/adicionarNoCarrinho', {
                method: "POST",
                body: JSON.stringify({ name, url, shiny, macho, femea, preco })
            })
        })
    }
}