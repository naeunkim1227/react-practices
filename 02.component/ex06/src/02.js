import fs, { stat } from 'fs';

let state  = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

let updateOrder1 = state.order;
updateOrder1.receive = '부산시 해운대구 우동.....';
// setState({
//     order: updateOrder1;
// }) 이렇게 하기 금지

console.log(state.order, updateOrder1,  state.order === updateOrder1);

console.log("---------------------------------------")

state  = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}



let updateOrder2 = Object.assign({} , state.order, {
    receive: '부산시 해운대구 우동...국물'
});

console.log(state.order, updateOrder2,  state.order === updateOrder2);
//Object.assign을 통해 새로운 객체를 만든 것임. Object.assign은 deep clone을 하지 않는다. 
//