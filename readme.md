# Dice class (API)

This is a Dice class for a dice game. Dice holds the number of dots. The number of dots is between 1 and given upper bound (included). The maximum upper bound is 20. The minimum upper bound is 2. If the dice hasn't been rolled, thenumber of dots is 0. After the dice has been rolled, the dot count can't become 0 again.

## Technologies used

Built with:

- Node
- JS
- Jest

## Setup and usage

## 1. Install jest as devDependency

```shell
> npm install jest --save-dev
```

## 2. Run the dice

```shell
> node program.js
```

## 3. To run tests

```shell
> npm test
```

### 3B. To run only one test file

```shell
> npm test --testFile fileToBeTested.test.js
```

## Screenshots

![alt text](./src/Components/Images/main.png) "Main View"

![alt text](./src/Components/Images/solution.png) "Solution view"

## Sources

- Business College Helsinki. Unit testing lessons.

## Authors and acknowledgment

Abel Parada

- [GitHub @abel-parada](https://github.com/abel-parada)
- [LinkedIn](https://www.linkedin.com/in/abelparadamillan/)

---

# Specifications

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

---
