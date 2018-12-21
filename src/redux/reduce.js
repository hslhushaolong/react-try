import { ADD, DEL } from './action';
const initState = [
    {
        id: '1',
        num: '100',
        createat: '2018-09-27',
    },
    {
        id: '2',
        num: '200',
        createat: '2018-09-27',
    }
];
function addNum (state = initState, action) {
    switch(action.type){
        case ADD:
        console.log(action);
        const obj = state.filter((item) => item.id === action.id)[0];
        obj.num++;
        return Object.assign([],state, [ obj ]);
        case DEL:
        console.log(action);
        const objDel = state.filter((item) => item.id === action.id)[0];
        objDel.num--;
        return Object.assign([],state, [ objDel ]);
        default: return state;
    }
}
export {
    addNum,
}