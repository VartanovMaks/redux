import { ON_USERS_LOADED, ON_BAD_TO_ADD, ON_BAD_TO_REMOVE} from '../action-types';

const initialState = {
  users: [],
  badEmployees:[],
}

const reducer = (state = initialState, action)=>{

    switch (action.type){
      case ON_USERS_LOADED:{
        return {
          ...state,
          users: action.payload
        }
      }
      case ON_BAD_TO_ADD:{
        return {
          ...state,
          badEmployees: [...state.badEmployees, action.payload]
        }
      }
      case ON_BAD_TO_REMOVE:{
        return {
          ...state,
          badEmployees: state.badEmployees.filter( el => el !== action.payload )
        }
      }
      default :
      return state;
    }
}

export default reducer;