import React, {Component} from "react";
import Listitem from "./Listitem";

export default class FoodList extends Component{

    render(){

        return(
            
        <ul>
            <Listitem name="Egg" quantity="10" />
            <Listitem name="Milk" quantity="20"/>
            <Listitem name="Bread" quantity="5"/>
            <Listitem name="Carrot" quantity="15"/>
        </ul>
        )
    }
}