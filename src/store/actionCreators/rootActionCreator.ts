import * as DiceActionCreator from './diceActionCreator'
import * as GameActionCreator from './gameActionCreator'

export default {
    ...DiceActionCreator,
    ...GameActionCreator
}