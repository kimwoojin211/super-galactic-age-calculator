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
  test("It will convert the input number from earth years to Mercury years.", () => {
    expect(calculator.timeConverter(26, "Mercury")).toEqual(108.33333333333334);
  });
  test("It will convert the input number from earth years to Venus years.", () => {
    expect(calculator.timeConverter(26, "Venus")).toEqual(41.935483870967744);
  });
  test("It will convert the input number from earth years to Mars years.", () => {
    expect(calculator.timeConverter(26, "Mars")).toEqual(13.8297872340425532);
  });
  test("It will convert the input number from earth years to Jupiter years.", () => {
    expect(calculator.timeConverter(26, "Jupiter")).toEqual(2.192242833052276559865);
  });

  // tests planetAge function
  // assumes that a person's inputted age is always a positive integer
  test("It will calculate a person's age in years from earth years to Mercury years.", () => {
    expect(calculator.planetAge(26, "Mercury")).toEqual(108);
  });
    test("It will calculate a person's age in years from earth years to Venus years.", () => {
    expect(calculator.planetAge(26, "Venus")).toEqual(41);
  });
  test("It will calculate a person's age in years from earth years to Mars years.", () => {
    expect(calculator.planetAge(26, "Mars")).toEqual(13);
  });
  test("It will calculate a person's age in years from earth years to Jupiter years.", () => {
    expect(calculator.planetAge(26, "Jupiter")).toEqual(2);
  });
  // tests lifeExpectancy function
  // assumes average life expectancy is 70 earth years for everyone.
  // problem clearly states that it should "determine/return the number of years", so it will return a number, not a string
  // returns value in terms of planet's years
  //  positive number indicates how many years left,
  //  negative number indicates how many years user's survived past life expectancy
  test("Given an age less than the average expectancy, it will return how many more years a person is expected to live on Mercury", () => {
    expect(calculator.lifeExpectancy(26, "Mercury")).toEqual(183);
  });
  test("Given an age higher than the average expectancy, it will return how many years a person has lived beyond the average life expectancy on Mercury (returns a negative value)", () => {
    expect(calculator.lifeExpectancy(100, "Mercury")).toEqual(-125);
  });
  test("Given an age less than the average expectancy, it will return how many more years a person is expected to live on Venus", () => {
    expect(calculator.lifeExpectancy(26, "Venus")).toEqual(70);
  });
  test("Given an age higher than the average expectancy, it will return how many years a person has lived beyond the average life expectancy on Venus (returns a negative value)", () => {
    expect(calculator.lifeExpectancy(100, "Venus")).toEqual(-48);
  });
  test("Given an age less than the average expectancy, it will return how many more years a person is expected to live on Mars", () => {
    expect(calculator.lifeExpectancy(26, "Mars")).toEqual(23);
  });
  test("Given an age higher than the average expectancy, it will return how many years a person has lived beyond the average life expectancy on Mars (returns a negative value)", () => {
    expect(calculator.lifeExpectancy(100, "Mars")).toEqual(-15);
  });
  test("Given an age less than the average expectancy, it will return how many more years a person is expected to live on Jupiter", () => {
    expect(calculator.lifeExpectancy(26, "Jupiter")).toEqual(3);
  });
  test("Given an age higher than the average expectancy, it will return how many years a person has lived beyond the average life expectancy on Jupiter (returns a negative value)", () => {
    expect(calculator.lifeExpectancy(100, "Jupiter")).toEqual(-2);
  });

});