import { ShopInitialState } from '../initialState';
import { IShopAction, ShopActionTypes, IShopState } from '../../types/shopType';


export const shopReducer = (state = ShopInitialState, action: IShopAction): IShopState => {
    switch (action.type) {
        case ShopActionTypes.RESTORE_SHOP:
            return ShopInitialState
        case ShopActionTypes.DOUBLE_BUY:
            return { ...state, dices: { ...state.dices, double: false } }
        case ShopActionTypes.LEVELUP_BUY:
            return { ...state, dragon: { ...state.dragon, levelUp: false } }
        case ShopActionTypes.RECHOICE_BUY:
            return { ...state, dices: { ...state.dices, rechoice: false } }
        case ShopActionTypes.REROLL_BUY:
            return { ...state, dices: { ...state.dices, reroll: false } }
        default:
            return state
    }
}
