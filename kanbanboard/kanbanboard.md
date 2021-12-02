# 02. Component > kanbanboard

### 1. 칸반보드
### 2. 카드 리스트
### 3. 카드 (데이터)
### 4. 테스크 리스트
### 5. 테스크



#### 1. config 파일안에 package.json, webpack.config 파일을 넣는다.

1) package.json 수정하기

```json
  "scripts": {
    "debug": "npx webpack serve --config config/webpack.config.js --progress --mode development --env"
  },
```

2) webpack.config 수정

```javascript
  rules: [{
            test: /\.js$/i,
            exclude: /node_modules/,
            loader :'babel-loader',
            options : {
                configFile : path.resolve('config/babel.config.json')
            }

```

















    a = 'hello';
    b = 'world';
    'hello world'

    [a,b].join('');
