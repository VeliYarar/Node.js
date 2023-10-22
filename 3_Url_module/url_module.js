const url = require('node:url');

const address = 'https://www.https://www.youtube.com/watch?v=yI8zacoiBzY&ab_channel=HaberGlobal.com/';
let result =  url.parse(address, true);

//console.log(result);
console.log(result.protocol);
console.log(result.search);