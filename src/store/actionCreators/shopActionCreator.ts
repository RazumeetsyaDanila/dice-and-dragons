import { Dispatch } from "react"
import { ShopActionTypes, IShopAction } from '../../types/shopType';

export const doubleBuy = () => {
    return (dispatch: Dispatch<IShopAction>) => {
        try {
            dispatch({ type: ShopActionTypes.DOUBLE_BUY })
        } catch (e) {
            console.log("ba");
        }
    }
}

export const lelelUpBuy = () => {
    return (dispatch: Dispatch<IShopAction>) => {
        try {
            dispatch({ type: ShopActionTypes.LEVELUP_BUY })
        } catch (e) {
            console.log("ba");
        }
    }
}

export const rechoiceBuy = () => {
    return (dispatch: Dispatch<IShopAction>) => {
        try {
            dispatch({ type: ShopActionTypes.RECHOICE_BUY })
        } catch (e) {
            console.log("ba");
        }
    }
}

export const rerollBuy = () => {
    return (dispatch: Dispatch<IShopAction>) => {
        try {
            dispatch({ type: ShopActionTypes.REROLL_BUY })
        } catch (e) {
            console.log("ba");
        }
    }
}

export const restoreShop = () => {
    return (dispatch: Dispatch<IShopAction>) => {
        try {
            dispatch({ type: ShopActionTypes.RESTORE_SHOP })
        } catch (e) {
            console.log("ba");
        }
    }
}