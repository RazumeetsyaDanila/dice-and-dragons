export interface IShopState {
    
}

export enum ShopActionTypes {
    RESTORE_SHOP = 'RESTORE_SHOP',
}

interface IRestoreShop {
    type: ShopActionTypes.RESTORE_SHOP
}

export type IShopAction = IRestoreShop