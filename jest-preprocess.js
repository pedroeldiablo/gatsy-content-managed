const babelOptions = {
  presets: [
    'babel-preset-gatsby',
    '@babel/preset-flow',
    '@babel/preset-typescript',
  ],
}

module.exports = require('babel-jest').createTransformer(babelOptions)
