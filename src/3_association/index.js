/**
 * LSTM :: Remember things and retain by reference, fuzzy filter, strings allowed
 * > node ./src/3_association
 */
const brain = require('brain.js')


const trainingData = [
  'Jane saw Doug.',
  'Doug saw Jane.',
  'Spot saw Doug and Jane looking at each other.',
  'It was love at first sight, and Spot had a frontrow seat. It was a very special moment for all.'
];

// 1. Create Net with Long short-term memory
const lstm = new brain.recurrent.LSTM();


// 2. Train
lstm.train( trainingData, {
  iterations: 500,
  log: true
});


/** Complete the sentences */
console.log('Jane...' + lstm.run('Jane'));
console.log('Doug...' + lstm.run('Doug'));
console.log('Spot...' + lstm.run('Spot'));
console.log('It...' + lstm.run('It'));
