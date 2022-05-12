import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Dice from './components/dice/Dice';
import { useActions } from './hooks/useActions';
import classes from './app.module.scss'

function App() {
  const { setDice, unsetRolling_0, unsetRolling_1, unsetRolling_2, unsetRolling_3, unsetRolling_4, unsetRolling_5 } = useActions()
 
  return (
    <BrowserRouter>
      <div className={classes.container}>
        <div className={classes.diceContainer}>
          <Dice diceId={0} unrollFunc={unsetRolling_0} />
          <Dice diceId={1} unrollFunc={unsetRolling_1} />
          <Dice diceId={2} unrollFunc={unsetRolling_2} />
          <Dice diceId={3} unrollFunc={unsetRolling_3} />
          <Dice diceId={4} unrollFunc={unsetRolling_4} />
          <Dice diceId={5} unrollFunc={unsetRolling_5} />
        </div>
        <div className={classes.rollBtn} onClick={setDice}> ROLL</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
