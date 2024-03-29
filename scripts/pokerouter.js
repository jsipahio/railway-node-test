const path = require('path');
const pokeController = require('./pokecontroller');

const getAllPokemon = (pokedex, app) => {
    app.get("/", (req, resp) => {
        pokeController.getAllPokemon(req, resp, pokedex);
    });
}

const getPokemonByID = (pokedex, app) => { 
    app.get("/single/:id", (req, resp) => {
        pokeController.getPokemonByID(req, resp, pokedex);
    });
}

const createNewPokemon = (pokedex, app) => {
    app.post("/pokemon/:id", (req, resp) => {
        console.log(req.body);
        pokeController.postNewPokemon(req, resp, pokedex);
    })
}

module.exports = {
    getAllPokemon,
    getPokemonByID,
    createNewPokemon
};