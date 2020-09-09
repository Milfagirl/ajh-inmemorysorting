import data from './data.js';
import add from './add.js';

const table = document.querySelector('table');
data.forEach((element) => {
  table.insertAdjacentHTML('beforeend', add(element));
});

const tr = document.querySelector('title');
tr.querySelectorAll('td').forEach((element) => {
  element.addEventListener('click', () => {
    element.insertAdjacentText('afterend', '&#8595');
  });
});
