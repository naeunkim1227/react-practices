## React Practices - Basics 😜

+ ex00 : create-react-app(cra) 으로 애플리케이션 빨리 만들어 보기
+ ex01 : 전통적인 DOM API 기반의 애플리케이션
+ ex02 : 애플리케이션1 (*app.js , index.js 순서가 바뀌면 실행되지 않을 수 있음. 때문에 ex3 방식으로 변경)
+ ex03 : 애플리케이션2 : ES6 모듈 시스템(import 사용) > (*모듈이 많아지면 복잡해지고, 코드 수정이 불편해짐 > ex04에서 번들링 방식으로 변경 )
+ ex04 : 번들링 : webpack
+ ex05 : React API 기반 애플리케이션 리팩토링
+ ex06 : React JSX 기반 애플리케이션 리팩토링 : babel(transpiling)
+ ex07 : ex00 ReConfiguration
+ ex08 : JSX Tutorial

+ webpack-Practices
    - webpack 설치를 통해 모듈화 (images, js , sass,css 등...)
+ babel-practices



src (**.js, **.css, **.sass)가 bundle.js로 번들링 

js
css
sass별로 loader가 있다 > 난독화, 테스트 , 압축(Lint, test, uglfy)를 거쳐 bundle.js로 변경된다. 


webpack에서 dev서버를 지원해준다.




### 최종 설치 항목
npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass

create-react-app 이 위의 모든 항목을 자동으로 설치해준다.