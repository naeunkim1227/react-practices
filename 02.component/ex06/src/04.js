import fs, { stat } from 'fs';
import update from 'react-addons-update';
import { start } from 'repl';

let state  = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

let updateOrder = update(state.order, {
    //해당 패스의 값 변경1
    receive: {
        $set: '부산시 중구 영주동'
    },
    //해당 패스의 값 변경2
    payment: {
        method: {
            $set: 'Mobile'
        }
    },
    products : {
        //배열 요소 변경(인덱스로 찾아서)
        0 : {
            amount : {
                $set: 5
            }
        },
        //배열 요소 새로 추가
        $push : [{
            "no" : "s002",
            "name" : "퍼플양말",
            "price" : 2000,
            "amount" : 1
        }]

    }
});

updateOrder.payment.method = 'Mobile';

console.log(
    state.order,
    updateOrder,
    state.order === updateOrder,
    state.order.receive === updateOrder.receive,
    state.order.payment === updateOrder.payment,
    state.order.payment === updateOrder.payment,
    state.order.products === updateOrder.products
    );