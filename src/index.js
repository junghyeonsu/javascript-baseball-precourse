import Computer from './Computer.js';

export default class BaseballGame {
  constructor () {
    this.computer = new Computer();
  }

  init () {
    // Init baseball game
  }
}

const baseballgame = new BaseballGame();
baseballgame.init();
