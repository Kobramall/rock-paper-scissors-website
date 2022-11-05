import { ADD_TO_P1_SCORE, ADD_TO_P2_SCORE, CHANGE_P1_CHOICE, CHANGE_P2_CHOICE, SET_MESSAGE } from "./Action"

const intitalState = {
  p1: 0,
  p2: 0,
  message: "",
  p1Choice:"scissors",
  p2Choice:"rock"
}

export const reducer = (state = intitalState, action) => {
   switch(action.type){
      case ADD_TO_P1_SCORE :
        return{...state, p1: state.p1 + 1}
      
    case ADD_TO_P2_SCORE:
        return{...state, p2: state.p2 + 1}
    
    case CHANGE_P1_CHOICE:
        return{...state, p1Choice: action.payload}

    case CHANGE_P2_CHOICE:
        return{...state, p2Choice: action.payload}
        
    case SET_MESSAGE:
        return{...state, message:action.payload}

    default:
        return state;
  }
}