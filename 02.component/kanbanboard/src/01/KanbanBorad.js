import React from "react";
import cards  from './assets/json/data.json';
import './assets/css/styles.css';
import CardList from "./CardList";

export default function () {
    console.log(cards);
 
    const a = cards.filter((card) => card.status === 'ToDo');
    console.log(a);

    return (
        <div className='KanbanBoard'>
            <CardList Key="ToDo"  title={'ToDo'} cards = {cards.filter((card) => card.status === 'ToDo')}/>
            <CardList Key="Doing" title={'Doing'} cards = {cards.filter((card) => card.status === 'Doing')}/>
            <CardList Key="Done" title={'Done'} cards = {cards.filter((card) => card.status === 'Done')}/>
        </div>
    )
}