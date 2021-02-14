export default class Calculator {
  constructor(location) { 
    
    this.location = location;
  }

  timeConverter(earthTime) {
    switch (this.location) {
      case ("Mercury"):
        return earthTime / .24;
      case ("Venus"):
        return earthTime / .62;
      case ("Mars"):
        return earthTime / 1.88;
      case ("Jupiter"):
        return earthTime / 11.86;
      default:
        break;
    }
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
