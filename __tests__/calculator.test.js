//woojin notes:
//wait. have i been thinking of this wrong.
//for realAge(age), age is given in earth years, and you want to return the planetary age.
//lifeexpectancy, i also want it to return the planetary age.
//god damn it. i had the life expectancy formula right the first time. 

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
  // returns value in terms of planet's years
  //  positive number indicates how many years left,
  //  negative number indicates how many years user's survived past life expectancy
  test("It will determine how many more years one is expected to live on Mercury (or how many years past the average life expectancy one has lived", () => {
    expect(calculator.lifeExpectancy(26, "Mercury")).toEqual(183);
    expect(calculator.lifeExpectancy(100, "Mercury")).toEqual(-125);
  });
  test("It will determine how many more years one is expected to live on Venus (or how many years past the average life expectancy one has lived", () => {
    expect(calculator.lifeExpectancy(26, "Venus")).toEqual(70);
    expect(calculator.lifeExpectancy(100, "Venus")).toEqual(-48);
  }); 

});