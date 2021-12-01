import React, {useState} from 'react';

export default function ({ begin, step }) {
    const [stateVal, setVal] = useState(begin);
    setInterval();

    return (
        <div>
            <button onClick={(e) => {
                setVal(stateVal + step);
            }}>
                <strong>+</strong>
            </button>
            {' '}
            <span>{ stateVal }</span>
            {' '}
                <button onClick={(e) => { /*- 기능 만들기 */}}>
                    <strong>-</strong>
                </button>
        </div>
    );
}