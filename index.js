// run file: node index.js

const brain = require('brain.js')
const trainingData  = require('./src/training-data')
const util = require('./src/util')

/**
 * 0. Create a neural network
 */
const net = new brain.NeuralNetwork()


/**
 * 1. Train our neural network on training-data
 */
net.train(
  util.serialize(trainingData), {log: true}
)


/**
 * 2. Let's categorize some real data
 */
const output = net.run(
  util.encode('Nothing is not ok')
)

/**
 * 2b. Use net as a normal function
 */
// const detectMood = net.toFunction()
// const output = detectMood(
//   util.encode('Nothing is not ok')
// )


console.log(output)

