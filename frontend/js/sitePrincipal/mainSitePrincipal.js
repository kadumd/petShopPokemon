import TrocaDeAbas from "./trocaDeAbas.js"
import PetShopPokemon from "./petShopPokemon.js"
import PetShopBerries from "./petShopBerries.js"
import PetShopPokebolas from "./petShopPokebolas.js"
import PetShopCDS from "./petShopCDS.js"
import SistemaDePesquisa from "./sistemaDePesquisa.js"
import FiltroPorTipoPokemon from "./filtroPorTipoPokemon.js"
import SistemaContaECarrinho from "./sistemaContaECarrinho.js"

const trocaDeAbas = new TrocaDeAbas()
const petShopPokemon = new PetShopPokemon()
const petShopBerries = new PetShopBerries()
const petShopPokebolas = new PetShopPokebolas()
const petShopCDS = new PetShopCDS()
const sistemaDePesquisa = new SistemaDePesquisa(petShopPokemon, petShopBerries, petShopPokebolas, petShopCDS)
const filtroPorTipoPokemon = new FiltroPorTipoPokemon(petShopPokemon)
const sistemaContaECarrinho = new SistemaContaECarrinho()