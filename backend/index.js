require('dotenv').config()
const express = require("express")
const app = express()
const fs = require("fs")

let contaPropria = null
let carrinhoProdutos = null
const logados = {}

app.get("/", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(fs.readFileSync('./index.html'));
})

app.get("/frontend/html/petShop.html", (req, res) => {
    const logge = logados[req.socket.remoteAddress]

    if (!logge) {
        res.writeHead(400)
        return;
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(fs.readFileSync('./frontend/html/petShop.html'));
})

// css ======================================================================================

app.get("/frontend/css/main.css", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(fs.readFileSync('./frontend/css/main.css'));
})

app.get("/frontend/css/global.css", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(fs.readFileSync('./frontend/css/global.css'));
})

app.get("/frontend/css/login.css", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(fs.readFileSync('./frontend/css/login.css'));
})

app.get("/frontend/css/sitePrincipal/header.css", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(fs.readFileSync('./frontend/css/sitePrincipal/header.css'));
})

app.get("/frontend/css/sitePrincipal/mainTag.css", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(fs.readFileSync('./frontend/css/sitePrincipal/mainTag.css'));
})

app.get("/frontend/css/sitePrincipal/sections.css", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(fs.readFileSync('./frontend/css/sitePrincipal/sections.css'));
})

app.get("/frontend/css/sitePrincipal/barraDePesquisa.css", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(fs.readFileSync('./frontend/css/sitePrincipal/barraDePesquisa.css'));
})

app.get("/frontend/css/sitePrincipal/cards.css", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(fs.readFileSync('./frontend/css/sitePrincipal/cards.css'));
})

app.get("/frontend/css/sitePrincipal/carrinho.css", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(fs.readFileSync('./frontend/css/sitePrincipal/carrinho.css'));
})

// js ===================================================================================

app.get("/frontend/js/sistemaLogin/mainLogin.js", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.end(fs.readFileSync('./frontend/js/sistemaLogin/mainLogin.js'));
})

app.get("/frontend/js/sistemaLogin/mudarEntreLoginECriarConta.js", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.end(fs.readFileSync('./frontend/js/sistemaLogin/mudarEntreLoginECriarConta.js'));
})

app.get("/frontend/js/sistemaLogin/logarNaConta.js", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.end(fs.readFileSync('./frontend/js/sistemaLogin/logarNaConta.js'));
})

app.get("/frontend/js/sistemaLogin/localizacao.js", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.end(fs.readFileSync('./frontend/js/sistemaLogin/localizacao.js'));
})

app.get("/frontend/json/sistemaLogin/localizacaoRuas.json", (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(fs.readFileSync('./frontend/json/localizacaoRuas.json'));
})

// site principal

app.get("/frontend/js/sitePrincipal/trocaDeAbas.js", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.end(fs.readFileSync('./frontend/js/sitePrincipal/trocaDeAbas.js'));
})

app.get("/frontend/js/sitePrincipal/mainSitePrincipal.js", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.end(fs.readFileSync('./frontend/js/sitePrincipal/mainSitePrincipal.js'));
})

app.get("/frontend/js/sitePrincipal/petShopPokemon.js", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.end(fs.readFileSync('./frontend/js/sitePrincipal/petShopPokemon.js'));
})

app.get("/frontend/js/sitePrincipal/petShopPokebolas.js", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.end(fs.readFileSync('./frontend/js/sitePrincipal/petShopPokebolas.js'));
})

app.get("/frontend/js/sitePrincipal/petShopCDS.js", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.end(fs.readFileSync('./frontend/js/sitePrincipal/petShopCDS.js'));
})

app.get("/frontend/js/sitePrincipal/petShopBerries.js", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.end(fs.readFileSync('./frontend/js/sitePrincipal/petShopBerries.js'));
})

app.get("/frontend/js/sitePrincipal/petShopBadges.js", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.end(fs.readFileSync('./frontend/js/sitePrincipal/petShopBadges.js'));
})

app.get("/frontend/js/sitePrincipal/sistemaDePesquisa.js", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.end(fs.readFileSync('./frontend/js/sitePrincipal/sistemaDePesquisa.js'));
})

app.get("/frontend/js/sitePrincipal/filtroPorTipoPokemon.js", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.end(fs.readFileSync('./frontend/js/sitePrincipal/filtroPorTipoPokemon.js'));
})

app.get("/frontend/js/sitePrincipal/sistemaContaECarrinho.js", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.end(fs.readFileSync('./frontend/js/sitePrincipal/sistemaContaECarrinho.js'));
})

