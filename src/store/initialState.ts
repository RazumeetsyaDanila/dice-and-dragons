import { IDiceState } from '../types/diceType';

export const DiceInitialState: IDiceState = {
    count: [1,1,1,1,1,1],
    rolling: [false, false, false, false, false, false],
    rollCounter: 0
}