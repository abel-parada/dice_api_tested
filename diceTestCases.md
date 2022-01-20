# Test cases for the Dice class

## Test cases for the constructor

upperBound 2: dots 1,2
upperBound 3: dots 1,2,3

upperBound 7: dots 1,2,3,4,5,6,7

new Dice(2) creates Dice with upper bound 2.
new Dice() creates Dice with upper bound 6.
new Dice(12);
new Dice(6);
new Dice(20);
test with all upper bounds 2...20

check that dot count becomes 0

new Dice('s') throw Error `'Upper bound must be an integer'`
new Dice(2.5) throw Error `'Upper bound must be an integer'`

new Dice(21) throw Error `'Upper bound too big'`
new Dice(100) throw Error `'Upper bound too big'`

new Dice(-4) throws `'Upper bound too small'`
new Dice(1) throws `'Upper bound too small'`

## Test cases for roll()

dice = new Dice(upperBound);
dice.roll();
check if 1<= dot count <=upperBound

dice = new Dice();
dice.roll();
check if 1<= dot count <=6

## Test cases for toString()

- roll the dice and then compare the dots to the string returned from toString method.

        dice = new Dice();
        dice.roll();
        expect(dice.toString()).toBe(`${dice.dots}`)

  - if not rolled yet, return `'Dice not rolled yet'`

        dice = new Dice();
        expect(dice.toString()).toBe('Dice not rolled yet');
