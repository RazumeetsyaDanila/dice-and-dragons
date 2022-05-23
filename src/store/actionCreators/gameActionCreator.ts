import { Dispatch } from "react"
import {GameActionTypes, IGameAction } from '../../types/gameType';

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

export const takeCoinsForReroll = (coins: number) => {
    return (dispatch: Dispatch<IGameAction>) => {
        try {
            dispatch({ type: GameActionTypes.TAKE_COINS_FOR_REROLL, payload: {coins: coins}})
        } catch (e) {
            console.log("ba");
        }
    }
}

export const healing = (life: number) => {
    return (dispatch: Dispatch<IGameAction>) => {
        try {
            dispatch({ type: GameActionTypes.HEALING, payload: {life: life}})
        } catch (e) {
            console.log("ba");
        }
    }
}

export const knightDamaged = (damage: number) => {
    return (dispatch: Dispatch<IGameAction>) => {
        try {
            dispatch({ type: GameActionTypes.KNIGHT_DAMAGED, payload: {damage: damage}})
        } catch (e) {
            console.log("ba");
        }
    }
}