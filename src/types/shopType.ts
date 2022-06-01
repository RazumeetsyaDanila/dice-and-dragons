export interface IShopState {
    dragon: {
        levelUp: {
            available: boolean,
            count: number
        }
    },
    dices: {
        rechoice: {
            available: boolean,
            count: number
        },
        reroll: {
            available: boolean,
            count: number
        },
        double: {
            available: boolean,
            count: number
        },
    },
    knight: {

    }
}

export enum ShopActionTypes {
    RESTORE_SHOP = 'RESTORE_SHOP',
    LEVELUP_BUY = 'LEVELUP_BUY',
    REROLL_BUY = 'REROLL_BUY',
    RECHOICE_BUY = 'RECHOICE_BUY',
    DOUBLE_BUY = 'DOUBLE_BUY'
}

interface IRestoreBuy {
    type: ShopActionTypes.RESTORE_SHOP
}

interface ILevelupBuy {
    type: ShopActionTypes.LEVELUP_BUY
}

interface IRerollBuy {
    type: ShopActionTypes.REROLL_BUY
}

interface IRechoiceBuy {
    type: ShopActionTypes.RECHOICE_BUY
}

interface IDoubleBuy {
    type: ShopActionTypes.DOUBLE_BUY
}

export type IShopAction = IRestoreBuy | ILevelupBuy | IRerollBuy | IRechoiceBuy | IDoubleBuy