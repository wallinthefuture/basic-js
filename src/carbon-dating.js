const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const NATURAL_LOGARITHM_OF_TWO = 0.693;
const CONSTANT_FOR_THE_REACTION = NATURAL_LOGARITHM_OF_TWO / HALF_LIFE_PERIOD;
module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity != 'string' ||
    sampleActivity == undefined ||
    /[a-z]/i.test(sampleActivity) ||
    Number(sampleActivity) <= 0 ||
    Number(sampleActivity) > MODERN_ACTIVITY
  ) {
    return false;
  }
  return Math.ceil(
    Math.log(MODERN_ACTIVITY / Number(sampleActivity)) /
      CONSTANT_FOR_THE_REACTION
  );
};
