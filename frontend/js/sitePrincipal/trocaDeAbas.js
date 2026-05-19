export default class trocaDeAbas {
    constructor() {
        this.adicionarEventoDeClick()
    }

    sectionsDeVendas = document.querySelectorAll('.sectionsDeVendas')
    sectionPokemons = document.querySelector('#sectionPokemons')
    sectionBerries = document.querySelector('#sectionBerries')
    sectionPokébolas = document.querySelector('#sectionPokébolas')
    sectionBadges = document.querySelector('#sectionBadges')
    sectionMoveCDsTMHM = document.querySelector('#sectionMoveCDsTMHM')

    abaPokemons = document.querySelector('#abaPokemons')
    abaBerries = document.querySelector('#abaBerries')
    abaPokebolas = document.querySelector('#abaPokebolas')
    abaBadges = document.querySelector('#abaBadges')
    abaCDS = document.querySelector('#abaCDS')

    adicionarEventoDeClick = () => {
        this.abaPokemons.addEventListener('click', this.mudarAbaParaPokemon)
        this.abaBerries.addEventListener('click', this.mudarAbaParaBerries)
        this.abaPokebolas.addEventListener('click', this.mudarAbaParaPokebolas)
        this.abaBadges.addEventListener('click', this.mudarAbaParaBadges)
        this.abaCDS.addEventListener('click', this.mudarAbaParaCDS)
    }

    mudarAbaParaPokemon = () => {
        this.sectionsDeVendas.forEach(element => {
            element.style.display = 'none'
            sectionPokemons.style.display = 'flex'
        });
    }

    mudarAbaParaBerries = () => {
        this.sectionsDeVendas.forEach(element => {
            element.style.display = 'none'
            this.sectionBerries.style.display = 'flex'
        });
    }

    mudarAbaParaPokebolas = () => {
        this.sectionsDeVendas.forEach(element => {
            element.style.display = 'none'
            this.sectionPokébolas.style.display = 'flex'
        });
    }

    mudarAbaParaBadges = () => {
        this.sectionsDeVendas.forEach(element => {
            element.style.display = 'none'
            this.sectionBadges.style.display = 'flex'
        });
    }

    mudarAbaParaCDS = () => {
        this.sectionsDeVendas.forEach(element => {
            element.style.display = 'none'
            this.sectionMoveCDsTMHM.style.display = 'flex'
        });
    }
}