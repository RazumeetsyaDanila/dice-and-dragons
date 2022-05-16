export interface IDiceState {
    counts: number[],
    rolling: boolean[],
    rollCounter: number,
    specials: string[]
}

export interface IDicesState {
    dice: {
        _id: number,
        count: number,
        rolling: boolean,
        special: string
    }[],
    rollCounter: number
}

export interface IHeroState {
    health: number;
    armor: number;
    physicalDamage: number;
    magicDamage: number;
    wallet: number
}



export enum DiceActionTypes {
    SET_DICE_COUNT = 'SET_DICE_COUNT',
    UNSET_DICE_ROLLING = 'UNSET_DICE_ROLLING'
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

interface ISetDiceRollingAction {
    type: DiceActionTypes.UNSET_DICE_ROLLING,
    payload: number
}

export type IDiceAction = ISetDiceCountAction | ISetDiceRollingAction