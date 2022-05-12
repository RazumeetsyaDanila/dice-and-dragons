export interface IDiceState {
    count: number[],
    rolling: boolean[],
    rollCounter: number
}

export enum DiceActionTypes {
    SET_DICE_COUNT = 'SET_DICE_COUNT',
    UNSET_DICE0_ROLLING = 'UNSET_DICE0_ROLLING',
    UNSET_DICE1_ROLLING = 'UNSET_DICE1_ROLLING',
    UNSET_DICE2_ROLLING = 'UNSET_DICE2_ROLLING',
    UNSET_DICE3_ROLLING = 'UNSET_DICE3_ROLLING',
    UNSET_DICE4_ROLLING = 'UNSET_DICE4_ROLLING',
    UNSET_DICE5_ROLLING = 'UNSET_DICE5_ROLLING',
}

interface ISetDiceCountAction {
    type: DiceActionTypes.SET_DICE_COUNT
}

interface ISetDiceRollingAction {
    type: DiceActionTypes.UNSET_DICE0_ROLLING | DiceActionTypes.UNSET_DICE1_ROLLING | DiceActionTypes.UNSET_DICE2_ROLLING | DiceActionTypes.UNSET_DICE3_ROLLING | DiceActionTypes.UNSET_DICE4_ROLLING | DiceActionTypes.UNSET_DICE5_ROLLING
}

export type IDiceAction = ISetDiceCountAction | ISetDiceRollingAction