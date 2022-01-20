'use strict';

const Dice = require('../dice.js');

// First check the methods whether or not are defined in dice.js.

describe('Methods and getters defined', ()=>{
    const dice = new Dice();

    test('minimumValue defined', () => {
        expect(dice.minimumValue).toBeDefined();
    });
    test('minimumValue defined', () => {
        expect(dice.minimumValue).toBe(1);
    });
    test('maximumValue defined', () => {
        expect(dice.maximumValue).toBeDefined();
    });
    test('dots defined', () => {
        expect(dice.dots).toBeDefined();
    });
    test('roll defined', () => {
        expect(dice.roll).toBeDefined();
    });
    // test('toString defined', () => { //always defined
    //     expect(dice.toString).toBeDefined();
    // });
});


// Second we test the constructor itself
describe('Create a dice with no upper bound given',()=>{
    const dice = new Dice();

    test('maximumValue is 6', ()=>{
        expect(dice.maximumValue).toBe(6);
    });

    test('minimumValue is 1', () =>{
        expect(dice.minimumValue).toBe(1);
    });

    test('dot is 0',()=>{
        expect(dice.dots).toBe(0);
    })

});

describe('Create a dice with upper bound 12',()=>{
    const dice = new Dice(12);

    test('maximumValue is 12',()=>{
        expect(dice.maximumValue).toBe(12);
    });

    test('minimumValue is 1',()=>{
        expect(dice.minimumValue).toBe(1);
    });

    test('dot count is 0',()=>{
        expect(dice.dots).toBe(0);
    });

});

describe('Testing the constructor',()=>{

    describe('Create a dice with given upperBound 2-20',()=>{
        const testValues = new Array(19).fill(2).map((value,index)=>[value+index]);
    
        test.each(testValues)('test upper bound %s',(upperBound)=>{
            const dice = new Dice(upperBound);
            expect(dice.maximumValue).toBe(upperBound);
        });
    });
    
    describe('Testing exceptions',()=>{
        const testValues=[
            ['s',   'Upper bound must be an integer'],
            [2.5,   'Upper bound must be an integer'],
            [21,               'Upper bound too big'],
            [100,              'Upper bound too big'],
            [-4,             'Upper bound too small'],
            [1,              'Upper bound too small'],
            [0,              'Upper bound too small'],
        ];

        test.each(testValues)('Upper bound %s throws an exception',(value,expected)=>{
            expect(()=>{
                new Dice(value)
            }).toThrow(expected);
        });
    });
});

describe('Testing roll method',()=>{

    describe('Test with default upper bound 6',()=>{
        const dice = new Dice();
        test('test when rolled',()=>{
            dice.roll();
            expect(dice.dots).toBeGreaterThanOrEqual(1);
            expect(dice.dots).toBeLessThanOrEqual(6);
        });
    });

    describe('Test with upper bound 12',()=>{
        const dice = new Dice(12);
        test('test when rolled',()=>{
            dice.roll();
            expect(dice.dots).toBeGreaterThanOrEqual(1);
            expect(dice.dots).toBeLessThanOrEqual(12);
        });
    });

    describe('Test with upper bound 2-20',()=>{
        const testValues = new Array(19).fill(2).map((value,index)=>[value+index]);
        test.each(testValues)('test upper bound %s',(upperBound)=>{
            const dice = new Dice(upperBound);
            dice.roll();
            expect(dice.dots).toBeGreaterThanOrEqual(1);
            expect(dice.dots).toBeLessThanOrEqual(upperBound);
        });
    });

});