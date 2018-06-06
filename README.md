# BrEN

https://github.com/BrainJS/brain.js 

Install all dependencies `npm install`, then run with node:

```
node .\src\1_mood-detector
```

### On Normalisation
Brain is better with numeric values. Always encode chars to numbers.
The default activation is *sigmoid*, which does need normalization.

You may not need to with *Relu* and *Leaky Relu*:

`new brain.NeuralNetwork({ activation: 'relu' })`

`new brain.NeuralNetwork({ activation: 'leaky-relu' })`

https://github.com/BrainJS/brain.js/issues/106

### Examples
- Writing a children's book using a recurrent neural network
- Simple letter detection

https://github.com/BrainJS/brain.js/tree/develop/examples



