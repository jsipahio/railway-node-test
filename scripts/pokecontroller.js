function getAllPokemon(req, resp, pokedex){
    resp.json(pokedex);
}

function getPokemonByID(req, resp, pokedex) {
    const monToFind = req.params.id;
    const matches = pokedex.filter(obj => monToFind == obj.id);
    resp.json(matches);
}

function postNewPokemon(req, resp, pokedex) {
    try {
        console.log(req.body);
        //resp.json(req.body);
        //return;
        //const newPokemon = bodyToPokemon(req);
        const newPokemon = req.body;
        const numPokemon = pokedex.length;
        // const newPokemon = req.body;
        pokedex.push(newPokemon);
        if (pokedex.length < numPokemon + 1) {
            resp.json({"message": "post failed"});
        }
        else {
            resp.json({"message": "post succeeded"});
            console.log(pokedex);
        }
    }
    catch (ex){
        resp.json({"message":ex.message});
    }
}

function bodyToPokemon(req) {

    const id = req.body['id'];
    const name = {
        "english": req.body['englishName'],
        "japanese": "",
        "chinese": "",
        "french": req.body['frenchName']
    };
    const type = [req.body['type1'], req.body['type2']];
    const base = {
        "HP": req.body['hp'],
        "Attack": req.body['attack'],
        "Defense": req.body['defense'],
        "Sp. Attack": req.body['spAttack'],
        "Sp. Defense": req.body['spDefense'],
        "Speed": req.body['speed']
    }
    const newPokemon = {
        "id":id,
        "name":name,
        "type":type,
        "base":base
    }
    return newPokemon;
}

module.exports = {
    getAllPokemon,
    getPokemonByID,
    postNewPokemon
}