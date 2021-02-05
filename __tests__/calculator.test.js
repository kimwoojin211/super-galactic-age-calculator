//woojin notes: see calculator.js notes

import Calculator from './../src/calculator.js';
describe('Calculator', () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });
  test("It will create a new Super Galactic Age Calculator object", () => {
    expect(calculator).toEqual({});
  });
  // tests planetConversion function
  // 1 mercury age = .24 earth age
  // 1 venus age = .62 earth age
  // 1 mars age = 1.88 earth age
  // 1 jupiter age = 11.86 earth ages

  test("It will convert the input number from earth time to another planet's time", () => {
    expect(calculator.timeConverter(26, "Mercury")).toEqual(26/.24);
    expect(calculator.timeConverter(26, "Venus")).toEqual(26/.62);
    expect(calculator.timeConverter(26, "Mars")).toEqual(26/1.88);
    expect(calculator.timeConverter(26, "Jupiter")).toEqual(26/11.86);
  });
  // tests planetAge function
  // assumes that a person's inputted age is always a positive integer
  test("It will calculate a person's age based on the user's choice of a planet's solar year", () => {
    expect(calculator.planetAge(26, "Mercury")).toEqual(108);
    expect(calculator.planetAge(26, "Venus")).toEqual(41);
    expect(calculator.planetAge(26, "Mars")).toEqual(13);
    expect(calculator.planetAge(26, "Jupiter")).toEqual(2);
  });
  // tests lifeExpectancy function
  // assumes average life expectancy is 70 earth years for everyone.
  // returns value in terms of planet's years
  //  positive number indicates how many years left,
  //  negative number indicates how many years user's survived past life expectancy
  test("It will determine how many more years a person is expected to live (or how many years a person has lived past the average life expectancy) on a planet of the user's choosing", () => {
    expect(calculator.lifeExpectancy(26, "Mercury")).toEqual(183);
    expect(calculator.lifeExpectancy(100, "Mercury")).toEqual(-125);
    expect(calculator.lifeExpectancy(26, "Venus")).toEqual(70);
    expect(calculator.lifeExpectancy(100, "Venus")).toEqual(-48);
    expect(calculator.lifeExpectancy(26, "Mars")).toEqual(23);
    expect(calculator.lifeExpectancy(100, "Mars")).toEqual(-15);
    expect(calculator.lifeExpectancy(26, "Jupiter")).toEqual(3);
    expect(calculator.lifeExpectancy(100, "Jupiter")).toEqual(-2);
  }); 
  
});