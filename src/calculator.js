export default class Calculator{
  constructor(){}

  realAge(earthAge, location) { // assumes all ages are integers that round down after conversion
    switch(location){
      case("Mercury"):
        return Math.floor(earthAge / .24);
      case ("Venus"):
        return Math.floor(earthAge / .62);
      case ("Mars"):
        return Math.floor(earthAge / 1.88);
      case ("Jupiter"):
        return Math.floor(earthAge / 11.86);
      default:
        break;
    }
  }

  lifeExpectancy(realAge,location){
    const averageExpectancy = 70;
    const ageDifference = averageExpectancy - realAge;
    switch (location) {
      case ("Mercury"):
        return ageDifference > 0 ? Math.floor(ageDifference/0.24) : Math.ceil(ageDifference/0.24);
      case ("Venus"):
        return ageDifference > 0 ? Math.floor(ageDifference/0.62) : Math.ceil(ageDifference/0.62);
      default:
        break;
    }
  }

}