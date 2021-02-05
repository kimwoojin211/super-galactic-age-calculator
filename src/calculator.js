/*woojin notes: 

*/
export default class Calculator {
  constructor() { }

  timeConverter(earthTime,location){
    switch (location.toLowerCase()) {
      case ("mercury"):
        return earthTime / .24;
      case ("venus"):
        return earthTime / .62;
      case ("mars"):
        return earthTime / 1.88;
      case ("jupiter"):
        return earthTime / 11.86;
      default:
        break;
      }
  }
  // assumes earthAge and returned value are always positive integers
  planetAge(earthAge, location) {
    return Math.floor(this.timeConverter(earthAge, location));
  }
  
  //assumes earthAge is always a positive integer
  lifeExpectancy(earthAge, location){
    const averageExpectancy = 70;
    const convertedExpectancy = this.timeConverter(averageExpectancy - earthAge, location);
    return convertedExpectancy > 0 ? Math.floor(convertedExpectancy) : Math.ceil(convertedExpectancy);
  }
}
