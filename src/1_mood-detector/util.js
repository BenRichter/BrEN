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


module.exports = {
  fixLengths,
  encode,
  encodeTrainingData
}
