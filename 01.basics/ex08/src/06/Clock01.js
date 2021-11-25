import React from "react";

const date = new Date();

let hours = date.getHours();
let minutes= date.getMinutes();
let seconds = ('0' + date.getSeconds()).slice(-2);

let session = 'AM'

if(hours > 12){
    session = 'PM'
}

export default function Clock01(){
    return(
        <div>
            {hours < 10? '0' + hours : hours} : {('0' + minutes).slice(-2) } : {seconds} {session}
        </div>
    );
}