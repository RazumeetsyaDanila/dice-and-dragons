import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Dice from './components/dice/Dice';
import { useActions } from './hooks/useActions';
import classes from './app.module.scss'
import { useTypedSelector } from './hooks/useTypedSelector';

function App() {
  // const { setDice, unsetRolling_0, unsetRolling_1, unsetRolling_2, unsetRolling_3, unsetRolling_4, unsetRolling_5 } = useActions()
  const { setDice, setDices, unsetRolling} = useActions()
  const { dice, rollCounter} = useTypedSelector(state => state.dices)
 
  return (
    <BrowserRouter>
      <div className={classes.container}>
        <div className={classes.diceContainer}>
          {/* <Dice diceId={0} unrollFunc={unsetRolling} />
          <Dice diceId={1} unrollFunc={unsetRolling} />
          <Dice diceId={2} unrollFunc={unsetRolling} />
          <Dice diceId={3} unrollFunc={unsetRolling} />
          <Dice diceId={4} unrollFunc={unsetRolling} />
          <Dice diceId={5} unrollFunc={unsetRolling} /> */
          dice.map(d => <Dice diceId={d._id} />)
          }
          
        </div>
        <div className={classes.rollBtn} onClick={setDices}> ROLL</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
