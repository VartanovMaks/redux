import { INC_CUSTOM,
    INC,
    DEC,
    RESET 
} from '../action-types';

const initFromLs = localStorage.getItem('counter1')

const initialState = initFromLs ? JSON.parse(initFromLs): {
  counter:0,
  isAllowedToChange: true
}

const reducer = (state = initialState, action)=>{

    switch (action.type){
      case INC_CUSTOM:{
        return {
          ...state,
          counter: state.counter+action.payload
        }
      }
      case INC:{
        return {
          ...state,
          counter: state.counter+1
        }
      }
      case DEC:{
        return {
        ...state,
        counter: state.counter-1
        }
      }
      case RESET:{
        return {
          ...state,
          counter: 0
          }
      }
      default :
      return state;
    }
}

export default reducer;