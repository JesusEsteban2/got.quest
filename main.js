import { renderCharacter } from './components/renderCharacter.js';
import { loadData } from './components/loadData.js';

const data = loadData();
const newCard = `<li class="character col"></li>`;

data.forEach((element) => {
  const insertPoint = document.querySelector('.characters-list');

  insertPoint.insertAdjacentHTML('afterbegin', newCard);
  element.linkElement = document.querySelector(
    '.characters-list>li:first-Child'
  );
  const link = renderCharacter(element, element.linkElement);
});
