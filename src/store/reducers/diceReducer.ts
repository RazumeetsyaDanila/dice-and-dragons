import { DiceInitialState } from '../initialState';
import { IDiceAction, IDiceState, DiceActionTypes } from '../../types/diceType';

export const diceReducer = (state = DiceInitialState, action: IDiceAction): IDiceState => {
    switch (action.type) {
        case DiceActionTypes.SET_DICE_COUNT:
            const count = new Array()
            for (let i = 0; i < 6; i++) {
                count.push(Math.floor(Math.random() * 6) + 1)
            }
            return { count: count, rolling: [true, true, true, true, true, true], rollCounter: ++state.rollCounter }
        case DiceActionTypes.UNSET_DICE0_ROLLING:
            return { ...state, rolling: [false, ...state.rolling.slice(1)] }
        case DiceActionTypes.UNSET_DICE1_ROLLING:
            return { ...state, rolling: [...state.rolling.slice(0, 1), false, ...state.rolling.slice(2)] }
        case DiceActionTypes.UNSET_DICE2_ROLLING:
            return { ...state, rolling: [...state.rolling.slice(0, 2), false, ...state.rolling.slice(3)] }
        case DiceActionTypes.UNSET_DICE3_ROLLING:
            return { ...state, rolling: [...state.rolling.slice(0, 3), false, ...state.rolling.slice(4)] }
        case DiceActionTypes.UNSET_DICE4_ROLLING:
            return { ...state, rolling: [...state.rolling.slice(0, 4), false, ...state.rolling.slice(5)] }
        case DiceActionTypes.UNSET_DICE5_ROLLING:
            return { ...state, rolling: [...state.rolling.slice(0, 5), false] }
        default:
            return state
    }
}
