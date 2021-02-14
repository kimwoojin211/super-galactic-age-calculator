export default class Calculator {
  constructor(location) {

    this.location = location;

    this.conversion_rates = {
      "Mercury": .24,
      "Venus": .62,
      "Mars": 1.88,
      "Jupiter": 11.86
    }
  }

  timeConverter(earthTime) {
    return earthTime / (this.conversion_rates[this.location]);
  }
  // assumes earthAge and returned value are always positive integers
  planetAge(earthAge) {
    return Math.floor(this.timeConverter(earthAge));
  }

  //assumes earthAge is always a positive integer
  lifeExpectancy(earthAge) {
    const averageExpectancy = 70;
    const convertedExpectancy = this.timeConverter(averageExpectancy - earthAge);
    return convertedExpectancy > 0 ? Math.floor(convertedExpectancy) : Math.ceil(convertedExpectancy);
  }
}
