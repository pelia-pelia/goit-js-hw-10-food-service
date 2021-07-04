import './sass/main.scss';
import cardsTemplate from './templates/cards-template.hbs';
import menuCards from './menu.json';
import './sass/main.scss';
import './js/color-theme.js';

cardsTemplate(menuCards);

const list = document.querySelector('ul.js-menu');
const cardsMarkup = createCardsMarkup(menuCards);

list.insertAdjacentHTML('beforeEnd', cardsMarkup);

function createCardsMarkup(menuCards) {
  return menuCards.map(cardsTemplate).join('');
}