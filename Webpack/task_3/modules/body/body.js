import $ from "jquery";
import _ from "lodash";
import '../body/body.css';

$('body').append(`
  <div class="content">
    <button>Click here to get started</button>
    <p id='count'></p>
  </div>
  `);



let count = 0;
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter, 500));
