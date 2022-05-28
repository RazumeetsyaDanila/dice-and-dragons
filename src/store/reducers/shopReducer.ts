import { ShopInitialState } from '../initialState';
import { IShopAction, ShopActionTypes, IShopState } from '../../types/shopType';


export const shopReducer = (state = ShopInitialState, action: IShopAction): IShopState => {
    switch (action.type) {

        default:
            return state
    }
}
