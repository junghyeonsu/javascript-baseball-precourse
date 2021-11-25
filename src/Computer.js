import { START_NUMBER_RANGE, END_NUMBER_RANGE, COUNT_OF_NUMBERS } from '../constants.js';

export default class Computer {
  constructor () {
    this.randomNumbers = this.pickUniqueNumbers(START_NUMBER_RANGE, END_NUMBER_RANGE, COUNT_OF_NUMBERS);
  }

  pickUniqueNumbers (start, end, count) {
    return MissionUtils.Random.pickUniqueNumbersInRange(start, end, count);
  }
}
