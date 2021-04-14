
import {INC_CUSTOM, INC, DEC, RESET, ON_USERS_LOADED, ON_BAD_TO_ADD, ON_BAD_TO_REMOVE} from '../action-types';

const incCustomAction = (payload)=>({type:INC_CUSTOM, payload})
const incAction =()=>({type:INC})
const decAction =()=>({type:DEC})
const reset =()=>({type:RESET})
const onUserLoaded =(payload)=>({type:ON_USERS_LOADED, payload})
const onAddToBad =(payload)=>({type:ON_BAD_TO_ADD, payload})
const onRemoveFromBad =(payload)=>({type:ON_BAD_TO_REMOVE, payload})

export {
    incCustomAction,
    incAction,
    decAction,
    reset,
    onUserLoaded,
    onAddToBad,
    onRemoveFromBad,
}