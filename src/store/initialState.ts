import { IDicesState } from '../types/diceType';
import { IGameState } from '../types/gameType';
import { IShopState } from '../types/shopType';

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
    actionType: '',
    rollCounter: 0
}

export const GameInitialState: IGameState = {
    dragon: {
        maxHealth: 200,
        currentHealth: 200,
        wallet: 0,
        damage: 10,
        level: 1
    },
    knight: {
        maxHealth: 500,
        currentHealth: 500,
        damage: 0,
        level: 1
    },
    stepCount: 1,
    stage: 'waiting'
}

export const ShopInitialState: IShopState = {
    
}