app.post("/login", (req, res) => {
    req.on("data", (body) => {
        const informacaoRecebida = JSON.parse(body)
        const listaDeContas = JSON.parse(fs.readFileSync(`./${process.env.DB_MAIN_PATH}`))
        const nomeLogin = informacaoRecebida.nomeLogin
        const emailLogin = informacaoRecebida.emailLogin
        const senhaLogin = informacaoRecebida.senhaLogin
        console.log(nomeLogin, emailLogin, senhaLogin)
        if (nomeLogin === '' || senhaLogin === '' || emailLogin === '') {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ res: "lacuna vazia" }));
            return
        }
        let verificacao = listaDeContas.find(objeto => {
            return objeto.nome === nomeLogin && objeto.senha === senhaLogin && objeto.email === emailLogin
        })
        if (verificacao) {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ acesso: "permitido" }));
            logados[req.socket.remoteAddress] = true;
            contaPropria = nomeLogin
        } else {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ acesso: "negado" }));
        }
    })
})

app.post("/criarConta", (req, res) => {
    req.on("data", (body) => {
        const informacaoRecebida = JSON.parse(body)
        const listaDeContas = JSON.parse(fs.readFileSync(`./${process.env.DB_MAIN_PATH}`))
        const nomeCriarConta = informacaoRecebida.nome
        const emailCriarConta = informacaoRecebida.email
        const senhaCriarConta = informacaoRecebida.senha
        const localizacaoCriarConta = informacaoRecebida.localizacao
        console.log(nomeCriarConta, emailCriarConta, senhaCriarConta)
        if (nomeCriarConta === '' || senhaCriarConta === '' || emailCriarConta === '') {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ resposta: "lacuna vazia" }));
            return
        }

        if (localizacaoCriarConta === 'selecioneASuaLocalizacao') {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ resposta: "selecione sua localizacao" }));
            return
        }

        let verificacao = listaDeContas.find(objeto => {
            return objeto.nome === nomeCriarConta && objeto.email === emailCriarConta
        })
        if (verificacao) {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ resposta: "O nome ja esta sendo usado" }));
            return
        }

        informacaoRecebida.carrinho = []
        listaDeContas.push(informacaoRecebida)
        fs.writeFileSync(process.env.DB_MAIN_PATH, JSON.stringify(listaDeContas));
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ resposta: "Voltar ao fazer login" }));
        console.log(informacaoRecebida)
    })
})

app.post("/adicionarNoCarrinho", (req, res) => {
    req.on("data", (body) => {
        const logge = logados[req.socket.remoteAddress]

        if (!logge) {
            res.writeHead(400)
            return;
        }

        const informacaoRecebida = JSON.parse(body)
        const listaDeContas = JSON.parse(fs.readFileSync(`./${process.env.DB_MAIN_PATH}`))
        const listaDeFretes = JSON.parse(fs.readFileSync("./backend/json/frete.json"))

        // pega os dados do cliente logado
        let verificacao = listaDeContas.find(objeto => {
            return objeto.nome === contaPropria
        })

        //verificacao dos generoMasculino
        if (informacaoRecebida.macho === true && informacaoRecebida.femea === true || informacaoRecebida.macho === false && informacaoRecebida.femea === false) {
            informacaoRecebida.macho = true
            informacaoRecebida.femea = false
        }

        // pegar preco original
        informacaoRecebida.precoOriginal = informacaoRecebida.preco

        // calcula se é shiny
        if (informacaoRecebida.shiny) {
            let maisPrecoDoShiny = informacaoRecebida.preco + (informacaoRecebida.preco * (180 / 100))
            console.log(maisPrecoDoShiny)
            informacaoRecebida.preco = maisPrecoDoShiny
        }

        // calcula o frete 
        const resultado = verificacao.localizacao.match(/\(([^)]+)\)/)
        const valorDoFrete = listaDeFretes[`${resultado[1]}`]
        let maisPrecoDoFrete = informacaoRecebida.preco + valorDoFrete
        informacaoRecebida.preco = maisPrecoDoFrete
        informacaoRecebida.valorDoFrete = valorDoFrete


        console.log(valorDoFrete)

        // adiciona no banco de dados e  responde o cliente
        verificacao.carrinho.push(informacaoRecebida)
        fs.writeFileSync(process.env.DB_MAIN_PATH, JSON.stringify(listaDeContas));
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ resposta: "Voltar ao fazer login" }));
    })
})

