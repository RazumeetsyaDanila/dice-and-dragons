import { DiceInitialState, DicesInitialState } from '../initialState';
import { IDiceAction, IDiceState, IDicesState, DiceActionTypes } from '../../types/diceType';
// import { useTypedSelector } from '../../hooks/useTypedSelector';

// const { count, rolling, rollCounter, specials } = useTypedSelector(state => state.dice)

// export const diceReducer = (state = DiceInitialState, action: IDiceAction): IDiceState => {
//     switch (action.type) {
//         case DiceActionTypes.SET_DICE_COUNT:
//             const count = new Array()
//             for (let i = 0; i < 6; i++) {
//                 count.push(Math.floor(Math.random() * 6) + 1)
//             }
//             const specialNames = new Array('attack','life','shield','roar','magic','coin')
//             const specials = new Array()
//             for (let i = 0; i < 6; i++) {
//                 const randSpec =  Math.floor(Math.random() * 6)
//                 specials.push(specialNames[randSpec])
//             }           
//             return { counts: count, rolling: [true, true, true, true, true, true], rollCounter: ++state.rollCounter, specials: specials}
//         case DiceActionTypes.UNSET_DICE_ROLLING:
//             return { ...state, rolling: [...state.rolling.slice(0, action.payload), false, ...state.rolling.slice(action.payload+1)]}
//         default:
//             return state
//     }
// }

export const dicesReducer = (state = DicesInitialState, action: IDiceAction): IDicesState => {
    switch (action.type) {
        case DiceActionTypes.SET_DICE_COUNT:
            return {...state, dice: state.dice.map(d => d._id === action.payload._id ? action.payload : d)}
        case DiceActionTypes.UNSET_DICE_ROLLING:
            return { ...state, dice: state.dice.map(d => d._id === action.payload ?  {_id: 0,
                count: 1,
                rolling: false,
                special: 'magic'} : d)}
        default:
            return state
    }
}
