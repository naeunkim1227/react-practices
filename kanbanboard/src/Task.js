import React from "react";
import styles from './assets/css/Task.css';


export default function({name, done}) {
    return (
        <li className={styles.Task}>
        <input type='checkbox' checked='true' />
            {name}
        <a href='#' class={styles['Task--remove']}></a>
        </li>
    )

}