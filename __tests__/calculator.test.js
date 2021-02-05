import Calculator from './../src/calculator.js';
// assumes for all functions that all ages are integers that round down after conversion
describe('Calculator', () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });
  test("It will create a new Super Galactic Age Calculator object", () => {
    expect(calculator).toEqual({});
  });
  // tests realAge function
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

  // 1 jupiter age = 11.86 earth age
  test("It will calculate a person's age on Jupiter", () => {
    expect(calculator.realAge(26, "Jupiter")).toEqual(2);
  });
  // tests lifeExpectancy function
  // assumes average life expentency is 70 earth years for everyone.
  // returns value in terms of planet's years or earth years?
  test("It will calculate a person's age on Mercury", () => {
    expect(calculator.lifeExpectancy(26, "Mercury")).toEqual(183);
  });
});