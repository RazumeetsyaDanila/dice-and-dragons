import { DicesInitialState } from '../initialState';
import { IDiceAction, IDicesState, DiceActionTypes } from '../../types/diceType';


export const dicesReducer = (state = DicesInitialState, action: IDiceAction): IDicesState => {
    switch (action.type) {
        case DiceActionTypes.SET_DICE_COUNT:
            const id = action.payload._id
            const oldSpecial = state.dice[id].special
            const oldCount = state.dice[id].count
            const newSpecial = action.payload.special
            const newCount = action.payload.count
            const oldResultCount = state.rollResult[oldSpecial]
            const oldNewResultCount = state.rollResult[newSpecial]
            if (oldSpecial !== newSpecial){
                return { ...state, 
                    dice: state.dice.map(d => d._id === action.payload._id ? action.payload : d), 
                    rollResult: { ...state.rollResult, [oldSpecial]: oldResultCount - oldCount, [newSpecial]:  oldNewResultCount + newCount}, 
                    rollCounter: ++state.rollCounter 
                }
            }
            else return { ...state, 
                dice: state.dice.map(d => d._id === action.payload._id ? action.payload : d), 
                rollResult: { ...state.rollResult, [oldSpecial]: oldResultCount - oldCount + newCount}, 
                rollCounter: ++state.rollCounter 
            }
            
        case DiceActionTypes.SET_DICES_COUNT:
            return {
                ...state, dice: state.dice.map(d => {
                    return { ...d, rolling: true, count: action.payload.counts[d._id], special: action.payload.specials[d._id] }
                }), rollResult: action.payload.rollResult, rollCounter: ++state.rollCounter, actionType: action.payload.actionType
            }
        case DiceActionTypes.UNSET_DICE_ROLLING:
            return { ...state, dice: state.dice.map(d => d._id === action.payload ? { ...d, rolling: false } : d) }
        case DiceActionTypes.UNSET_ACTION:
            return { ...state, actionType: '', dice: DicesInitialState.dice, rollResult: DicesInitialState.rollResult}
        default:
            return state
    }
}
