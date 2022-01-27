'use strict';

// We create the dice class and export it right away
// Check the get syntax

module.exports = class Dice {

    constructor(upperBound=6){//if the parameter is not given, the default upperBound will be 6

        if(!Number.isInteger(upperBound)){
            throw new Error('Upper bound must be an integer');
        }
        if(upperBound>20){
            throw new Error('Upper bound too big');
        }
        if(upperBound<2){
            throw new Error('Upper bound too small');
        }

        this.dotCount=0;
        this.upperBound=upperBound;
    }

    get minimumValue(){
        return 1;
    };

    get maximumValue(){
        return this.upperBound;
    }

    get dots(){
        return this.dotCount;
    }

    roll(){

        this.dotCount = Math.ceil(Math.random()*this.upperBound);

    }

    toString(){
        // if(this.dotCount===0){
        //     return 'Dice not rolled yet';
        // }
        // else {
        //     return `${this.dotCount}`;
        // }
        return this.dotCount === 0 ? 'Dice not rolled yet' : `${this.dotCount}`;
    }
}