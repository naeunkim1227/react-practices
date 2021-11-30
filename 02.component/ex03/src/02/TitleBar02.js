import React from 'react';


export default function TitelBar02() {
    
    const onClickHandler = () => {
        //react 이벤트 객체이다.
        //this.no++;
        //메소드를 줘서, 갑이 변경되면, 화면에서도 그 값이 반영되도록 한다.

        //this사용 안됨

        console.log("TitleBar01 clicked");
    }



    return (
        <h1 
        onClick = {onClickHandler}
        style={{cursor: 'pointer'}}>ex03 - Functional Event Handler(Function Component) </h1>
    )
}