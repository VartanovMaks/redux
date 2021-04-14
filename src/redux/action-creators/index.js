
import {INC_CUSTOM, INC, DEC, RESET, ON_USERS_LOADED} from '../action-types';

const incCustomAction = (payload)=>({type:INC_CUSTOM, payload})
const incAction =()=>({type:INC})
const decAction =()=>({type:DEC})
const reset =()=>({type:RESET})
const onUserLoaded =(payload)=>({type:ON_USERS_LOADED, payload})

export {
    incCustomAction,
    incAction,
    decAction,
    reset,
    onUserLoaded,
}