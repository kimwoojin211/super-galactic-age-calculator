import Calculator from './../src/calculator.js';

describe('Calculator', () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });
  test("It will create a new Super Galactic Age Calculator object", () => {
    expect(calculator).toEqual({});
  });
  // assumes all ages are integers that round down after conversion
  // 1 mercury age = .24 earth age
  test("It will calculate a person's age on Mercury", () => {
    expect(calculator.realAge(26,"Mercury")).toEqual(108);
  });
    // 1 venus age = .62 earth age
  test("It will calculate a person's age on Venus", () => {
    expect(calculator.realAge(26, "Venus")).toEqual(41);
  });
  // 1 mars age = 1.88 earth age
  test("It will calculate a person's age on Mars", () => {
    expect(calculator.realAge(26, "Mars")).toEqual(13);
  });
});