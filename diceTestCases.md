# Test cases for the Dice class

## Test cases for the constructor

- upper bound is integer

new Dice(2)
new Dice('s') throw Error
new Dice(2.5) throw Error

new Dice(2) creates Dice with upper bound 2.
new Dice() creates Dice with upper bound 6.

new Dice(21) throw Error
new Dice(100) throw Error
