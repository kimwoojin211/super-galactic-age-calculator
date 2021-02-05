export default class Calculator{
  constructor(){}

  realAge(earthAge,location) // assumes all ages are integers that round down after conversion
  {
    switch(location){
      case("Mercury"):
        return Math.floor(earthAge / .24);
      case ("Venus"):
        return Math.floor(earthAge / .62);
      default:
        break;
    }
  }
}