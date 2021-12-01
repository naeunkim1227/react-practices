import React, { useRef } from 'react';
import './assets/scss/App.scss';

export default function App() {
    const outterRef = useRef(null);
    const innerRef = useRef(null);

    return (
        <div
            ref= {outterRef}
            className={'App'}
            onScroll= {e => { console.log(outterRef.current.scrollTop, ':' , outterRef.current.clientHeight , ":" + innerRef.current.clientHeight) }}
            >
            <div
                ref={ innerRef }
              
                >
               
                <ul>
                    { Array.from({0:'test' , 1: 'test2' ,length: 2}, (e , i) => e).map(e =>
                        <li>
                            { `${e} 아이템  입니다.` } 
                        </li>
                    ) }
                </ul>
            </div>
        </div>
    );
}