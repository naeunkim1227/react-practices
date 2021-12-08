## React Practices - Routing

### ex01: React Router Basic I: Implemented in a Simple Way(hashchange event driven)
    localhost:9999

    localhost:9999/gallery
    <a href="/gallery">gallery</a>
    페이지 이동이 일어날때


Router 
- url 변경할때 컴포넌트를 바꾼다 . 서버에 요청하는 것이 아님

1)Hash Router
+ localhost:9999/#/gallery
+ < href="#/gallery">gallery<> 해서 페이지 이동은 없는데 컴포넌트는 가져올 수 있게 한다. 

2)Brouser Router(History API) 
+ 브라우저 라우터를 사용하면 localhost:9999/gallery다음과 같이 되도 서버에 요청x





### ex02: React Router Basic II: HTML5 history API
### ex03: React Router Basic III: HashRouter &amp; BrowserRouter
### ex04: React Router Basic V: Link VS NavLink
### ex05: Styling &amp; Semantic Markup
### ex06: Composition
### ex07: Nesting Routes
### ex08: Using useRoutes
### ex09: BrowserRouter & SSR

### Install Dependency
1. react-router: 6.0.x(2021.6 beta) : <Routes><Route>
2. react-router-dom: 6.0.x(2021.6 beta) <HashRoute><BrowserRouter>

```bash
$ npm i react-router react-router-dom
```

### Run Examples
```bash
$ npm run dev [src=01|02|03|04|05|06|..]
```

