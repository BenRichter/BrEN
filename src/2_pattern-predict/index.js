/**
 * TODO
 * > node ./src/2_pattern-predict
 */
const brain = require('brain.js')
const trainingData  = require('./data')
const { fixLengths, encode, encodeTrainingData } = require('./util.js')

/**
 * 0. Create a neural network
 */
const net = new brain.NeuralNetwork({
  activation: 'sigmoid', // activation function
  hiddenLayers: [2],
  iterations: 20000,
  learningRate: 0.5 // global learning rate, useful when training using streams
})


/**
 * 1. Train our neural network on training data
 * https://github.com/BrainJS/brain.js#training-options
 */
net.train(
  fixLengths(encodeTrainingData(trainingData)), { log: true }
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



