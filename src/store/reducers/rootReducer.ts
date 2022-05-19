import { combineReducers } from "redux";
import {dicesReducer} from './diceReducer'

export const  rootReducer = combineReducers({
    dices: dicesReducer
})

export type rootState = ReturnType<typeof rootReducer>