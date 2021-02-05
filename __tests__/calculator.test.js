import Calculator from './../src/calculator.js';

describe('Calculator', () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });
test("It will create a new Super Galactic Age Calculator object", () => {
    expect(calculator).toEqual({});
  });
test("It will calculate a person's age on Mercury", () => {
    expect(calculator.realAge(26,"Mercury")).toEqual(108);
  });
});