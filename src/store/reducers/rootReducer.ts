import { combineReducers } from "redux";
import {dicesReducer} from './diceReducer'

export const  rootReducer = combineReducers({
    // dice: diceReducer,
    dices: dicesReducer
})

export type rootState = ReturnType<typeof rootReducer>