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
        special: 'numeral'
    },
    {
        _id: 1,
        count: 2,
        rolling: false,
        special: 'numeral'
    },
    {
        _id: 2,
        count: 3,
        rolling: false,
        special: 'numeral'
    },
    {
        _id: 3,
        count: 4,
        rolling: false,
        special: 'numeral'
    },
    {
        _id: 4,
        count: 5,
        rolling: false,
        special: 'numeral'
    },
    {
        _id: 5,
        count: 6,
        rolling: false,
        special: 'numeral'
    }
    ],
    rollResult: {
        life: 0,
        attack: 0,
        coin: 0,
        magic: 0,
        roar: 0,
        shield: 0,
        numeral: 21
    },
    rollCounter: 0
}

export const HeroInitialState: IHeroState = {
    health: 30,
    armor: 10,
    physicalDamage: 0,
    magicDamage: 0,
    wallet: 0
}