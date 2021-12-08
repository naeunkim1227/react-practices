
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


#### package.json

1. cross-env NODE_ENV 환경변수 설정할 수 있다. 
2. "dev:backend": "cross-env NODE_ENV=development nodemon backend/index.js -e js,mjs,json,env --watch backend --name $npm_package_name",
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



## fetch

```javascript
    const response = await fetch('/api', {
           method: 'get',
           mode: 'cors', //no-cors, cors, same-origin* 
           credentials: 'include',   //인증에 필요한 요소, 토큰, 세션아이디 // incluse.same-origin*
           cache: 'no-cache',            // no-cache, reload, 
           headers: {
               'Content-Type' : 'application/json', //cf.application/ x-www-form-urlencoded
               'Accept' : 'application/json' //text/hrml, xml, application/json
           },
           redirect: 'follow',  //follow*,error, manual(response.url)
           referrer: '', //href로 눌러서 이동했을때, 그 전의 링크가 무엇이었는지 알수 있게 해준다.
           body: null
        }); 
        
```

#### cors란?

1. origin(출처)
   URL에서 protocol + host + port를 합친 것을 말한다.
   
   ```
   > location.origin
   < 'http://localhost:9999'
   ```
2. 같은 origin vs 다른 origin
   - fetch를 이용해 api 통신을 나갈때 , 원래 origin과 통신을 나간 origin을 브라우저가 비교한다.
   same origin이 아니면 보안상 위험때문에 error를 출력한다.

3. Same origin Policy
   - 브라우저가 동일 출처 정책(SOP)을 지켜서 다른 출처의 리소스 접근을 금지시킨다.
   - 단점 : 외부 리소스를 가져올 수 없다.
   - 장점 : XSS등과 같은 보안 취약점을 사전에 방지할 수 있다.

4. CORS(Cross Origin Resource Sharing)

   proxy를 사용해서, 

   app.js에서 fetch로 데이터를 보낼때, apiserver로 바로 보내면 SOP가 위배가 된다.
   그래서 proxy를 거쳐서 apiserver로 보낸다

   app.js > devserver > proxy > api server


mode를 cors로 설정해놓아야, 다시 응답을 돌려받는다.


##### CORS 설정을 해야할때 나는 오류

   ```
   Access to fetch at 'http://localhost:8888/api' from origin 'http://localhost:9999' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
   ```

   1) simple request
      <pre>
         JS          browser            server
            ------->         -------->
                              GEt /api
                              <-----------
                              200 ok
                              Access-Control-Allow-origin:*
                              ==============================
                              "{.............}"
      </pre>
      조건: 
      1) GET, HEAD, POST 중의 하나의 method를 쓰는 경우
      2) Accept,Accept-Language, Content-Type 등의 헤더만 사용하는 경우
      3) Content-Type 헤더에 application/x-www-urlencoded, multipart/for-data, text/palin인 경우

   2) preflight request
      <pre>
         JS               browser                server
            ---------->           ----------->
               fetch()              OPTIONS /api
                                    Access-Control-Request-Headers
                                 <----------
                                 200 OK
                                 Access-Control-Allow-Origin: 'http://localhost:9999'
                                 ----------->
                                 GEt /api
                                 <-----------
                                 200 ok
                                 Access-Control-Allow-Origin:*
                                 모든 접근에 대해 수락한다
                                 cookies: .....
                                 ==============================
                                 "{.............}"
       response <-------               
      </pre>



### credentials
include로 설정해놔야 sameorigin이 아니라도 쿠키 전송이 가능하다.
