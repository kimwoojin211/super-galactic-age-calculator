/*woojin notes: 
current problem: want to incorporate planetAge into lifeExpectancy so I don't have to repeat similar switch cases.
I also want to assume that for planetAge, the input earthAge will always be a positive integer, since it doesn't make sense for someone to search look up their own age being negative.
However, the way I have it coded right now, the Math.floor is always being run in the planetAge stage, so it's always rounding down before the calculation within lifeExpectancy, making it inconsistent between an integer and decimal result

solution: i might just make a separate function to calculate the raw decimal conversion, then plug that function into planetAge using Math.floor to get the integer conversion, and also plug the same function into lifeExpectancy to make use of the raw decimal value.
*/
export default class Calculator {
  constructor() { }

  timeConverter(number,location){
    switch (location) {
      case ("Mercury"):
        return number / .24;
      case ("Venus"):
        return number / .62;
      case ("Mars"):
        return number / 1.88;
      case ("Jupiter"):
        return number / 11.86;
      default:
        break;
      }
  }
  
  planetAge(earthAge, location) {
  }

  lifeExpectancy(earthAge, location){
    // const averageExpectancy = 70;
    // const convertedExpectancy = this.planetAge(averageExpectancy - earthAge, location);
    // return (convertedExpectancy > 0 || Number.isInteger(convertedExpectancy)) ? convertedExpectancy : convertedExpectancy + 1;
    // switch (location) {
    //   case ("Mercury"):
    //     return ageDifference > 0 ? Math.floor(ageDifference / 0.24) : Math.ceil(ageDifference / 0.24);
    //   case ("Venus"):
    //     return ageDifference > 0 ? Math.floor(ageDifference / 0.62) : Math.ceil(ageDifference / 0.62);
    //   case ("Mars"):
    //     return ageDifference > 0 ? Math.floor(ageDifference / 1.88) : Math.ceil(ageDifference / 1.88);
    //   case ("Jupiter"):
    //     return ageDifference > 0 ? Math.floor(ageDifference / 11.86) : Math.ceil(ageDifference / 11.86);
    //   default:
    //     break;
    // }
  }

}