
## React Pracractices - Integration(개발 환경 통합)

## Configuration
1. Application(Project) Structure
   <pre>
   /app
    |--- /backend
    |       |--- /logging
    |       |       |--- index.js
    |       |--- /routes
    |       |       |--- [index.js]
    |       |       |--- authorized.js
    |       |       |--- error.js
    |       |--- /controllers
    |       |--- /models
    |       |--- /views
    |       |       |--- /error
    |       |               |--- [404.ejs]
    |       |               |--- [500.ejs]
    |       |--- /public
    |       |--- [index.js]
    |       |--- [app.config.env]    
    |--- /frontend
    |       |--- /config
    |       |       |--- babel.config.json
    |       |       |--- [webpack.config.json]
    |       |--- /public
    |       |       |--- favicon.ico
    |       |       |--- index.html
    |       |--- /src
    |       |--- /assets
    |--- /node_modules
    |--- package.json
    |--- package-lock.json
   </pre>
2. nodemon
3. webpack dev server
4. package.json
5. concurrently
6. node application

emaillist
    - 개발 통합 설정(with Node Backend)
    - backend: Fully APIs(Node Exporess기반)
    - Frontend: React(SPA)
    - AJAX: fetch 기반
    


/---emaillist

[emaillist] $npm install


cross-env NODE_ENV 환경변수 설정할 수 있다. 


"dev:backend": "cross-env NODE_ENV=development nodemon backend/index.js -e js,mjs,json,env --watch backend --name $npm_package_name",

 js,mjs,json,env 확장자 파일을 지켜보고 변경되면 재시작해라


-----------------------------------------

### 04. Data Flow(Bottom-Up)
1. 리액트 애플리케이션에서의 데이터는 컴포넌트 계층 상위->하위(Top-Down)로 props 전달이 기본 data flow 메카니즘 이다.
2. 하지만, 거의 모든 애플리케이션에서는 하위->상위(Bottom-Up)로 데이터를 전달해야 하는 경우가 반드시 있다.
3. 예제: props로 전달한 callback 함수를 사용하는 방법
   - emaillist
   scss
   :global(#root) 로 선언하면 해싱없이, 전체적으로 다 쓰겟다는 의미이다.
Reactjs code snipperts
rsc 하면 함수형
