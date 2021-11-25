import { $, pickUniqueNumbers } from './utils/index.js';
import { START_NUMBER_RANGE, END_NUMBER_RANGE, COUNT_OF_NUMBERS } from '../constants.js';

function BaseballGame () {
  this.answer = pickUniqueNumbers(START_NUMBER_RANGE, END_NUMBER_RANGE, COUNT_OF_NUMBERS);

  this.init = () => {
    initEventListeners();
  }

  const initEventListeners = () => {
    $('form').addEventListener('submit', onSubmitPlayerInput);
  }

  const onSubmitPlayerInput = (event) => {
    event.preventDefault();
    const input = $('#user-input').value;
    console.log(`제출된 값: ${input}`);
  }
}

const baseballgame = new BaseballGame();
baseballgame.init();
