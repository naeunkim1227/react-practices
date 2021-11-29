import React, {Component} from "react";
import MyComponent from "./MyComponent";


export default function(){
        return(
        <div id="App">
            <MyComponent 
            /*props01={'Stirng'}*/
            props02={100 }
            props03 = {true}
            props04 = { {no:1}}
            props05 = {[1,2,3,4]}
            props06 = {() => '함수'}
            props07 = {'200'}
            props08 = {false,true,true}
            props09 = {{no:1 ,name:'뽀로로' , email: 'dooly@gmso.com'}}
            />
        </div>
    
         )
}
