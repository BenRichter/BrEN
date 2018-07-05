/**
 * Make all strings same length.
 * > Brain.js needs comparable same length data.
 *
 * @param data
 * @return {*}
 */
const fixLengths = data => {
  let maxLengthInput = -1;

  for (let i = 0; i < data.length; i++) {
    if (data[i].input.length > maxLengthInput) {
      maxLengthInput = data[i].input.length;
    }
  }

  for (let i = 0; i < data.length; i++) {
    while (data[i].input.length < maxLengthInput) {
      data[i].input.push(0);
    }
  }

  return data;
}


/**
 * Convert String to Array of float numbers.
 * > Brain.js is better with numeric values. Always encode chars to numbers.
 *
 * @param string - to be converted
 * @return { Array[] }
 */
const encode = string =>  string.split('').map(c => (c.charCodeAt(0) / 255))


/**
 * Encode strings in training data
 *
 * @param arr
 */
const encodeTrainingData = arr => arr.map(d => (
  {
    input:  encode(d.input),
    output: d.output
  }
))

/**
 * see Course: https://scrimba.com/c/c36zkcb
 * @param array
 * @return {*}
 */
const shuffle = array => {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}


module.exports = {
  shuffle,
  fixLengths,
  encode,
  encodeTrainingData
}
