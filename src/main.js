import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './calculator';

function attachButtonListener() {
  $("#button-container").on("click", "button", function () {
    let calculator = new Calculator(this.id);
    const input = parseInt($("#userAge").val());
    if (Number.isInteger(input) && input > 0) {
      let lifeExp = calculator.lifeExpectancy(input);
      const planetAge = calculator.planetAge(input);
      $(".result").show();
      $("#planet").text(this.id);
      $("#planetAge").text(planetAge + (planetAge > 1 ? " years" : " year"));

      if (lifeExp >= 0) {
        $("#lifeExp").text(`You have ${lifeExp} more years to live.`);
        if (lifeExp === 0)
          $("#lifeExp").append(" Yikes.");
      }
      else
      {
        lifeExp = -lifeExp;
        $("#lifeExp").text(`Congratulations! You have lived ${lifeExp} years more than we expected.`);
      }
    }
  });
}


$("form").on("submit", function (event) {
  event.preventDefault();
});
attachButtonListener();
