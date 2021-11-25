import { $, pickUniqueNumbers } from './utils/index.js';
import { START_NUMBER_RANGE, END_NUMBER_RANGE, COUNT_OF_NUMBERS } from '../constants.js';

function BaseballGame () {
  this.answer = pickUniqueNumbers(START_NUMBER_RANGE, END_NUMBER_RANGE, COUNT_OF_NUMBERS);

  this.init = () => {
    initEventListeners();
  };

  const initEventListeners = () => {
    $('form').addEventListener('submit', onSubmitPlayerInput);
  };

  const onSubmitPlayerInput = (event) => {
    event.preventDefault();
    const input = $('#user-input').value;
    console.log(`제출된 값: ${input}`);
    checkPlayerInput(input);
  };

  const checkPlayerInput = (input) => {
    const set = new Set();
    const isNaNArray = input.split('').map((item) => {
      set.add(item);
      return isNaN(item);
    });
    if (input.length !== 3 || isNaNArray.includes(true) || set.size !== 3) {
      alert('입력 값을 확인해주세요');
      $('#user-input').value = '';
      return;
    }
  };
}

const baseballgame = new BaseballGame();
baseballgame.init();
