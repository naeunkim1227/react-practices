import React, {Component} from 'react';

export default class TitelBar01 extends Component {

    constructor(){
        super(...arguments);
       // super(arguments[0],arguments[1]);
        
       // this.no = 0;

       this.state = {
            no: 0
       }
    }

    onClickHandler(){
        //this.no++;
        //메소드를 줘서, 갑이 변경되면, 화면에서도 그 값이 반영되도록 한다.

        this.setState({
            no: this.state.no +1
        })

        console.log("TitleBar01 clicked");
    }

    render() {
        return (
            <h1 
                onClick = { this.onClickHandler.bind(this) } //bind를 해줘야 , this가 같은 것을 가르키고 있다는 걸 안다.
                style={{cursor: 'pointer'}}>
                ex03 - Functional Event Handler(class Component)
                
                {
                    //no 와 state.no 

                    this.state.no
                } 
            
            </h1>
        )
    }
}