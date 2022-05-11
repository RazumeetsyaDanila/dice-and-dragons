import { Dispatch } from "react"
import { DiceActionTypes, IDiceAction } from '../../types/diceType';

export const setDice = () => {
    return (dispatch: Dispatch<IDiceAction>) => {
        try {
            dispatch({ type: DiceActionTypes.SET_DICE_COUNT })
        } catch (e) {
            console.log("ba");
        }
    }
}

export const setRolling = () => {
    return (dispatch: Dispatch<IDiceAction>) => {
        try {
            dispatch({ type: DiceActionTypes.SET_DICE_ROLLING })
        } catch (e) {
            console.log("ba");
        }
    }
}