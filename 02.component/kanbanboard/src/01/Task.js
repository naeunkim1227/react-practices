import React from "react";


export default function({name, done}) {
    return (
        <li class='TaskList__Task'>
        <input type='checkbox' checked='true' />
        {`ContactList Example`}
        <a href='#' class='TaskList__Task--remove'></a>
        </li>
    )

}