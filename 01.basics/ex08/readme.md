# 01.basics > ex08
## JSX Tutorial


#### 01. 특징1 : HTML과의 차이점
#### 02. 특징2 : Single Root
#### 03. JSX 함수 컴포넌트 만들기
#### 04. Pure React(React API)로 컴포넌트 작성
#### 05. 클래스 컴포넌트 만들기
#### 06. 특징3 : JSX 표현식 표기법 {expression} 과 문제점
#### 07. 특징4: 공백
#### 08. Dynamic HTML Rendering
#### 09. Comment



### *설치 

 ```
 $npm i -D webpack webpack-cli webpack-dev-server babel-loader style-loader css-loader sass-loader node-sass @babel/core @babel/cli @babel/preset-env @babel/preset-react

 $npm i react react-dom
```
#### *설정파일
    babel : babel.config.json
    webpack:  webpack.config.js 

####  1. babel.config.json
####  2.  webpack.config.js 변경
      entry: path.resolve('src/${env.src}/index.js'),


####  3. package.json의 스크립트 추가하기

    "start": "npx webpack serve --progress --mode development --env"

여러파일로 나뉘어져 있으므로 설정파일을 변경해주었다.


실행
npm run debug src={01}



-----

JSX 특징

1. 속성은 {} Camel Case로 설정한다. 주석도 {/* */} 다음와 같이 사용
2. Element는 꼭 닫혀야 한다. 오류) "<br> , <hr> , <input type="text"> , <img src=''>"
3. 속성이름은 DOM API 기반이다.
4. 리액트 컴포넌트는 단일 루트 노드만 렌더링 할 수 있다.      오류)<h2></h2> <p></p>
5. 공백은 표현식 { ' ' }  다음과 같이 사용한다.
6. JSX는 HTML이 아니다 <!-- --> 주석은 사용할 수 없다.
7. 주석 사용 "<div /*comment02: 여기서도 다중행 주석이 가능하지만 비추천 */ >"  


Fragment

Fragment를 통해 단일 노드로 만들어 줄 수 있다. 원래 태그하나만 전달 가능한데, Fragment로 묶어주면 하나인척이 가능해서, 여러 노드 전달 할 수 있다

