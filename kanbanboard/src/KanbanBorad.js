import React, { useState } from "react";
import cards  from './assets/json/data.json';
import CardList from "./CardList";
import styles from './assets/css/KanbanBoard.css';


export default function () {
    console.log(cards);
 
    const a = cards.filter((card) => card.status === 'ToDo');
    console.log(a);

    const [cards, setCards] = useState(data);

    return (
        <div className={styles.KanbanBoard}>
            <CardList Key="ToDo"  title={'ToDo'} cards = {cards.filter((card) => card.status === 'ToDo')}/>
            <CardList Key="Doing" title={'Doing'} cards = {cards.filter((card) => card.status === 'Doing')}/>
            <CardList Key="Done" title={'Done'} cards = {cards.filter((card) => card.status === 'Done')}/>
        </div>
    )
}


