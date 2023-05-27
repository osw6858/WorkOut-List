const Dotenv = require('dotenv-webpack');

module.exports = {
  // 웹팩 구성 설정
  plugins: [
    new Dotenv()
  ]
};