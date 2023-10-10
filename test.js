// call pokemon data
const pokemon = require('pokemon');
console.log(pokemon.all('ko'));

for(i=0; i<pokemon.all.length; i++){
  pokemon.all[count] = pokList[i];
  count = count+i;
}
console.log(pokList);
console.log(pokList[0]);