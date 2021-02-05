import Calculator from './../src/calculator.js';

describe('Calculator', () => {
  let calculator;
test("It will create a new Super Galactic Age Calculator object", () =>{
  calculator = new Calculator();
  expect(calculator).toEqual({});
  });
});