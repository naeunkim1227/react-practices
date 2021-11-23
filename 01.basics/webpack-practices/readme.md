### ex02 > webpackconfig 파일생성
### ex03 > webpackconfig 파일생성, devserver삽입
### ex04,ex05 > ex03 + loader 설정  
  
  ## 1. 설치
    $npm init -y
    $npm i -D express
    $npm i -D webpack webpack-cli

  ## 2. webpack.config.js 로 환경 설정하기

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
    npm run build ("npx webpack") 입력하면 bundle.js 생성


### ex06

import {App} from './App.js'
import './assets/css/index.css'

{} 은 모듈로 import하는 경우이고
그냥 import만 사용하여 적용할 수 있다.

  #### devtool:"eval-source-map" 
   
  - 디버깅 할때 유용하다.
  - 중요 설정임