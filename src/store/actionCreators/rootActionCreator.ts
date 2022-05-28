import * as DiceActionCreator from './diceActionCreator'
import * as GameActionCreator from './gameActionCreator'
import * as ShopActionCreator from './shopActionCreator'

export default {
    ...DiceActionCreator,
    ...GameActionCreator,
    ...ShopActionCreator
}