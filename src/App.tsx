import React, { useState, useEffect } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Dice from './components/dice/Dice';
import { useActions } from './hooks/useActions';
import classes from './app.module.scss'
import { useTypedSelector } from './hooks/useTypedSelector';
import Dragon from './img/dragons/DragonKnight1.svg';
import Knight from './img/dragons/DragonKnight2.svg';
import Death from './img/dragons/Death.svg';
import RollAllButton from './components/rollAllbutton/RollAllButton';
import SpecialResult from './components/specialResult/SpecialResult';
import Modal from './components/modal/Modal';
import ChoiceBox from './components/choiceBox/ChoiceBox';
import { coinsSvg_d, choiceAttackSvg_d } from './img/svg/svgImages'
import NextTurnButton from './components/nextTurnButton/NextTurnButton';
import DragonLifebar from './components/dragonLifebar/DragonLifebar';
import KnightLifebar from './components/knightLifebar/KnightLifebar';
import GameOver from './components/gameOver/GameOver';

function App() {
  const { setDices, nextTurn, nextStage, getCoin, dragonDamaged, healing, knightDamaged, knightDamageUp } = useActions()
  const { dice, rollResult, actionType } = useTypedSelector(state => state.dices)
  const { dragon, knight, stepCount, stage } = useTypedSelector(state => state.game)
  const allRollingsEnd = !dice[0].rolling && !dice[1].rolling && !dice[2].rolling && !dice[3].rolling && !dice[4].rolling && !dice[5].rolling

  const [actionModal, setActionModal] = useState(false)
  const [startGameModal, setStartGameModal] = useState(true)
  const [badGameOverModal, setBadGameOverModal] = useState(false)
  const [goodGameOverModal, setGoodGameOverModal] = useState(false)

  const roll = (actionType: string) => {
    setDices(actionType)
    setActionModal(false)
    nextStage('thrown')
  }

  useEffect(() => {
    setTimeout(() => {
      if (stage === 'waiting') dragonDamaged(rollResult.numeral * rollResult.attack + knight.damage)
      if(stage === 'badOver') setBadGameOverModal(true)
      if(stage === 'goodOver') setGoodGameOverModal(true)
    }, 1000 + Math.floor(Math.random() * 500))
  }, [stage])

  useEffect(() => {
    if(dragon.currentHealth <= 0) nextStage('badOver')
    if(knight.currentHealth <= 0) nextStage('goodOver')
  }, [dragon.currentHealth, knight.currentHealth])

  useEffect(() => {
    if(stepCount === 3) knightDamageUp(10)
    if(stepCount === 7) knightDamageUp(20)
    if(stepCount === 10) knightDamageUp(30)
  }, [stepCount])

  const acceptRoll = () => {
    switch (actionType) {
      case 'coin':
        getCoin(rollResult.coin * rollResult.numeral)
        break
      case 'life':
        healing(rollResult.life * rollResult.numeral)
        break
      case 'attack':
        knightDamaged(rollResult.attack * rollResult.numeral + dragon.damage)
        break
      default:
        break
    }
    setDices('')
    nextTurn()
    nextStage('waiting')

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
                  return <span>{stepCount} ход | Атака</span>
                case 'coin':
                  return <span>{stepCount} ход | Монеты</span>
                case 'life':
                  return <span>{stepCount} ход | Лечение</span>
                default:
                  return <span>{stepCount} ход</span>
              }
            })()
          }
        </div>

        <div className={classes.battlefield}>
          <div className={classes.dragonCircleKnightContainer}>
            <div className={classes.dragonContainer}>
              {/* Компонент лайфбар дракона */}
              <DragonLifebar dragon={dragon} allRollingsEnd={allRollingsEnd} rollResult={rollResult} stage={stage} />
              <img src={Dragon} alt="..." />
            </div>
            <div className={classes.resultAndCircleContainer}>
              <SpecialResult />
              {
                (() => {
                  if (stage === "waiting" || stage === "badOver" || stage === "goodOver") 
                    return <RollAllButton setActionModal={setActionModal} />
                  if (!allRollingsEnd) return <div className={classes.plugRollbtn}></div>
                  if (stage === "thrown" && allRollingsEnd) return <NextTurnButton acceptRoll={acceptRoll} />
                })()
              }
              {/* Счетчик броска в полукруге */}
              <div className={classes.circle}>
                <p>{allRollingsEnd ? <span className={classes.countSpanCircle}>{rollResult.numeral}</span> : <span className={classes.countSpanCircle}>?</span>}</p>
              </div>
            </div>

            <div className={classes.knightContainer}>
              {/* Компонент лайфбар рыцаря */}
              <KnightLifebar knight={knight} />
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
                  <p>{dragon.wallet}</p>
                </div>
                <div className={classes.attackContainer}>
                  <svg width="50px" height="50px" version="1.1" viewBox="0 0 512 512" >
                    <path fill="#1d3557" d={choiceAttackSvg_d} />
                  </svg>
                  <p>{dragon.damage}</p>
                </div>


              </div>
              <p>Повышение базового урона</p>
              <p>Перебросить кубики</p>
              <p>Перевыбрать действие</p>
              <p>Выпить лечебное зелье</p>
              <p>Перебросить кубик - 5 монет</p>
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


            <GameOver visible={badGameOverModal} setVisible={setBadGameOverModal}>
              <div className={classes.badGameOverContainer}>
                <p>Конец игры</p>
                <img src={Death} alt="..." />
                Тихо сел и грустно покачал головой дракон <br />
                И он видом всем намекал о том <br />
                Что и мне пора бы сдать доспех на металлолом...
              </div>
            </GameOver>

            <GameOver visible={goodGameOverModal} setVisible={setGoodGameOverModal}>
              <div className={classes.goodGameOverContainer}>
                <p>Победа!</p>
                <img src={Death} alt="..." />
                Тихо сел и грустно покачал головой дракон <br />
                И он видом всем намекал о том <br />
                Что и мне пора бы сдать доспех на металлолом...
              </div>
            </GameOver>

          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;



