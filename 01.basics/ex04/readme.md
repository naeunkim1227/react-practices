# 01.basics > ex04 : 애플리케이션 번들링(bundling)

1. webpack은 작게 분리된 많은 모듈(js,css,images ...등)들의 의존성을 분석해서 하나의 js파일로 묶은 도구이다.(번들링도구)
2. 하나의 js파일을 번들(bundle)이라하고 묶는 작업을 번들링(bundling)이라고 한다. 
3. 번들링은 단순히 모듈들을 하나의 파일로 묶는 작업만을 의미하지 않는다. > 빌드작업도 한다.
4. 빌드작업
    1) linting(ESLint,문법체크 - es6에 맞는지) 작업
    2) document작업(JDoc,문서화)
    3) test(Mocha, Jest)
    4) 난독화/압축(Uglyfy) 작업 (난독화(코드를 치환,변수치환),압축(개행, 탭등 제거))
    5) 번들링
5. 자바스크립트 뿐만 아니라 다양한 에셋(images, css, font)들도 모듈로 취급한다. 
6. 설치 
    $npm init -y
    $npm i -D express
    $npm i -D webpack webpack-cli
    $npx weppack --version 으로 버전 확인
    $npx webpack ./src/index.js > dist 폴더에 번들링 된다.


    webpack은 es6모듈을 지원하지 않는다. 그러므로 package.json에 type을 module로 지정하면 안된다.




설치
1. npm run build

