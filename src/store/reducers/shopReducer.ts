import { ShopInitialState } from '../initialState';
import { IShopAction, ShopActionTypes, IShopState } from '../../types/shopType';


export const shopReducer = (state = ShopInitialState, action: IShopAction): IShopState => {
    switch (action.type) {
        case ShopActionTypes.RESTORE_SHOP:
            return ShopInitialState
        case ShopActionTypes.DOUBLE_BUY:
            return { ...state, dices: { ...state.dices, double: {...state.dices.double, count: state.dices.double.count - 1} } }
        case ShopActionTypes.LEVELUP_BUY:
            return { ...state, dragon: { ...state.dragon, levelUp: {...state.dragon.levelUp, count: state.dragon.levelUp.count - 1} } }
        case ShopActionTypes.RECHOICE_BUY:
            return { ...state, dices: { ...state.dices, rechoice: {...state.dices.rechoice, count: state.dices.rechoice.count - 1} } }
        case ShopActionTypes.REROLL_BUY:
            return { ...state, dices: { ...state.dices, reroll: {...state.dices.reroll, count: state.dices.reroll.count - 1} } }
        default:
            return state
    }
}
