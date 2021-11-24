# 01.basics > ex07
## CRA로 만든 Application을 직접 설정해서 만들어 보기

### 1.설치 

 ```
 $npm i -D webpack webpack-cli webpack-dev-server babel-loader style-loader css-loader sass-loader node-sass @babel/core @babel/cli @babel/preset-env @babel/preset-react

 $npm i react react-dom
```

설정파일
babel : babel.config.json
webpack:  webpack.config.js 

1. babel.config.json에 @babel/preset-react 추가
2.  webpack.config.js 에서 babel loader설정하기
3. package.json의 스크립트 추가하기
  "scripts": {
    "start": "npx webpack serve --progress",
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "npx webpack"
  },

