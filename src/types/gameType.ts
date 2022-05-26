export interface IGameState {
    dragon: {
        maxHealth: number,
        currentHealth: number,
        wallet: number,
        damage: number,
        level: number
    },
    knight: {
        maxHealth: number,
        currentHealth: number,
        damage: number,
        level: number
    },
    stepCount: number,
    stage: string //waiting, thrown, goodOver, badOver
}

export enum GameActionTypes {
    DRAGON_DAMAGED = 'DRAGON_DAMAGED',
    HEALING = 'HEALING',
    COLLECT_COIN = 'COLLECT_COIN',
    KNIGHT_DAMAGED = 'KNIGHT_DAMAGED',
    NEXT_TURN = 'NEXT_TURN',
    NEXT_STAGE = 'NEXT_STAGE',
    GET_COIN = 'GET_COIN',
    TAKE_COINS = 'TAKE_COINS',
    KNIGHT_DAMAGE_UP = 'KNIGHT_DAMAGE_UP',
    DRAGON_LEVEL_UP = 'DRAGON_LEVEL_UP'
}


interface IDragonLevelUp {
    type: GameActionTypes.DRAGON_LEVEL_UP,
    payload: {
        damage: number,
        life: number
    }
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

interface IKnightDamageAction {
    type: GameActionTypes.KNIGHT_DAMAGED,
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

interface ITakeCoinsAction {
    type: GameActionTypes.TAKE_COINS,
    payload: {
        coins: number
    }
}

interface IHealingAction {
    type: GameActionTypes.HEALING,
    payload: {
        life: number
    }
}

interface IKnightDamageUp {
    type: GameActionTypes.KNIGHT_DAMAGE_UP,
    payload: {
        damageUp: number
    }
}



export type IGameAction = IDragonDamageAction
    | INextTurnAction
    | INextStageAction
    | IGetCoinAction
    | ITakeCoinsAction
    | IHealingAction
    | IKnightDamageAction
    | IKnightDamageUp
    | IDragonLevelUp