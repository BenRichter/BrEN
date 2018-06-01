const brain = require('brain.js')

const net = new brain.NeuralNetwork()

net.train([
  {input: [0, 0], output: [0]},
  {input: [0, 1], output: [1]},
  {input: [1, 0], output: [1]},
  {input: [1, 1], output: [0]}
])

const output = net.run([1, 0])  // node index.js >> 0.9365723729133606


console.log(output)

// Todo: https://medium.com/openmindonline/emotion-detection-with-javascript-neural-networks-5a408f84eb75
