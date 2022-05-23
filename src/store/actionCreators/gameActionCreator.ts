import { Dispatch } from "react"
import {GameActionTypes, IGameAction } from '../../types/gameType';
import { useTypedSelector } from '../../hooks/useTypedSelector';

// const { dice, rollResult, actionType } = useTypedSelector(state => state.dices)
// const { dragon, knight, stepCount, stage } = useTypedSelector(state => state.game)

// export const dragonDamage = () => {
//     const damage = rollResult['attack'] * rollResult['numeral']
//     return (dispatch: Dispatch<IGameAction>) => {
//         try {
//             dispatch({ type: GameActionTypes.DRAGON_DAMAGE, payload: {damage: damage} })
//         } catch (e) {
//             console.log("ba");
//         }
//     }
// }

export const nextTurn = () => {
    return (dispatch: Dispatch<IGameAction>) => {
        try {
            dispatch({ type: GameActionTypes.NEXT_TURN})
        } catch (e) {
            console.log("ba");
        }
    }
}

export const nextStage = (stageName: string) => {
    return (dispatch: Dispatch<IGameAction>) => {
        try {
            dispatch({ type: GameActionTypes.NEXT_STAGE, payload: {stageName: stageName}})
        } catch (e) {
            console.log("ba");
        }
    }
}

export const getCoin = (coins: number) => {
    return (dispatch: Dispatch<IGameAction>) => {
        try {
            dispatch({ type: GameActionTypes.GET_COIN, payload: {coins: coins}})
        } catch (e) {
            console.log("ba");
        }
    }
}

export const dragonDamaged = (damage: number) => {
    return (dispatch: Dispatch<IGameAction>) => {
        try {
            dispatch({ type: GameActionTypes.DRAGON_DAMAGED, payload: {damage: damage}})
        } catch (e) {
            console.log("ba");
        }
    }
}
