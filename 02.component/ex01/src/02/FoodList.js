import React, {Component} from "react";
import Listitem from "./Listitem";

export default class FoodList extends Component{

    render(){

        //app.js에서 foods 데이터를 가져왔따.
        /*
        
        const components = [];

        
        const foods = this.props.foods;

        for(let i=0;i<foods.length; i++){
            components[i] = <Listitem name={foods[i].name} quantity={foods[i].quantity} />;
        }

        return(
      
        this.props.foods.forEach(function(food) {
            components.push(<Listitem name={foods.name} quantity={foods.quantity} />);
        
        });
        
        

       3.
        
        const r =  [1,2,3,4 ].map(function(e){
            return e * e;

            //함수의 실행결과를 다시 map에 넣어서 리턴한다.
        }

        

        4. 람댜로 바꾸기
        const r =  this.props.foods.map(function(food){
            return <Listitem name={food.name} quantity={food.quantity} />
        });


        
        const r =  this.props.foods.map((food) => <Listitem name={food.name} quantity={food.quantity} />);

        console.log(r);
        
        */

        return(
        <ul>
            {  this.props.foods.map((food) => <Listitem name={food.name} quantity={food.quantity} />) }
        </ul>
        )
    }
}