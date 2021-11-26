import React, {Component} from "react";
import FoodList from "./FoodList";


export default function(){
    //db에서 데이터를 가져왔다고 가정한다.
    const foods =[{
        no: 1 ,
        name: 'Bread',
        quantity: 10
    },{
        no : 2,
        name: 'Milk',
        quantity: 5
    },{
        no: 3,
        name: 'egg',
        quantity: 3
    }];

        return(
        <div id="App">
            <FoodList foods={foods}/>
        </div>
    
         )
}
