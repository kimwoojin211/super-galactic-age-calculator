import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './calculator';

let calculator = new Calculator();
console.log(calculator);

$(function(){

  $("form").on("submit",function(event){
      event.preventDefault();
  });

});
