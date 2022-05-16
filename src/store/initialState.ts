import { IDiceState, IHeroState, IDicesState } from '../types/diceType';

export const DiceInitialState: IDiceState = {
    counts: [1, 1, 1, 1, 1, 1],
    rolling: [false, false, false, false, false, false],
    rollCounter: 0,
    specials: ['magic', 'magic', 'magic', 'magic', 'magic', 'magic']
}

export const DicesInitialState: IDicesState = {
    dice: [{
        _id: 0,
        count: 1,
        rolling: false,
        special: 'magic'
    },
    {
        _id: 1,
        count: 1,
        rolling: false,
        special: 'magic'
    },
    {
        _id: 2,
        count: 1,
        rolling: false,
        special: 'magic'
    },
    {
        _id: 3,
        count: 1,
        rolling: false,
        special: 'magic'
    },
    {
        _id: 4,
        count: 1,
        rolling: false,
        special: 'magic'
    },
    {
        _id: 5,
        count: 1,
        rolling: false,
        special: 'magic'
    }
    ],
    rollCounter: 0
}

export const HeroInitialState: IHeroState = {
    health: 30,
    armor: 10,
    physicalDamage: 0,
    magicDamage: 0,
    wallet: 0
}