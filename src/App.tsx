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
import ChoiceBox from './components/choiceBox/ChoiceBox';
import { coinsSvg_d, choiceAttackSvg_d } from './img/svg/svgImages'

function App() {
  const { setDices } = useActions()
  const { dice, rollResult, actionType } = useTypedSelector(state => state.dices)
  const allRollingsEnd = !dice[0].rolling && !dice[1].rolling && !dice[2].rolling && !dice[3].rolling && !dice[4].rolling && !dice[5].rolling

  const [actionModal, setActionModal] = useState(false)
  const [startGameModal, setStartGameModal] = useState(true)

  const roll = (actionType: string) => {
    setDices(actionType)
    setActionModal(false)
  }

  return (
    <BrowserRouter>
      <div className={classes.container}>

        {/* Шапка (компонент) */}
        <div className={classes.header}>
          {
            (() => {
              switch (actionType) {
                case 'attack':
                  return <span>1 ход | Атака</span>
                case 'coin':
                  return <span>1 ход | Монеты</span>
                case 'life':
                  return <span>1 ход | Лечение</span>
                default:
                  return <span>1 ход</span>
              }
            })()
          }
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
              <RollAllButton setActionModal={setActionModal} />
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
            <div className={classes.heroInfo}>
              <div className={classes.walletAttackContainer}>
                <div className={classes.walletContainer}>
                  <svg width="50px" height="50px" version="1.1" viewBox="0 0 60 60" >
                    <path fill="#1d3557" d={coinsSvg_d} />
                  </svg>
                  <p>55</p>
                </div>
                <div className={classes.attackContainer}>
                  <svg width="50px" height="50px" version="1.1" viewBox="0 0 512 512" >
                    <path fill="#1d3557" d={choiceAttackSvg_d} />
                  </svg>
                  <p>10</p>
                </div>


              </div>
              <p>Повышение базового урона</p>
              <p>Перебросить кубики</p>
              <p>Перевыбрать действие</p>
              <p>Выпить лечебное зелье</p>
            </div>

            {/* Окно выбора действия */}
            <Modal visible={actionModal} setVisible={setActionModal}>
              <ChoiceBox roll={roll} />
            </Modal>

            {/* Стартовое окно */}
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



