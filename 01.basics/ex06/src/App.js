import React from "react";


const App = function(){
    //    const app = React.createElement('h1', null, 'Hello React!');

    //return app;

    //preset-react가 직접 위의 코드 처럼 변경해준다.
   
    //하나의 엘리먼트만 리턴 가능하다.
    //데이터인 경우  {}사용 해주자.
    

    
    const message = 'Hello World';
    return (
        <div>
            <h1>{ `${message}`  }</h1>
        </div>
    );
}

export {App}