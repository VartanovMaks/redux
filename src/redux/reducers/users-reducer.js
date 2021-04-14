import { ON_USERS_LOADED
} from '../action-types';

const initialState = {
  users: []
}

const reducer = (state = initialState, action)=>{

    switch (action.type){
      case ON_USERS_LOADED:{
        return {
          ...state,
          users: action.payload
        }
      }
      default :
      return state;
    }
}

export default reducer;