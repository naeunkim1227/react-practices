import fs, { stat } from 'fs';

let state  = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())

}
console.log(state);
const updateProducts1 = state.order.products;
updateProducts1.push({
    "no" : "s002",
    "name" : "블루양말",
    "price" : 2000,
    "amount" : 1
});


console.log(state.order.products, updateProducts1, state.order.products === updateProducts1);
//불변성이 깨진다. 

console.log("======================================================");

state  = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

const updateProducts2 = state.order.products.concat({
    "no" : "s002",
    "name" : "블루양말",
    "price" : 2000,
    "amount" : 1
});


console.log(state.order.products, updateProducts2, state.order.products === updateProducts2);
//concat을 사용할 경우 불변성이 유지가 된다.


state  = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

const updateProducts3 = ([...state.order.products, {
    "no" : "s002",
    "name" : "블루양말",
    "price" : 2000,
    "amount" : 1
}]);


console.log(state.order.products, updateProducts3, state.order.products === updateProducts3);
