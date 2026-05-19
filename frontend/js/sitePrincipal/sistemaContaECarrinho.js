export default class SistemaContaECarrinho {
    constructor() {
        this.colocarNomeNaDivPerfil()
        this.adicionarClickNoCarrinhoETelaCinza()
        this.adicionarClickNaLixeira()
    }

    nomeDaConta = document.querySelector('#nomeDaConta')
    iconeDeCarrinho = document.querySelector('#iconeDeCarrinho')
    telaCinza = document.querySelector('#telaCinza')
    divDoCarrinho = document.querySelector('#divDoCarrinho')
    removerProdutoImgLixeira = document.querySelector('#removerProdutoImgLixeira')
    divDosProdutosCompradosDiv = document.querySelector('#divDosProdutosCompradosDiv')
    buttonFinalizarCompraDosProdutosAparecerDiv = document.querySelector('#buttonFinalizarCompraDosProdutosAparecerDiv')
    divConfirmarCompra = document.querySelector('#divConfirmarCompra')
    buttonCancelarCompra = document.querySelector('#buttonCancelarCompra')

    colocarNomeNaDivPerfil = () => {
        fetch('/pedirNome', {
            method: "get"
        }).then(r => r.json()).then(r => {
            this.nomeDaConta.textContent = r.resposta
        })
    }

    adicionarClickNoCarrinhoETelaCinza = () => {
        this.iconeDeCarrinho.addEventListener('click', () => {
            this.telaCinza.style.display = 'flex'
            this.divDoCarrinho.style.display = 'flex'
            this.fazerPedidoDoCarrinho()
        })

        this.telaCinza.addEventListener('click', () => {
            this.telaCinza.style.display = 'none'
            this.divDoCarrinho.style.display = 'none'
        })
    }

    fazerPedidoDoCarrinho = () => {
        fetch('/pedirProdutosDoCarrinho', {
            method: "get"
        }).then(r => r.json()).then(r => {
            r.resposta.forEach(element => {
                this.adicionarClickNoEventoFinalizarCompra()
                this.divDosProdutosCompradosDiv.innerHTML = ''
                if (element.macho || element.femea) {
                    this.fazerTodosOsCardsPokemons(element)
                    return
                } else {
                    this.fazerTodosOsCardsOutros(element)
                }
            });
        })
    }

    adicionarClickNaLixeira = () => {
        removerProdutoImgLixeira.addEventListener('click', () => {
            let removerProdutoIcone = document.querySelector('.removerProdutoIcone')
            let removerProdutosIcones = document.querySelectorAll('.removerProdutoIcone')

            if (removerProdutoIcone.style.display === 'none') {
                console.log('none')
                removerProdutosIcones.forEach(element => {
                    element.style.display = 'flex'
                });
            } else {
                console.log('flex')
                removerProdutosIcones.forEach(element => {
                    element.style.display = 'none'
                });
            }
        })
    }

    fazerTodosOsCardsOutros = async (api) => {
        console.log(api)
        const imagemPromisse = await fetch(api.url)
        const imagemPedido = await imagemPromisse.json()
        console.log(imagemPedido)

        const cards = document.createElement('div')
        cards.classList.add('cardsDosProdutosComprados')

        const img = document.createElement('img')
        if (imagemPedido.sprites) {
            img.classList.add('imagemDosProdutosComprados')
            img.src = imagemPedido.sprites.default
        }
        if (imagemPedido.item) {
            const imagemPromisseFruits = await fetch(imagemPedido.item.url)
            const imagemPedidoFruits = await imagemPromisseFruits.json()
            console.log(imagemPedidoFruits)
            img.classList.add('imagemDosProdutosComprados')
            img.src = imagemPedidoFruits.sprites.default
        }

        const nomeDoPokemonComprado = document.createElement('p')
        nomeDoPokemonComprado.classList.add('nomeDoPokemonComprado')
        nomeDoPokemonComprado.textContent = `Nome: ${api.name}`

        const precoOriginalDoPokemonComprado = document.createElement('p')
        precoOriginalDoPokemonComprado.classList.add('precoOriginalDoPokemonComprado')
        precoOriginalDoPokemonComprado.textContent = `Preço Inicial: ${api.precoOriginal}`

        const valorDoFrete = document.createElement('p')
        valorDoFrete.classList.add('valorDoFrete')
        valorDoFrete.textContent = `Valor do frete: ${api.valorDoFrete}`

        const precoDoPokemonComprado = document.createElement('p')
        precoDoPokemonComprado.classList.add('precoDoPokemonComprado')
        precoDoPokemonComprado.textContent = `Valor total: ${api.preco}`

        const removerProdutoIcone = document.createElement('img')
        removerProdutoIcone.classList.add('removerProdutoIcone')
        removerProdutoIcone.src = `https://cdn1.iconfinder.com/data/icons/chunk/16/X-1024.png`

        this.divDosProdutosCompradosDiv.appendChild(cards)
        cards.appendChild(img)
        cards.appendChild(nomeDoPokemonComprado)
        cards.appendChild(precoOriginalDoPokemonComprado)
        cards.appendChild(valorDoFrete)
        cards.appendChild(precoDoPokemonComprado)
        cards.appendChild(removerProdutoIcone)

        removerProdutoIcone.addEventListener('click', () => {
            console.log(api.name)
            let name = api.name
            fetch('/removerProdutoDoCarrinho', {
                method: "POST",
                body: JSON.stringify({ name })
            }).then(r => r.json()).then(r => {
                if (r.resposta === "Produto removido com sucesso") {
                    location.reload()
                }
            })
        })
    }

    fazerTodosOsCardsPokemons = async (api) => {
        console.log(api)
        const imagemPromisse = await fetch(api.url)
        const imagemPedido = await imagemPromisse.json()
        console.log(imagemPedido)

        const cards = document.createElement('div')
        cards.classList.add('cardsDosProdutosComprados')

        const img = document.createElement('img')
        img.classList.add('imagemDosProdutosComprados')
        img.src = imagemPedido['sprites']['versions']['generation-v']['black-white']['animated']['front_default']

        const nomeDoPokemonComprado = document.createElement('p')
        nomeDoPokemonComprado.classList.add('nomeDoPokemonComprado')
        nomeDoPokemonComprado.textContent = `Nome: ${api.name}`

        const generoDoPokemonComprado = document.createElement('p')
        generoDoPokemonComprado.classList.add('generoDoPokemonComprado')
        if (api.macho) {
            generoDoPokemonComprado.textContent = `Genero: Macho`
        } else {
            generoDoPokemonComprado.textContent = `Genero: Fêmea`
        }

        const precoOriginalDoPokemonComprado = document.createElement('p')
        precoOriginalDoPokemonComprado.classList.add('precoOriginalDoPokemonComprado')
        precoOriginalDoPokemonComprado.textContent = `Preço Inicial: ${api.precoOriginal}`

        const valorDoShiny = document.createElement('p')
        valorDoShiny.classList.add('valorDoShiny')
        if (api.shiny) {
            valorDoShiny.textContent = `É shiny: +180%`
        } else {
            valorDoShiny.textContent = ``
            valorDoShiny.style.display = 'none'
        }

        const valorDoFrete = document.createElement('p')
        valorDoFrete.classList.add('valorDoFrete')
        valorDoFrete.textContent = `Valor do frete: ${api.valorDoFrete}`

        const precoDoPokemonComprado = document.createElement('p')
        precoDoPokemonComprado.classList.add('precoDoPokemonComprado')
        precoDoPokemonComprado.textContent = `Valor total: ${api.preco}`

        const removerProdutoIcone = document.createElement('img')
        removerProdutoIcone.classList.add('removerProdutoIcone')
        removerProdutoIcone.src = `https://cdn1.iconfinder.com/data/icons/chunk/16/X-1024.png`

        this.divDosProdutosCompradosDiv.appendChild(cards)
        cards.appendChild(img)
        cards.appendChild(nomeDoPokemonComprado)
        cards.appendChild(generoDoPokemonComprado)
        cards.appendChild(precoOriginalDoPokemonComprado)
        cards.appendChild(valorDoShiny)
        cards.appendChild(valorDoFrete)
        cards.appendChild(precoDoPokemonComprado)
        cards.appendChild(removerProdutoIcone)

        removerProdutoIcone.addEventListener('click', () => {
            console.log(api.name)
            let name = api.name
            fetch('/removerProdutoDoCarrinho', {
                method: "POST",
                body: JSON.stringify({ name })
            }).then(r => r.json()).then(r => {
                if (r.resposta === "Produto removido com sucesso") {
                    location.reload()
                }
            })
        })
    }

    adicionarClickNoEventoFinalizarCompra = () => {
        this.buttonFinalizarCompraDosProdutosAparecerDiv.addEventListener('click', () => {
            this.divConfirmarCompra.style.display = 'flex'
            this.finalizarCompraFuncao()
        })

        this.buttonCancelarCompra.addEventListener('click', () => {
            this.divConfirmarCompra.style.display = 'none'
        })
    }

    finalizarCompraFuncao = () => {
        const valoresDasComprasTotaisDiv = document.querySelector('#valoresDasComprasTotaisDiv')
        fetch('/pedirOPrecoDeTodosOsProdutos', {
            method: "get"
        }).then(r => r.json()).then(r => {
            console.log(r.resposta)
            valoresDasComprasTotaisDiv.innerHTML = ''
            const subTotal = document.createElement('p')
            subTotal.style.fontSize = 20 + "px"
            subTotal.textContent = `Subtotal: ${r.resposta.objetoSubTotal}`

            const total = document.createElement('p')
            total.style.fontSize = 20 + "px"
            total.textContent = `Total de todas as compras: ${r.resposta.objetoTotal}`

            valoresDasComprasTotaisDiv.appendChild(subTotal)
            valoresDasComprasTotaisDiv.appendChild(total)
        })


        const buttonFinalizarCompra = document.querySelector('#buttonFinalizarCompra')

        buttonFinalizarCompra.addEventListener('click', () => {
            fetch('/finalizarCompras', {
                method: "get"
            }).then(r => r.json()).then(r => {
                if (r.resposta === "Apagado") {
                    location.reload()
                }
            })
        })
    }

    removerProduto = () => {

    }
}