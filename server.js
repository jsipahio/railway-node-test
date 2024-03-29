const express = require('express');
const pokedex = require('./scripts/pokedata');
const cors = require('cors');
const app = express();
const path = require('path');
const pokeRouter = require('./scripts/pokerouter');

app.use(cors());
app.use('/static', express.static(path.join(__dirname,'public')));
app.use(express.json());
pokeRouter.getAllPokemon(pokedex, app);
pokeRouter.getPokemonByID(pokedex, app);
pokeRouter.createNewPokemon(pokedex, app);

let port = 8080;
app.listen(port, () => {
    console.log("serving on port", port);
})