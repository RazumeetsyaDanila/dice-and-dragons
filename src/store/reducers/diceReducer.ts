import { DiceInitialState } from '../initialState';
import { IDiceAction, IDiceState, DiceActionTypes } from '../../types/diceType';

export const diceReducer = (state = DiceInitialState, action: IDiceAction): IDiceState => {
    switch(action.type){
        case DiceActionTypes.SET_DICE_COUNT:
            const count = Math.floor( Math.random() * 6 ) + 1
            return {count: count, rolling: false}
        case DiceActionTypes.SET_DICE_ROLLING:
            return {...state, rolling: true}
        default:
            return state
    }
}
