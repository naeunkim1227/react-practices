import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {

    const [route, setRoute] = useState('');
    //componentdidmount
    useEffect(() =>{

        //const handleHashChange = () => console.log(window.location.hash);
        //window.location.hash 가 #가 있는 부분 부터 끝까지 불러준다.
        //const handleHashChange = () => setRoute(window.location.hash);
        
        //hash값 떼네기
        const handleHashChange = () => setRoute(window.location.hash.substr(1));


        window.addEventListener('hashchange', handleHashChange);

        //unmount 코드 : 다음과 같이 작성하면 unmount코드라고 한다.
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    
    },[])


    //route값에 따라서 리턴해주는 함수를 다르게 해줄 것.
    return (() => {
        switch(route){
            case '/':
                return <Main />;
            case '/gallery':
                return <Gallery />;
            case '/guestbook':
                return <Guestbook />;
            default: 
                return null;
        }
    })();

    /*
    순서
    해시가 체인지 된다.
    substr을 이용해 자른다.A
    리턴값에 따라 컴포넌트를 리턴한다.
    */

}