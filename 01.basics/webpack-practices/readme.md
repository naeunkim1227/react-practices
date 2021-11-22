  1. 설치
  $npm init -y
  $npm i -D express
  $npm i -D webpack webpack-cli
    

  2. webpack.config.js 로 환경 설정하기

  ex05 webpack.config.js

  ```javascript

    const path = require('path');

    module.exports = {
    mode: 'development',
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/i,
            use: ['style-loader', 'css-loader','sass-loader']
        }]
    },
    devServer: {
        // contentBase: path.resolve('public'),
        host: '0.0.0.0',
        port: 9999,
        //inline: true
        liveReload: true,
        hot: false,
        compress: true
    }
    }
    
  ```
 
    npm run build 입력 > webpack.config.js >  번들링 > bundle.js파일 생성


