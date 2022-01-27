'use strict';

// We use the Dice clas to build on the class Coin

const Dice = require('./dice');

class Coin extends Dice {
    constructor(){
        super(2);
    }

flip(){
    this.roll();
}

toString(){
    if(this.dotCount === 0 ){
        return 'Coin not flipped yet';
    }
    return this.dotCount === 1 ? 'HEADS' : 'Tails';
}

}

module.exports = {Coin};

// const coin = new Coin();
// console.log(coin);
// console.log(coin.toString());
// coin.flip();
// console.log(coin.toString());



class Coin2 {
    constructor(){
        this.dice = new Dice(2);
        this.face = 0;
    }

    flip(){
        this.dice.roll();
        this.face = this.dice.dots;
    }

    toString(){
        if(this.face === 0 ){
            return 'Coin not flipped yet';
        }
        return this.face === 1 ? 'HEADS' : 'Tails';
    }
}

const coin = new Coin2();
console.log(coin);
console.log(coin.toString());
coin.flip();
console.log(coin.toString());

// The first Coin is also a Dice because we are extending the class Dice and we can use everything embeded inside. On the other hand, the Coin2 ain't a Dice anymore because we are not extending the Dice class and hence we can only use what is defined inside the Coin2 class.