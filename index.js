// run file: node index.js

const brain = require('brain.js')
const trainingData  = require('./src/training-data')
const { fixLengths, encode, encodeTrainingData } = require('./src/util')

/**
 * 0. Create a neural network
 */
const net = new brain.NeuralNetwork()


/**
 * 1. Train our neural network on training-data
 * https://github.com/BrainJS/brain.js#training-options
 */
net.train(
  fixLengths(encodeTrainingData(trainingData)),
  {
    // iterations: 20000,
    // errorThresh: 0.005,
    // learningRate: 0.3,
    // timeout: 100000,
    log: true
  }
)


/**
 * 2. Let's categorize some real data
 *  (b. Use net as a normal function)
 */
const output = net.run(
  encode('Nothing is not ok')
)

// const detectMood = net.toFunction()
// const output = detectMood(
//   encode('Nothing is not ok')
// )


console.log(output)


/**
 * (3. Save and Export Net)
 * a. via JSON
 * b. as standalone function without brain.js
 */
// var json = detectMood.toJSON()
// net.fromJSON(json)

// console.log(detectMood.toString()) // copy and paste! no need to import brain.js



