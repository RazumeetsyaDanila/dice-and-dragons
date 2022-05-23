export interface IGameState {
    dragon: {
        maxHealth: number,
        currentHealth: number,
        wallet: number,
        damage: number
    },
    knight: {
        maxHealth: number,
        currentHealth: number
    },
    stepCount: number,
    stage: string //waiting, thrown, goodEnd, badEnd
}

export enum GameActionTypes {
    DRAGON_DAMAGED = 'DRAGON_DAMAGED',
    HEAL_DAMAGE = 'HEAL_DAMAGE',
    COLLECT_COIN = 'COLLECT_COIN',
    KNIGHT_DAMAGE = 'KNIGHT_DAMAGE',
    NEXT_TURN = 'NEXT_TURN',
    NEXT_STAGE = 'NEXT_STAGE',
    GET_COIN = 'GET_COIN'
}

interface INextTurnAction {
    type: GameActionTypes.NEXT_TURN
}

interface IDragonDamageAction {
    type: GameActionTypes.DRAGON_DAMAGED,
    payload: {
        damage: number
    }
}

interface INextStageAction {
    type: GameActionTypes.NEXT_STAGE,
    payload: {
        stageName: string
    }
}

interface IGetCoinAction {
    type: GameActionTypes.GET_COIN,
    payload: {
        coins: number
    }
}



export type IGameAction = IDragonDamageAction | INextTurnAction | INextStageAction | IGetCoinAction