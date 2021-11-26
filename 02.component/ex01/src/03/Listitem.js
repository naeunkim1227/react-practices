import React from "react";


export default function Listitem({name, quantity}) {

        return(
            <li>{name} : {quantity}</li>
        );
}