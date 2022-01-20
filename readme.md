# Dice class (API)

This is a Dice class for a dice game. Dice holds the number of dots. The number of dots is between 1 and given upper bound (included). The maximum upper bound is 20. The minimum upper bound is 2. If the dice hasn't been rolled, thenumber of dots is 0. After the dice has been rolled, the dot count can't become 0 again.

## Operations

### **constructor(upperBound)**

- Initializes the dice with upper bound that is passed as a parameter.
  - if no upperBound is given, the default upper bound will be 6.
- Initializes dot count to 0.

- if upperBound is not an integer, throw an exception - error - :
  `'Upper bound must be an integer'`

- if upperBound is not between 2 and 20, both ends included, then an exception is thrown:
  - if upperBound >20: `'Upper bound too big'`
  - if upperBound <2: `'Upper bound too small'`

### Methods

#### **roll()**

- roll the dice,
- when rolled, the doc count become a random number between 1 and upper bound (included)
- returns nothing

#### **toString()**

- return dot count as a string. For example: `'4'`.
- if dice hasn't been rolled, then returns a string `'Dice not rolled yet'`.

### Getters

#### **dots**

- returns the number oof dots

#### **minimumValue**

- returns the minimum of dots. It should be 1.

#### **maximumValue**

- returns the upper bound of the dice.
