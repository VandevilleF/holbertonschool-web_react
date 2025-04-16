import $ from "jquery";
import '../header/header.css';
import logo from '../../assets/holberton-logo.jpg';

$('body').append(`
  <div class="header">
    <div class="header-logo"></div>
    <div class="header-title"><h1>Holberton Dashboard</h1></div>
  </div>
`);

$('.header-logo').css('background-image', `url(${logo})`);

console.log('Init header');
