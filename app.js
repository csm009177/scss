// call pokemon data
const pokemon = require('pokemon');
console.log(pokemon.all('ko'));
// make pokemon list
let pokList = [];
for(i=0; i<pokemon.all('ko').length; i++) {
  pokList[i] = `<li>${pokemon.all('ko')[i]}</li>`;
}
console.log(pokList);


const http = require('http');
const fs = require('fs');
fs.writeFile('./pok.html',

`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <li></li>
</body>
</html>
`,

'utf8',

function(err){
    if (err === null) {
        console.log('success');
    } else {
        console.log('fail');
    }
});