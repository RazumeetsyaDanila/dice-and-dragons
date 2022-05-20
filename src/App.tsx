import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Dice from './components/dice/Dice';
import { useActions } from './hooks/useActions';
import classes from './app.module.scss'
import { useTypedSelector } from './hooks/useTypedSelector';

function App() {
  const { setDices } = useActions()
  const { dice, rollResult } = useTypedSelector(state => state.dices)

  return (
    <BrowserRouter>
      <div className={classes.container}>
        {!dice[0].rolling && !dice[1].rolling && !dice[2].rolling && !dice[3].rolling && !dice[4].rolling && !dice[5].rolling ?
          <div className={classes.rollResult}>
            <p>Attack: {rollResult.attack ? <span className={classes.countSpan}>{rollResult.attack}</span> : 0}</p>
            <p>Life: {rollResult.life ? <span className={classes.countSpan}>{rollResult.life}</span> : 0}</p>
            <p>Coin: {rollResult.coin ? <span className={classes.countSpan}>{rollResult.coin}</span> : 0}</p>
            <p>Shield: {rollResult.shield ? <span className={classes.countSpan}>{rollResult.shield}</span> : 0}</p>
            <p>Roar: {rollResult.roar ? <span className={classes.countSpan}>{rollResult.roar}</span> : 0}</p>
            <p>Magic: {rollResult.magic ? <span className={classes.countSpan}>{rollResult.magic}</span> : 0}</p>
            <p>Numeral: {rollResult.numeral ? <span className={classes.countSpan}>{rollResult.numeral}</span> : 0}</p>
          </div>
          :
          <div className={classes.rollResult}>
            <p>Attack: ?</p>
            <p>Life: ?</p>
            <p>Coin: ?</p>
            <p>Shield: ?</p>
            <p>Roar: ?</p>
            <p>Magic: ?</p>
            <p>Numeral: ?</p>
          </div>
        }

        <div className={classes.dicesContainer}>
          <div className={classes.diceContainer}>
            {
              dice.map(d => <Dice diceId={d._id} key={d._id} />)
            }
          </div>
          <div className={classes.rollBtn} onClick={setDices}> ROLL ALL </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
