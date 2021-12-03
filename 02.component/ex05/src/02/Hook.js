import React, { Fragment, useRef, useState, useEffect } from 'react';

export default function Hook({ color }) {
    const [boxColor, setBoxColor] = useState(null);
    const [title, setTitle] = useState('');
    const h3Ref = useRef(null);

    /**
     *   1. Alternative 01: getDerivedStateFromProps
     */
    if(boxColor !== color ) {
        setBoxColor(color);
    }

    /**
     *   2. After Rendering 함수( 상태의 변화 -> 렌더링 -> 함수)
     *   class component lifecycle(componentDidMount, componentDidUpdate)
     *  렌더링이 불려지면 무조건 불려지는 함수, 여기서 최초작업 금지....
     */
    useEffect(() => {
        console.log('After Rendering');
    });

    /**
     *  3. 어떤 특정 상태(boxColor)의 변화에 반응하는 After Rendering 함수
     *     : 관심 분리
     *      a든 b든 무조건 이걸 실행하겠다 할때 > 실행한다.
     *      혹은 경우를 설정할 수도 있다.  a일때만...b일때만... 
     */
    useEffect(() => {
        console.log('Update Title');
    }, [title]);

    /**
     *  4. Alternative 02: componentDidMount & componentWillUnmount
     * 배열을 []비움,componentDidMount에서 이벤트 등록, 타이머 등등 같은 함수를 호출할때.. 쓰는...함수...?
     * 
     */
    useEffect(() => {
        console.log('After Mount(componentDidMount)');
        return (function(){
            console.log('After Unmount(componentWillUnmount)');
        });
    }, []);

    return (
        <Fragment>
            <h3
                style={ {
                    width: 300,
                    height: 50,
                    backgroundColor: boxColor
                } }
                ref={ h3Ref } />
            <input
                type='text'
                value={ title }
                onChange={ (e) => setTitle(e.target.value) } />
        </Fragment>
    );
}