const fs = require('fs');
const path = require('path');


const jsonPath = path.join(__dirname, '../public', 'pokedex-2.json');
const jsonData = fs.readFileSync(jsonPath, 'utf-8');

const pokedex = JSON.parse(jsonData);

module.exports = pokedex;