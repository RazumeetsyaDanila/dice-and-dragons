import { GameInitialState } from '../initialState';
import { IGameState, GameActionTypes, IGameAction } from '../../types/gameType';


export const gameReducer = (state = GameInitialState, action: IGameAction): IGameState => {
    switch (action.type) {
        case GameActionTypes.DRAGON_DAMAGED:
            return { ...state, dragon: { ...state.dragon, currentHealth: state.dragon.currentHealth - action.payload.damage } }
        case GameActionTypes.NEXT_TURN:
            return { ...state, stepCount: ++state.stepCount }
        case GameActionTypes.NEXT_STAGE:
            return { ...state, stage: action.payload.stageName }
        case GameActionTypes.GET_COIN:
            return { ...state, dragon: { ...state.dragon, wallet: state.dragon.wallet + action.payload.coins } }
        case GameActionTypes.TAKE_COINS_FOR_REROLL:
            return { ...state, dragon: { ...state.dragon, wallet: state.dragon.wallet - action.payload.coins } }
        case GameActionTypes.HEALING:
            let heal = state.dragon.currentHealth + action.payload.life
            if (heal > state.dragon.maxHealth) heal = state.dragon.maxHealth
            return { ...state, dragon: { ...state.dragon, currentHealth: heal } }
        case GameActionTypes.KNIGHT_DAMAGED:
            return { ...state, knight: { ...state.knight, currentHealth: state.knight.currentHealth - action.payload.damage } }
        default:
            return state
    }
}
