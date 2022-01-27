'use strict';

const Dice = require('./dice');

function createCoin(){
    const dice = new Dice(2);

    class Coin {
        constructor(){
            this.face=0;
        }

        get side(){
            return this.face;
        }

        flip(){
            dice.roll();
            this.face = dice.dots;
        }

        toString(){
            if(this.face === 0 ){
                return 'Coin not flipped yet';
            }
            return this.face === 1 ? 'HEADS' : 'Tails';
        }

    } //end of the class

    return new Coin();
} //end of the function

module.exports = {createCoin}