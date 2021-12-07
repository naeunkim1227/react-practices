import React, { useEffect, useState } from "react";
import './assets/scss/App.scss';
import RegisterForm from "./RegisterForm";
import Emaillist from "./Emaillist";
import SearchBar from './SearchBar';

 import data from './assets/json/data.json'

export default function(){
    const [emails, setEmails] = useState([]); 
    const [keyword, setKeyword] = useState('');

    const notifyKeywordChanged = (keyword) => {
        setKeyword(keyword);
    }

    useEffect(async() => {
        try{
       const response = await fetch('http://localhost:8888/api', {
           method: 'get',
           mode: 'cors', //no-cors, cors, same-origin* 
           credentials: 'same-origin',   //인증에 필요한 요소, 토큰, 세션아이디 // incluse.same-origin*
           cache: 'no-cache',            // no-cache, reload, 
           headers: {
               'Content-Type' : 'application/json', //cf.application/ x-www-form-urlencoded
               'Accept' : 'application/json' //text/hrml, xml, application/json
           },
           redirect: 'follow',  //follow*,error, manual(response.url)
           referrer: '', //href로 눌러서 이동했을때, 그 전의 링크가 무엇이었는지 알수 있게 해준다.
           body: null
        }); 
        
        if(!response.ok){
            throw new Error(`${response.status} ${response.statusText}`);
        }


        const JsonResult = await response.json();

        if(JsonResult.result !== 'success'){
            throw new Error(`${JsonResult.result} ${JsonResult.message}`);
        }

        setEmails(JsonResult.data);

    }catch(err){
        console.error(err);
    }

    }, []);

    return(
        <div className={'App'}>
            <RegisterForm />
          <SearchBar keyword={keyword} callback={notifyKeywordChanged} />
          <Emaillist keyword={keyword} emails={data} />  
        </div>
    
    )
}