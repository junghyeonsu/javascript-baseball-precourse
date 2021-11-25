export const $ = (selector) => document.querySelector(selector);

export const pickUniqueNumbers = (start, end, count) => {
  return MissionUtils.Random.pickUniqueNumbersInRange(start, end, count);
}
