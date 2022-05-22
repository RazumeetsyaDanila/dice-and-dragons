export interface IDragonState {
    maxHealth: number,
    currentHealth: number,
    wallet: number,
    damage: number
}

export interface IKnightState {
    maxHealth: number,
    currentHealth: number
}

export interface IGameState {
    stepCount: number,
    stage: string //waiting, thrown,  end
}

export enum GameActionTypes {
    DRAGON_DAMAGE = 'DRAGON_DAMAGE',
    HEAL_DAMAGE = 'HEAL_DAMAGE',
    COLLECT_COIN = 'COLLECT_COIN',
    KNIGHT_DAMAGE = 'KNIGHT_DAMAGE'
}