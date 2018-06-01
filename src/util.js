/**
 * Make all strings same length.
 * > Brain.js needs comparable same length data.
 *
 * @param data
 * @return {*}
 */
const fixLengths = (data) => {

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
 * @param d
 * @return { Array[] }
 */
const encode = d => {
  const encoded = [];
  d.split('').map(c => {
    encoded.push((c.charCodeAt(0) / 255))
  })
  return encoded
}

const encodeData = data => data.map( d => {
  return {
    input:  encode(d.input),
    output: d.output
  }
})


/**
 * Normalize out data for usage
 *
 * @param data
 * @return {*}
 */
const serialize = data => fixLengths(encodeData(data))



module.exports = {
  fixLengths:  fixLengths,
  encode:     encode,
  serialize:  serialize,
}
