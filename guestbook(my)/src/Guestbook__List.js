import React from "react";
import Guestbook__List__Item from "./Guestbook__List__Item";

export default function ({data}) {
    console.log(data);
    return(
        <ul className="Guestbook__List">
            
            {data.map((datas) => 
            <Guestbook__List__Item
                title = {datas.title}
                content = {datas.content}
            />) }
         </ul>

    )
}