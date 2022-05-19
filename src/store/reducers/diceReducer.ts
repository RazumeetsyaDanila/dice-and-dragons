import { DicesInitialState } from '../initialState';
import { IDiceAction, IDicesState, DiceActionTypes } from '../../types/diceType';


export const dicesReducer = (state = DicesInitialState, action: IDiceAction): IDicesState => {
    switch (action.type) {
        case DiceActionTypes.SET_DICE_COUNT:
            return { ...state, dice: state.dice.map(d => d._id === action.payload._id ? action.payload : d), rollCounter: ++state.rollCounter }
        case DiceActionTypes.SET_DICES_COUNT:
            return { ...state, dice: state.dice.map(d => {
                return {...d, rolling: true, count: action.payload.counts[d._id], special: action.payload.specials[d._id]}
            }), rollCounter: ++state.rollCounter }
        case DiceActionTypes.UNSET_DICE_ROLLING:
            return { ...state, dice: state.dice.map(d => d._id === action.payload ? { ...d, rolling: false } : d) }
        default:
            return state
    }
}
