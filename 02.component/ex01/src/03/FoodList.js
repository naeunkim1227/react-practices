import React from "react";
import Listitem from "./Listitem";

export default function FoodList({foods}){
        return(
        <ul>
            {  foods.map((food) => <Listitem key={food.no} name={food.name} quantity={food.quantity} />) }
        </ul>
        )
    }
