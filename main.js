import { renderCharacter } from './components/renderCharacter.js';
import { renderMessage } from './components/renderCharacter.js';
import { loadData } from './components/loadDlata.js';

const dataObject = {
  isAlive: true,
  message: "You're all to die!",
  name: 'Joffrey',
  family: 'Baratheon',
  age: 18,
  reignYears: 1,
  category: 'king',
};

const data = loadData();

data.forEach((element) => renderCharacter(element));
