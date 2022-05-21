import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Dice from './components/dice/Dice';
import { useActions } from './hooks/useActions';
import classes from './app.module.scss'
import { useTypedSelector } from './hooks/useTypedSelector';
import Dragon from './img/dragons/DragonKnight1.svg';
import Knight from './img/dragons/DragonKnight2.svg';
import RollAllButton from './components/rollAllbutton/RollAllButton';
import SpecialResult from './components/specialResult/SpecialResult';
import Modal from './components/modal/Modal';

function App() {
  const { setDices } = useActions()
  const { dice, rollResult } = useTypedSelector(state => state.dices)
  const allRollingsEnd = !dice[0].rolling && !dice[1].rolling && !dice[2].rolling && !dice[3].rolling && !dice[4].rolling && !dice[5].rolling

  const [actionModal, setActionModal] = useState(false)
  const [startGameModal, setStartGameModal] = useState(true)

  return (
    <BrowserRouter>
      <div className={classes.container}>

        <div className={classes.header}>
          <p>1 ход | Атака</p>
        </div>

        <div className={classes.battlefield}>
          <div className={classes.dragonCircleKnightContainer}>
            <div className={classes.dragonContainer}>
              <p>160/200</p>
              <div className={classes.dragonLifebarContainer}>
                <div className={classes.dragonLifebarFill}></div>
              </div>
              <img src={Dragon} alt="..." />
            </div>
            <div className={classes.resultAndCircleContainer}>
              <SpecialResult />
              <RollAllButton />
              {/* Счетчик броска в полукруге */}
              <div className={classes.circle}>
                <p>{allRollingsEnd ? <span className={classes.countSpanCircle}>{rollResult.numeral}</span> : <span className={classes.countSpanCircle}>?</span>}</p>
              </div>
            </div>

            <div className={classes.knightContainer}>
              <p>800/1000</p>
              <div className={classes.knightLifebarContainer}>
                <div className={classes.knightLifebarFill}></div>
              </div>
              <img src={Knight} alt="..." />
            </div>
          </div>

          <div className={classes.dicesContainer} >
            <div className={classes.diceContainer}>
              {
                dice.map(d => <Dice diceId={d._id} key={d._id} />)
              }
            </div>
          </div>

          <div className={classes.footer}>
            <Modal visible={actionModal} setVisible={setActionModal}>
              <div>
              </div>
            </Modal>

            <Modal visible={startGameModal} setVisible={setStartGameModal}>
              <div className={classes.openingSpeech}>
                <p>Добро пожаловать!</p>
                <div className={classes.startGamebtn} onClick={() => setStartGameModal(false)}>Начать игру</div>
              </div>
            </Modal>

          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
