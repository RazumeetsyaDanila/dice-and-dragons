import { combineReducers } from "redux";
import {dicesReducer} from './diceReducer'
import {gameReducer} from './gameReducer'

export const  rootReducer = combineReducers({
    dices: dicesReducer,
    game: gameReducer
})

export type rootState = ReturnType<typeof rootReducer>