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

export const unsetRolling = (diceId: number) => {
    return (dispatch: Dispatch<IDiceAction>) => {
        try {
            dispatch({ type: DiceActionTypes.UNSET_DICE_ROLLING, payload: diceId })
        } catch (e) {
            console.log("ba");
        }
    }
}
