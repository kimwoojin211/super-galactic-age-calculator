import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './calculator';

let calculator = new Calculator();

function attachButtonListener() {
  $("#button-container").on("click", "button", function () {
    const input = parseInt($("#userAge").val());
    console.log(input);
    if (Number.isInteger(input) && input > 0) {
      const lifeExp = calculator.lifeExpectancy(input, this.id);
      const planetAge = calculator.planetAge(input, this.id);
      $(".result").show();
      $("#planet").text(this.id);
      $("#planetAge").text(planetAge + (planetAge > 1 ? " years" : " year"));

      if (lifeExp >= 0) {
        $("#lifeExp").text("You have " + lifeExp + " more years to live.");
        if (lifeExp === 0)
          $("#lifeExp").append(" Yikes.");
      }
      else
        $("#lifeExp").text("Congratulations! You have lived  " + (-(lifeExp)) + " years more than we expected.");
    }
  });
}

$(function () {

  $("form").on("submit", function (event) {
    event.preventDefault();
  });
  attachButtonListener();

});
