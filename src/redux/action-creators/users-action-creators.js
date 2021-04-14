
import {ON_USERS_LOADED, ON_BAD_TO_ADD, ON_BAD_TO_REMOVE} from '../action-types';

const onUserLoaded =(payload)=>({type:ON_USERS_LOADED, payload})
const onAddToBad =(payload)=>({type:ON_BAD_TO_ADD, payload})
const onRemoveFromBad =(payload)=>({type:ON_BAD_TO_REMOVE, payload})

export {
    onUserLoaded,
    onAddToBad,
    onRemoveFromBad,
}