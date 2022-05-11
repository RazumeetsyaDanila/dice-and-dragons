import { combineReducers } from "redux";
import {diceReducer} from './diceReducer'

export const  rootReducer = combineReducers({
    dice: diceReducer    
})

export type rootState = ReturnType<typeof rootReducer>