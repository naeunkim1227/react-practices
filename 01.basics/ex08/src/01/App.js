import React from "react";


export default function(){
    return (
        <div>
            <h2>App01</h2>
            <p>JSX Tutorials - 특정1 : HTML과 차이점</p>
            {/* 
                1. 속성은 Camel Case                
                */
            }
            <input type="text" maxLength='10' />
            {/*
               2. Elemnent는 꼭 닫혀야한다.
               오류 ) <br>,  <hr> , <input type="text"> , <img src=''>
            */}
            <br/>
            <hr/>
            <img src="https://blog.kakaocdn.net/dn/0y4tG/btqS3aJMcrT/jFAAy39VRLfXYZUKkwUi60/img.jpg" width="200px"/>
            {/*
                3. 속성이름은 DOM API 기반이다.
                <div id='box' class='box'>
                documnet.getElementById('box').className = 'box'
            */}
            <div id="box" className="box">
                 box 입니다.
            </div>
        </div>
    )
}