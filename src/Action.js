export const ADD_TO_P1_SCORE = 'ADD_TO_P1_SCORE'
export const ADD_TO_P2_SCORE = 'ADD_TO_P2_SCORE'
export const CHANGE_P1_CHOICE = 'CHANGE_P1_CHOICE'
export const CHANGE_P2_CHOICE = 'CHANGE_P2_CHOICE'
export const SET_MESSAGE = 'SET_MESSAGE'

export const  AddScore = (num) => {
    if(num === 0)
    return{
        type: ADD_TO_P1_SCORE}
        else{
            return {type: ADD_TO_P2_SCORE}
        }
}

export const ChangeChoice = (str) => { 
    return({type:CHANGE_P1_CHOICE, payload:str})
}

export const ChangepP2Choice = (str) => { 
    return({type:CHANGE_P2_CHOICE, payload:str})
}

export const SetMessage = (str) =>{
    return({type:SET_MESSAGE, payload:str})
}