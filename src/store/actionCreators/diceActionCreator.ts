import { Dispatch } from "react"
import { DiceActionTypes, IDiceAction } from '../../types/diceType';

export const setDice = (diceId: number) => {
    return (dispatch: Dispatch<IDiceAction>) => {
        const specialNames: string[] = ['attack', 'life', 'shield', 'roar', 'magic', 'coin', 'coin', 'coin', 'numeral', 'numeral', 'numeral', 'numeral']
        const newDice = {
            _id: diceId,
            count: Math.floor(Math.random() * 6) + 1,
            rolling: true,
            special: specialNames[Math.floor(Math.random() * 12)]
        }
        try {
            dispatch({ type: DiceActionTypes.SET_DICE_COUNT, payload: newDice })
        } catch (e) {
            console.log("ba");
        }
    }
}

export const setDices = () => {
    return (dispatch: Dispatch<IDiceAction>) => {
        const specialNames: string[] = ['attack', 'life', 'shield', 'roar', 'magic', 'coin', 'coin', 'coin', 'numeral', 'numeral', 'numeral', 'numeral']
        const counts: number[] = []
        for(let i = 0; i < 6; i++){
            counts.push(Math.floor(Math.random() * 6) + 1)
        }
        const specials: string[] = []
        for(let i = 0; i < 6; i++){
            specials.push(specialNames[Math.floor(Math.random() * 12)])
        }
        type rollResultType = {
            [key: string]: number
        }
        const rollResult: rollResultType = {
            life: 0,
            attack: 0,
            coin: 0,
            magic: 0,
            roar: 0,
            shield: 0,
            numeral: 0
        }
        for (let i = 0; i < 6; i++){
            rollResult[specials[i]] += counts[i]
        }
        try {
            dispatch({ type: DiceActionTypes.SET_DICES_COUNT, payload: {counts: counts, specials: specials, rollResult: rollResult} })
        } catch (e) {
            console.log("ba");
        }
    }
}

export const unsetRolling = (diceId: number) => {
    return (dispatch: Dispatch<IDiceAction>) => {
        try {
            setTimeout(() => {
                dispatch({ type: DiceActionTypes.UNSET_DICE_ROLLING, payload: diceId })
            }, 1300 + Math.floor(Math.random() * 500))
        } catch (e) {
            console.log("ba");
        }
    }
}
