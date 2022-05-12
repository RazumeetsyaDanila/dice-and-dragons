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

export const unsetRolling_0 = () => {
    return (dispatch: Dispatch<IDiceAction>) => {
        try {
            dispatch({ type: DiceActionTypes.UNSET_DICE0_ROLLING })
        } catch (e) {
            console.log("ba");
        }
    }
}

export const unsetRolling_1 = () => {
    return (dispatch: Dispatch<IDiceAction>) => {
        try {
            dispatch({ type: DiceActionTypes.UNSET_DICE1_ROLLING })
        } catch (e) {
            console.log("ba");
        }
    }
}

export const unsetRolling_2 = () => {
    return (dispatch: Dispatch<IDiceAction>) => {
        try {
            dispatch({ type: DiceActionTypes.UNSET_DICE2_ROLLING })
        } catch (e) {
            console.log("ba");
        }
    }
}

export const unsetRolling_3 = () => {
    return (dispatch: Dispatch<IDiceAction>) => {
        try {
            dispatch({ type: DiceActionTypes.UNSET_DICE3_ROLLING })
        } catch (e) {
            console.log("ba");
        }
    }
}

export const unsetRolling_4 = () => {
    return (dispatch: Dispatch<IDiceAction>) => {
        try {
            dispatch({ type: DiceActionTypes.UNSET_DICE4_ROLLING })
        } catch (e) {
            console.log("ba");
        }
    }
}

export const unsetRolling_5 = () => {
    return (dispatch: Dispatch<IDiceAction>) => {
        try {
            dispatch({ type: DiceActionTypes.UNSET_DICE5_ROLLING })
        } catch (e) {
            console.log("ba");
        }
    }
}