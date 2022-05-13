import { IDiceState, IHeroState } from '../types/diceType';

export const DiceInitialState: IDiceState = {
    counts: [1,1,1,1,1,1],
    rolling: [false, false, false, false, false, false],
    rollCounter: 0,
    specials: ['magic','magic','magic','magic','magic','magic']
}

export const HeroInitialState: IHeroState = {
    health: 30,
    armor: 10,
    physicalDamage: 0,
    magicDamage: 0,
    wallet: 0
}