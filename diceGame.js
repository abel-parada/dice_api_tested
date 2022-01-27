'use strict';

const Dice = require('./dice');

const diceA = new Dice();
const diceB = new Dice();


// console.log('diceA',diceA);// this will return the Dice class as an object

// // Next logs are a way to express the same thing.
// console.log('diceA:', diceA.toString());
// console.log('diceB: '+diceB);


// Now we roll the dices
// diceA.roll();
// diceB.roll();

// console.log('Dice A dots: ',diceA.dots);
// console.log('Dice B dots: ', diceB.toString());
// console.log(`Dice B dots: ${diceB}`);

const wins = {
    Awins:0,
    Bwins:0,
    ties:0
}

for (let i=0; i<10; i++){
    
    diceA.roll();
    diceB.roll();

    console.log('Dice A dots: ',diceA.dots);
    console.log('Dice B dots: ', diceB.toString());
    console.log(`Dice B dots: ${diceB}`);

    if (diceA.dots===diceB.dots){
        console.log('Same dots - same result');
        wins.ties++;
    }
    else if(diceA.dots>diceB.dots){
        console.log('A wins')
        wins.Awins++;
    }
    else{
        console.log('B wins');
        wins.Bwins++;
    }
}

console.log('\nGAME STATISTICS');
console.log(`Wins for a: ${wins.Awins}\nWins for b: ${wins.Bwins}\nTies: ${wins.ties}`);

// End of dice game

// Beginning of coin toss
const coin = new Dice(2);
coin.roll();
console.log(`\nFlipping a coin.\nResult:${coin.dots === 1 ? 'heads' : 'tails'}`);
// End of coin toss

const diceArray=[new Dice(), new Dice(), new Dice()];
diceArray.forEach(dice => console.log(dice.toString()));