app.post("/adicionarNoCarrinhoOutros", (req, res) => {
    req.on("data", (body) => {
        const logge = logados[req.socket.remoteAddress]

        if (!logge) {
            res.writeHead(400)
            return;
        }

        const informacaoRecebida = JSON.parse(body)
        const listaDeContas = JSON.parse(fs.readFileSync(`./${process.env.DB_MAIN_PATH}`))
        const listaDeFretes = JSON.parse(fs.readFileSync("./backend/json/frete.json"))

        // pega os dados do cliente logado
        let verificacao = listaDeContas.find(objeto => {
            return objeto.nome === contaPropria
        })

        // pegar preco original
        informacaoRecebida.precoOriginal = informacaoRecebida.preco

        // calcula o frete 
        const resultado = verificacao.localizacao.match(/\(([^)]+)\)/)
        const valorDoFrete = listaDeFretes[`${resultado[1]}`]
        let maisPrecoDoFrete = informacaoRecebida.preco + valorDoFrete
        informacaoRecebida.preco = maisPrecoDoFrete
        informacaoRecebida.valorDoFrete = valorDoFrete

        console.log(valorDoFrete)

        // adiciona no banco de dados e  responde o cliente
        verificacao.carrinho.push(informacaoRecebida)
        fs.writeFileSync(process.env.DB_MAIN_PATH, JSON.stringify(listaDeContas));
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ resposta: "Voltar ao fazer login" }));
    })
})

app.get("/pedirProdutosDoCarrinho", (req, res) => {
    const logge = logados[req.socket.remoteAddress]

    if (!logge) {
        res.writeHead(400)
        return;
    }

    const listaDeContas = JSON.parse(fs.readFileSync(`./${process.env.DB_MAIN_PATH}`))

    // pega os dados do cliente logado
    let verificacao = listaDeContas.find(objeto => {
        return objeto.nome === contaPropria
    })

    carrinhoProdutos = verificacao.carrinho

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ resposta: carrinhoProdutos }));
})

app.post("/removerProdutoDoCarrinho", (req, res) => {
    req.on("data", (body) => {
        const logge = logados[req.socket.remoteAddress]

        if (!logge) {
            res.writeHead(400)
            return;
        }

        const informacaoRecebida = JSON.parse(body)
        const listaDePlayers = JSON.parse(fs.readFileSync(`./${process.env.DB_MAIN_PATH}`))

        let verificacao = listaDePlayers.find(objeto => {
            return objeto.nome === contaPropria
        })

        console.log(verificacao)

        if (verificacao) {
            const novoArray = verificacao.carrinho.filter(pessoa => pessoa.name !== informacaoRecebida.name);
            verificacao.carrinho = novoArray
            fs.writeFileSync(process.env.DB_MAIN_PATH, JSON.stringify(listaDePlayers))

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ resposta: "Produto removido com sucesso" }));
        } else {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ resposta: "remocao deu errado" }));
        }
    })
})

app.get("/pedirOPrecoDeTodosOsProdutos", (req, res) => {
    const logge = logados[req.socket.remoteAddress]

    if (!logge) {
        res.writeHead(400)
        return;
    }

    let subTotalDoCarrinho = ''
    let totalDoCarrinho = ''

    carrinhoProdutos.forEach(element => {
        subTotalDoCarrinho += `+${element.precoOriginal}`
        totalDoCarrinho += `+${element.preco}`
        console.log(totalDoCarrinho, subTotalDoCarrinho)
    });

    let objetoSubTotal = eval(subTotalDoCarrinho)
    let objetoTotal = eval(totalDoCarrinho)

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ resposta: { objetoSubTotal, objetoTotal } }));
})

app.get("/finalizarCompras", (req, res) => {
    const logge = logados[req.socket.remoteAddress]

    if (!logge) {
        res.writeHead(400)
        return;
    }

    const listaDeContas = JSON.parse(fs.readFileSync(`./${process.env.DB_MAIN_PATH}`))

    let verificacao = listaDeContas.find(objeto => {
        return objeto.nome === contaPropria
    })

    verificacao.carrinho = []

    fs.writeFileSync(process.env.DB_MAIN_PATH, JSON.stringify(listaDeContas));
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ resposta: 'Apagado' }));
})

app.get("/pedirNome", (req, res) => {
    const logge = logados[req.socket.remoteAddress]

    if (!logge) {
        res.writeHead(400)
        return;
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ resposta: contaPropria }));
})

app.listen(process.env.PORT, () => {
    console.log("Servidor funcionando")
})