import { GameInitialState } from '../initialState';
import { IGameState, GameActionTypes, IGameAction } from '../../types/gameType';


export const gameReducer = (state = GameInitialState, action: IGameAction): IGameState => {
    switch (action.type) {
        case GameActionTypes.DRAGON_DAMAGED:
            return { ...state, dragon: {...state.dragon, currentHealth: state.dragon.currentHealth - action.payload.damage} }
        case GameActionTypes.NEXT_TURN:
            return { ...state, stepCount: ++state.stepCount }
        case GameActionTypes.NEXT_STAGE:
            return { ...state, stage: action.payload.stageName}
        case GameActionTypes.GET_COIN:
            return { ...state, dragon: {...state.dragon, wallet: state.dragon.wallet + action.payload.coins}}
        default:
            return state
    }
}
