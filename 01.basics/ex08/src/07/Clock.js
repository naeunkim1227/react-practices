import React, { createElement } from "react";


export default function() {

    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    

    
    const htmls = "<span>" + ('0' + hours ).slice(-2)   +  " : "  +  ('0' + minutes).slice(-2) +" : " + ('0' + seconds).slice(-2) + "</span>"; 


    return(
        /*
            HTML 태그를 직접 만든 것이 위험한 이유
            HTML 태극를 동적으로 생성하여, JSX element의 특정 속성으로 추가하는 작업은 금지하고 있다.
            XSS(Cross-site-Scriping) 보호기능을 끄고, 사용할 수도 있다. 
            보안유지를 위해 html만 따로 생성 지양
        */

        <div dangerouslySetInnerHTML={ {__html: htmls} } />
         
    );
}
