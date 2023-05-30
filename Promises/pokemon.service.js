async function fetchJson(url){
    const result = await fetch(url)
    const json = await result.json();
    return json;
}
async function getPokemon(){
    return fetchJson('https://pokeapi.co/api/v2/pokemon/bulbasaur/')
}
export default {
getPokemon,
};