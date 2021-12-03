import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor() {
        super(...arguments);
    }

    //useEffect사용하고,setInterval사용하고, am/pm의 경우 나눠주고
    //class 에서는 setInterval 사용하면 되고 함수는 다른것을 사용해야함

    render() {
        return (
            <div className='clock-display'>
                <h2>ex05 - Component LifeCycle Practice</h2>
                    <Clock hours={'03'} minutes={'42'} seconds={'55'} session={'pm'}/>
            </div>
        );
    }
}