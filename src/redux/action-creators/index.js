
import {INC_CUSTOM, INC, DEC, RESET} from '../action-types';
import {INC_CUSTOM_2, INC_2, DEC_2, RESET_2} from '../action-types';

const incCustomAction = (payload)=>({type:INC_CUSTOM, payload})
const incAction =()=>({type:INC})
const decAction =()=>({type:DEC})
const reset =()=>({type:RESET})
const incCustomAction2 = (payload)=>({type:INC_CUSTOM_2, payload})
const incAction2 =()=>({type:INC_2})
const decAction2 =()=>({type:DEC_2})
const reset2 =()=>({type:RESET_2})

export {
    incCustomAction,
    incAction,
    decAction,
    reset,
    incCustomAction2,
    incAction2,
    decAction2,
    reset2,
}