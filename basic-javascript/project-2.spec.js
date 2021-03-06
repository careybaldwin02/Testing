const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project 2 Functions', () => {
    describe('getBiggest',() => {

        const biggest = funcs.getBiggest;
        const result1 = biggest(2,4);
        const result2 = biggest('2','4');

        it('should check which is largest', () => {
            expect(result1).toBe(4);
            expect(result2).toBe('both values must be numbers');
        })
    })
    describe('greeting', () => {
        const greet = funcs.greeting;

        const result1 = greet();
        const result2 = greet('German');

        it('should return a greeting in specified language', () => {
            expect(result1).toBe('Hello!');
            expect(result2).toBe('Guten Tag!');
        })
    })
    describe('Ten or Five', () => {
        const tenFive = funcs.isTenOrFive;

        const result1 = tenFive();
        const result2 = tenFive(5)

        it('should return true if number is either 10 or 5', () => {
            expect(result1).toBe(false);
            expect(result2).toBe(true);
        })
    })
    describe('Is in Range', () => {
        const inRange = funcs.isInRange;

        const result1 = inRange();
        const result2 = inRange(26);

        it('should return true if the number is in range', () => {
            expect(result1).toBe(false);
            expect(result2).toBe(true);
        })
    })
    describe('is Integer', () => {
        const integer = funcs.isInteger;

        const result1 = integer();
        const result2 = integer(4);
        const result3 = integer(3.2);

        it('should return true if value is an integer', () => {
            expect(result1).toBe(false);
            expect(result2).toBe(true);
            expect(result1).toBe(false);
        })
    })
    describe('fizz buzz', () => {
        const fizzBuzz = funcs.fizzBuzz;

        const result1 = fizzBuzz(3);
        const result2 = fizzBuzz(4)

        it('should return fizz is number is divisible by 3 and buzz if number is divisible by 5', () => {
            expect(result1).toBe('fizz');
            expect(result2).toBe(4);
        })
    })
    describe('is prime', () => {
        const isPrime = funcs.isPrime;

        const result1 = isPrime(3);
        const result2 = isPrime(4)

        it('should check if a number is prime or not', () => {
            expect(result1).toBe(true);
            expect(result2).toBe(false);
        })
    })
    describe('return first', () => {
        const returnFirst  = funcs.returnFirst;

        const result1 = returnFirst([3,4,5]);
        const result2 = returnFirst(['one','two','three'])

        it('return the first item in the array', () => {
            expect(result1).toBe(3);
            expect(result2).toBe('one');
        })
    })
    describe('return last', () => {
        const returnLast  = funcs.returnLast;

        const result1 = returnLast([3,4,5]);
        const result2 = returnLast(['one','two','three'])

        it('return the last item in the array', () => {
            expect(result1).toBe(5);
            expect(result2).toBe('three');
        })
    })
    describe('array length', () => {
        const arrayLength  = funcs.getArrayLength;

        const result1 = arrayLength([3,4,5]);
        const result2 = arrayLength([])

        it('return the length of the array', () => {
            expect(result1).toBe(3);
            expect(result2).toBe(0);
        })
    })
    describe('increment by one', () => {
        const increment  = funcs.incrementByOne;

        const result1 = increment([3,4,5]);
        const result2 = increment([0])

        it('should increment each value by one', () => {
            expect(result1).toEqual([4,5,6]);
            expect(result2).toEqual([1]);
        })
    })
    describe('add item', () => {
        const addItem  = funcs.addItemToArray;

        const result1 = addItem([3,4,5],6);
        const result2 = addItem([0,0,0],0);

        it('should add an item to the end', () => {
            expect(result1).toEqual([3,4,5,6]);
            expect(result2).toEqual([0,0,0,0]);
        })
    })
    describe('add item front', () => {
        const addItemFront  = funcs.addItemToFront;

        const result1 = addItemFront([3,4,5],2);
        const result2 = addItemFront([0,0,0],0);

        it('should add item to the end', () => {
            expect(result1).toEqual([2,3,4,5]);
            expect(result2).toEqual([0,0,0,0]);
        })
    })
    describe('words to sentence', () => {
        const sentence  = funcs.wordsToSentence;

        const result1 = sentence(['this','is','a','sentence']);
        const result2 = sentence([1,2,3,4]);

        it('should create a sentence', () => {
            expect(result1).toBe('this is a sentence');
            expect(result2).toBe('1 2 3 4');
        })
    })
    describe('contains', () => {
        const contains  = funcs.contains;

        const result1 = contains(['tests','are','fun'],'fun');
        const result2 = contains(['tests','are','fun'],'bad')

        it('should check if array contains item', () => {
            expect(result1).toBe(true);
            expect(result2).toBe(false);
        })
    })

    describe('add', () => {
        const add  = funcs.addNumbers;

        const result1 = add([3,3,3]);
        const result2 = add([0,1,1]);

        it('should add the numbers', () => {
            expect(result1).toBe(9);
            expect(result2).toBe(2);
        })
    })

    describe('average', () => {
        const average  = funcs.averageTestScore;

        const result1 = average([16,18,20]);
        const result2 = average([1,2,3,4,5]);

        it('should average the numbers', () => {
            expect(result1).toBe(18);
            expect(result2).toBe(3);
        })
    })
    describe('largest', () => {
        const largest = funcs.largestNumber;

        const result1 = largest([16,18,20]);
        const result2 = largest([1,2,3,4,5]);

        it('should return the largest number', () => {
            expect(result1).toBe(20);
            expect(result2).toBe(5);
        })
    })

})