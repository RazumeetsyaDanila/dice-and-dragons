import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import classes from './specialResult.module.scss'

const SpecialResult: React.FC = () => {
    const { dice, rollResult } = useTypedSelector(state => state.dices)
    const allRollingsEnd = !dice[0].rolling && !dice[1].rolling && !dice[2].rolling && !dice[3].rolling && !dice[4].rolling && !dice[5].rolling

    return (
        <div>
            {allRollingsEnd ?
                <div className={classes.rollResult}>
                  <p>Атака: {rollResult.attack ? <span className={classes.countSpan}>{rollResult.attack}</span> : 0}</p>
                  <p>Лечение: {rollResult.life ? <span className={classes.countSpan}>{rollResult.life}</span> : 0}</p>
                  <p>Монеты: {rollResult.coin ? <span className={classes.countSpan}>{rollResult.coin}</span> : 0}</p>
                  <p>Броня: {rollResult.shield ? <span className={classes.countSpan}>{rollResult.shield}</span> : 0}</p>
                  <p>Рёв: {rollResult.roar ? <span className={classes.countSpan}>{rollResult.roar}</span> : 0}</p>
                  <p>Магия: {rollResult.magic ? <span className={classes.countSpan}>{rollResult.magic}</span> : 0}</p>
                </div>
                :
                <div className={classes.rollResult}>
                  <p>Атака: ?</p>
                  <p>Лечение: ?</p>
                  <p>Монеты: ?</p>
                  <p>Броня: ?</p>
                  <p>Рёв: ?</p>
                  <p>Магия: ?</p>
                </div>
              }
        </div>
    );
};

export default SpecialResult;