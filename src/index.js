import Computer from './Computer.js';
import { $ } from './utils/index.js';

export default class BaseballGame {
  constructor () {
    this.computer = new Computer();
  }

  init () {
    this.initEventListeners();
  }

  initEventListeners () {
    $('form').addEventListener('submit', this.onSubmitPlayerInput);
  }

  onSubmitPlayerInput (event) {
    event.preventDefault();
    const input = $('#user-input').value;
    console.log(`제출된 값: ${input}`);
  }
}

const baseballgame = new BaseballGame();
baseballgame.init();
