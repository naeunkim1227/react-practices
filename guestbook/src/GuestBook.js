import React, {Fragment} from "react";
import Guestbook__Form from "./Guestbook_Form";
import Guestbook__List from "./Guestbook__List";
import Guestbook__DeleteForm from "./Guestbook__DeleteForm";

import data from './assets/json/data.json';

export default function(){

    console.log(data)

    return(
        <div className='GuestBook'>
            <h1>방명록</h1>
            <Guestbook__Form  />
            <Guestbook__List key="test" data= {data} />
            <Guestbook__DeleteForm />
        </div>
    
    )
}