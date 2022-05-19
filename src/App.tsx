import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Dice from './components/dice/Dice';
import { useActions } from './hooks/useActions';
import classes from './app.module.scss'
import { useTypedSelector } from './hooks/useTypedSelector';

function App() {
  const { setDices } = useActions()
  const { dice } = useTypedSelector(state => state.dices)

  return (
    <BrowserRouter>
      <div className={classes.container}>
        <div className={classes.dicesContainer}>
          <div className={classes.diceContainer}>
            {
              dice.map(d => <Dice diceId={d._id} key={d._id} />)
            }
          </div>
          <div className={classes.rollBtn} onClick={setDices}> ROLL</div>
        </div>


      </div>
    </BrowserRouter>
  );
}

export default App;
