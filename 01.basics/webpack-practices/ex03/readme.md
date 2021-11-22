설치
$npm i -D webpack webpack-cli 
$npm i -D webpack-dev-server



webpack-dev-server로 서버 운영

packge.json 수정

```
  "scripts": {
    "start": "npx webpack serve --progress",
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "npx webpack"
  },

```

webpack.config.js 수정

``` javascript
const path = require('path');

module.exports = {
    mode: 'developement',
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
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