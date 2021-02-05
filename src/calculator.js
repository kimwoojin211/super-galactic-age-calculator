export default class Calculator{
  constructor(){}

  realAge(earthAge,location)
  {
    switch(location){
      case("Mercury"):
        return Math.floor(earthAge / .24);
      default:
        break;
    }
  }
}