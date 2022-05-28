import { combineReducers } from "redux";
import {dicesReducer} from './diceReducer'
import {gameReducer} from './gameReducer'
import { shopReducer } from './shopReducer';

export const  rootReducer = combineReducers({
    dices: dicesReducer,
    game: gameReducer,
    shop: shopReducer
})

export type rootState = ReturnType<typeof rootReducer>