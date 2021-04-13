import { INC_CUSTOM_2,
    INC_2,
    DEC_2,
    RESET_2 
} from '../action-types';

const initialState = {
counter:0
}

const reducer = (state = initialState, action)=>{

    switch (action.type){
      case INC_CUSTOM_2:{
        return {
          ...state,
          counter: state.counter+action.payload
        }
      }
      case INC_2:{
        return {
          ...state,
          counter: state.counter+1
        }
      }
      case DEC_2:{
        return {
        ...state,
        counter: state.counter-1
        }
      }
      case RESET_2:{
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