/* eslint-disable prefer-arrow-callback */
/* eslint-disable prefer-template */
/* eslint-disable no-param-reassign */
/* eslint-disable quotes */
import data from './data.js';
import add, { addtitle, remove } from './add.js';

const table = document.querySelector('table');
table.insertAdjacentHTML('beforeend', addtitle());
data.forEach((element) => {
  table.insertAdjacentHTML('beforeend', add(element));
});

const td = Array.from(document.querySelectorAll('.title td'));
const array = [];

// array названия заголовков таблицы
td.forEach((element) => {
  array.push(element.innerText);
});
// клик по заголовкам таблицы
td.forEach((element) => {
  element.addEventListener('click', () => {
    for (let i = 0; i < array.length; i++) {
      td[i].innerText = array[i];
      td[i].classList.remove('check');
    }
    if (td.indexOf(element) === 0) {
      data.sort((a, b) => a.id - b.id);
      remove();
      data.forEach((el) => {
        table.insertAdjacentHTML('beforeend', add(el));
      });
    }
    if (td.indexOf(element) === 1) {
      data.sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        // a должно быть равным b
        return 0;
      });
      remove();
      data.forEach((el) => {
        table.insertAdjacentHTML('beforeend', add(el));
      });
    }

    if (td.indexOf(element) === 2) {
      data.sort((a, b) => a.year - b.year);
      remove();
      data.forEach((el) => {
        table.insertAdjacentHTML('beforeend', add(el));
      });
    }
    if (td.indexOf(element) === 3) {
      data.sort((a, b) => parseFloat(a.imdb) - parseFloat(b.imdb));
      remove();
      data.forEach((el) => {
        table.insertAdjacentHTML('beforeend', add(el));
      });
    }
    const text = element.innerText;
    element.innerText = text + ' ' + String.fromCharCode(8659);
    element.classList.add('check');
  });
});
