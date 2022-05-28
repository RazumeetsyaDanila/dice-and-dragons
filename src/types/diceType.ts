export interface IDicesState {
    dice: {
        _id: number,
        count: number,
        rolling: boolean,
        special: string
    }[],
    rollResult: {
        [key: string]: number
    },
    actionType: string,
    rollCounter: number
}

export enum DiceActionTypes {
    SET_DICE_COUNT = 'SET_DICE_COUNT',
    SET_DICES_COUNT = 'SET_DICES_COUNT',
    UNSET_DICE_ROLLING = 'UNSET_DICE_ROLLING',
    UNSET_ACTION = 'UNSET_ACTION',
    DOUBLE_RESULT = 'DOUBLE_RESULT',
    SET_ACTION_TYPE = 'SET_ACTION_TYPE'
}

interface ISetActionTypeAction {
    type: DiceActionTypes.SET_ACTION_TYPE,
    payload: {
        actionType: string
    }
}

interface IDoubleResult {
    type: DiceActionTypes.DOUBLE_RESULT
}

interface ISetDiceCountAction {
    type: DiceActionTypes.SET_DICE_COUNT,
    payload: {
        _id: number,
        count: number,
        rolling: boolean,
        special: string
    }
}


interface ISetDicesCountAction {
    type: DiceActionTypes.SET_DICES_COUNT,
    payload: {
        counts: number[],
        specials: string[],
        rollResult: {
            [key: string]: number
        },
        actionType: string
    }
}

interface ISetDiceRollingAction {
    type: DiceActionTypes.UNSET_DICE_ROLLING,
    payload: number
}

interface IUnsetActionAction {
    type: DiceActionTypes.UNSET_ACTION
}

export type IDiceAction = ISetDiceCountAction
    | ISetDiceRollingAction
    | ISetDicesCountAction
    | IUnsetActionAction
    | IDoubleResult
    | ISetActionTypeAction

// export interface IDiceState {
//     counts: number[],
//     rolling: boolean[],
//     rollCounter: number,
//     specials: string[]
// }