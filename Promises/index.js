import pokemonService from "./pokemon.service.js";
const { getPokemon } = pokemonService;

const pokemon = await getPokemon();

const content = document.querySelector('[data-content]');
content.innerText = JSON.stringify(pokemon.name);

const contents = document.querySelector('[data-content2]');