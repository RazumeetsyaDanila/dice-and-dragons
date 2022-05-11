export interface IDiceState {
    count: number,
    rolling: boolean
}

export enum DiceActionTypes {
    SET_DICE_COUNT = 'SET_DICE_COUNT',
    SET_DICE_ROLLING = 'SET_DICE_ROLLING'
}

interface ISetDiceCountAction {
    type: DiceActionTypes.SET_DICE_COUNT
}

interface ISetDiceRollingAction {
    type: DiceActionTypes.SET_DICE_ROLLING
}

export type IDiceAction = ISetDiceCountAction | ISetDiceRollingAction