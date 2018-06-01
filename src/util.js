/**
 * Convert String to Array of float numbers.
 * Brain is better with numeric values. Always encode chars to numbers.
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
const encodeData = data => data.map( d => encode(d) )

module.exports = encodeData()
