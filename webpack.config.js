const path = require('path');

module.exports = {
  entry: {
    process: './src/process/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimize: true,
  },
  mode: 'production',
  target: [
    'electron-main',
    'electron-renderer',
    'electron-preload',
  ],
};
