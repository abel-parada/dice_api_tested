'use strict';

const {createCoin} = require('./newCoin');

const coinA = createCoin();
const coinB = createCoin();


console.log(coinA);
console.log(coinA.toString());
console.log(coinB.toString());
coinA.flip();
coinB.flip();
console.log(coinA.toString());
console.log(coinB.toString());
console.log(coinA.side);
console.log(coinB.side);