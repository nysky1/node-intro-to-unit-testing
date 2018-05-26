// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `adder` function
describe('fizzBuzz', function() {

  // test the normal case
  it('should check fizz buzz logic', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {a: 5, expected: 'buzz'},
      {a: 3, expected: 'fizz'},
      {a: 15, expected: 'fizz-buzz'}
    ];
    // for each set of inputs (a, b), `adder` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });
  });
  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a'],
      ['1'],
      [false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input[0]);
      }).to.throw(Error);
    });
  });
 
});