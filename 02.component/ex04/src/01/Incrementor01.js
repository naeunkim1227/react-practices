import React, { Component } from 'react';


export default class extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            step: this.props.step,
            val: this.props.begin
        }
    }

    onClickButton(e){
        //this.state.value = this.state.value + this.props.step; 금지 set state 함수 사용하기
        this.setState({
            val: this.state.val + this.state.step
        })
    }


    render() {
        return (
            <div>
                <button onClick={(e) => { this.onClickButton.bind(this) }}>
                    <strong>+</strong>
                </button>
                {' '}
                <span>{this.state.val}</span>
                {' '}
                <button onClick={(e) => { /*- 기능 만들기 */}}>
                    <strong>-</strong>
                </button>
            </div>
        );
    }
}