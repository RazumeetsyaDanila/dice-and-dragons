import React, { useState, useEffect } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Dice from './components/dice/Dice';
import { useActions } from './hooks/useActions';
import classes from './app.module.scss'
import { useTypedSelector } from './hooks/useTypedSelector';
import Dragon from './img/dragons/DragonKnight1.svg';
import Dragon2 from './img/dragons/Dragon.svg';
import Knight from './img/dragons/DragonKnight2.svg';
import Death from './img/dragons/Death.svg';
import RollAllButton from './components/rollAllbutton/RollAllButton';
import SpecialResult from './components/specialResult/SpecialResult';
import Modal from './components/modal/Modal';
import ChoiceBox from './components/choiceBox/ChoiceBox';
import { coinsSvg_d, choiceAttackSvg_d, knightAttack_d } from './img/svg/svgImages'
import NextTurnButton from './components/nextTurnButton/NextTurnButton';
import DragonLifebar from './components/dragonLifebar/DragonLifebar';
import KnightLifebar from './components/knightLifebar/KnightLifebar';
import GameOver from './components/gameOver/GameOver';
import ShopModal from './components/shopModal/ShopModal';
import PurchaseButton from './components/purchaseButton/PurchaseButton';
import PurchaseOver from './components/purchaseOver/PurchaseOver';

const App: React.FC = () => {
  const { setDices, nextTurn, nextStage, getCoin, dragonDamaged, healing, knightDamaged, knightDamageUp } = useActions()
  const actions = useActions()
  const { dice, rollResult, actionType } = useTypedSelector(state => state.dices)
  const { dragon, knight, stepCount, stage } = useTypedSelector(state => state.game)
  const shop = useTypedSelector(state => state.shop)

  const [actionModal, setActionModal] = useState(false)
  const [rechoiceActionModal, setRechoiceActionModal] = useState(false)
  const [startGameModal, setStartGameModal] = useState(true)
  const [badGameOverModal, setBadGameOverModal] = useState(false)
  const [goodGameOverModal, setGoodGameOverModal] = useState(false)
  const [shopModal, setShopModal] = useState(false)

  const allRollingsEnd = !dice[0].rolling && !dice[1].rolling && !dice[2].rolling && !dice[3].rolling && !dice[4].rolling && !dice[5].rolling

  const roll = (actionType: string) => {
    setDices(actionType)
    setActionModal(false)
    nextStage('thrown')
  }

  const rechoiceAction = (actionType: string) => {
    actions.setActionType(actionType)
    setRechoiceActionModal(false)
  }

  useEffect(() => {
    setTimeout(() => {
      if (stage === 'waiting') dragonDamaged(rollResult.numeral * rollResult.attack + knight.damage)
      if (stage === 'badOver') setBadGameOverModal(true)
      if (stage === 'goodOver') setGoodGameOverModal(true)
    }, 700 + Math.floor(Math.random() * 500))
  }, [stage])

  useEffect(() => {
    if (dragon.currentHealth <= 0) nextStage('badOver')
    if (knight.currentHealth <= 0) nextStage('goodOver')
  }, [dragon.currentHealth, knight.currentHealth])

  useEffect(() => {
    if (stepCount === 5) actions.knightLevelUp(10, 20)
    if (stepCount === 7) actions.knightLevelUp(10, 20)
    if (stepCount === 9) actions.knightLevelUp(10, 20)
    if (stepCount === 12) actions.knightLevelUp(20, 30)
    if (stepCount === 15) actions.knightLevelUp(20, 50)
    if (stepCount === 17) actions.knightLevelUp(20, 50)
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
        if (knight.currentHealth <= 0) nextStage('goodOver')
        break
      default:
        break
    }
    setDices('')
    nextTurn()
    actions.restoreShop()
    if (knight.currentHealth >= 0) nextStage('waiting')
  }

  const purchase = (purchaseName: string) => {
    switch (purchaseName) {
      case 'levelup':
        if (dragon.wallet >= 30) {
          actions.dragonLevelUp(10, 20)
          actions.takeCoins(30)
          actions.lelelUpBuy()
        } break
      case 'doubleResult':
        if (dragon.wallet >= 30 && stage === 'thrown') {
          actions.doubleResult()
          actions.takeCoins(30)
          setShopModal(false)
          actions.doubleBuy()
        } break
      case 'reroll':
        if (dragon.wallet >= 15 && stage === 'thrown') {
          actions.setDices(actionType)
          actions.takeCoins(15)
          setShopModal(false)
          actions.rerollBuy()
        } break
      case 'rechoice':
        if (dragon.wallet >= 15 && stage === 'thrown') {
          setShopModal(false)
          actions.takeCoins(15)
          setRechoiceActionModal(true)
          actions.rechoiceBuy()
        } break
    }

  }

  const restart = () => {
    actions.restartGame()
    actions.restartDice()
    actions.restoreShop()
    setBadGameOverModal(false)
    setGoodGameOverModal(false)
    nextStage('waiting')
  }

  return (
    <BrowserRouter>
      <div className={classes.container}>

        {/* ?????????? (??????????????????) */}
        <div className={classes.header}>
          {
            (() => {
              switch (actionType) {
                case 'attack':
                  return <span>{stepCount} ?????? | ??????????</span>
                case 'coin':
                  return <span>{stepCount} ?????? | ????????????</span>
                case 'life':
                  return <span>{stepCount} ?????? | ??????????????</span>
                default:
                  return <span>{stepCount} ??????</span>
              }
            })()
          }
        </div>

        <div className={classes.battlefield}>
          <div className={classes.dragonCircleKnightContainer}>
            <div className={classes.dragonContainer}>
              {/* ?????????????????? ?????????????? ?????????????? */}
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
              {/* ?????????????? ???????????? ?? ?????????????????? */}
              <div className={classes.circle}>{
                (() => {
                  switch (actionType) {
                    case 'attack':
                      return <p>{allRollingsEnd ? <span className={classes.countSpanCircle}>{rollResult.numeral * rollResult.attack}</span> : <span className={classes.countSpanCircle}>?</span>}</p>
                    case 'coin':
                      return <p>{allRollingsEnd ? <span className={classes.countSpanCircle}>{rollResult.numeral * rollResult.coin}</span> : <span className={classes.countSpanCircle}>?</span>}</p>
                    case 'life':
                      return <p>{allRollingsEnd ? <span className={classes.countSpanCircle}>{rollResult.numeral * rollResult.life}</span> : <span className={classes.countSpanCircle}>?</span>}</p>
                    default:
                      return <p>{allRollingsEnd ? <span className={classes.countSpanCircle}>{rollResult.numeral}</span> : <span className={classes.countSpanCircle}>?</span>}</p>
                  }
                })()
              }
              </div>
            </div>

            <div className={classes.knightContainer}>
              {/* ?????????????????? ?????????????? ???????????? */}
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

            {
              stage === 'thrown' ?
                <p>?????????????????????? ?????????? - 5 ??????????</p>
                :
                <p>?????????????? ????????????</p>
            }
          </div>

          {/* ???????? ?? ???????????????????????????????? */}
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

                <div className={classes.knightAttackContainer}>
                  <svg width="50px" height="50px" version="1.1" viewBox="0 0 512 512" >
                    <path fill="#1d3557" d={knightAttack_d} />
                  </svg>
                  <p>{knight.damage}</p>
                </div>
              </div>
              <div className={classes.openShopBtn} onClick={() => setShopModal(true)}>??????????????</div>
            </div>

            {/* ???????? ???????????? ???????????????? */}
            <Modal visible={actionModal} setVisible={setActionModal}>
              <ChoiceBox roll={roll} />
            </Modal>

            <Modal visible={rechoiceActionModal} setVisible={setRechoiceActionModal}>
              <ChoiceBox roll={rechoiceAction} />
            </Modal>

            {/* ?????????????????? ???????? */}
            <Modal visible={startGameModal} setVisible={setStartGameModal}>
              <div className={classes.openingSpeech}>
                <p style={{ fontSize: 18 + 'px' }}>?????????? ????????????????????!</p>
                <p style={{ fontSize: 18 + 'px' }}>???? - ????????????! ???????? ????????????.</p>
                {/* <p style={{ fontSize: 12 + 'px' }}>(?????? ????????, ?????? ??????????????)</p> */}
                <div className={classes.startGamebtn} onClick={() => setStartGameModal(false)}>???????????? ????????</div>
              </div>
            </Modal>


            <GameOver visible={badGameOverModal} setVisible={setBadGameOverModal}>
              <div className={classes.badGameOverContainer}>
                <p>?????????? ????????</p>
                <img src={Death} alt="..." />
                ????, ?? ???????? ???????????? ?????? <br />
                ????????????????????, ?????????????? ?????????? ???? ?????????????? <br />
                ?????????? ???? ????????????, ?????????????? ?? ?????? <br />
                ?????? ?????????? ?????? ???? ?????????? <br />
                ???? ?????? ??????????????, ???? ?????? ????????????????...
                {/* <button onClick={restart}>??????????????</button> */}
                <div onClick={restart} className={classes.openShopBtn}>????????????</div>
              </div>
            </GameOver>

            <GameOver visible={goodGameOverModal} setVisible={setGoodGameOverModal}>
              <div className={classes.goodGameOverContainer}>
                <p>????????????!</p>
                <img src={Dragon2} alt="..." />
                ???????? ?????? ?? ?????????????? ?????????????? ?????????????? ???????????? <br />
                ?? ???? ?????????? ???????? ?????????????? ?? ?????? <br />
                ?????? ?? ?????? ???????? ???? ?????????? ???????????? ???? ????????????????????...
                <div onClick={restart} className={classes.openShopBtn}>????????????</div>
              </div>
            </GameOver>

            {/* shop */}
            <ShopModal visible={shopModal} setVisible={setShopModal} coinCount={dragon.wallet}>
              <div className={classes.shopContainer}>
                <div className={classes.shopProductDragonCategory}>
                  <p>????????????</p>
                  {
                    shop.dragon.levelUp.count ?
                      <PurchaseButton cost={30} count={shop.dragon.levelUp.count} name={"?????????????????? ????????????"} onclick={() => purchase('levelup')} />
                      :
                      <PurchaseOver />
                  }
                </div>
                <hr />
                <div className={classes.shopProductGameCategory}>
                  <p>????????????</p>
                  {
                    shop.dices.reroll.count ?
                      <PurchaseButton cost={15} count={shop.dices.reroll.count} name={"?????????????????????? ????????????"} onclick={() => purchase('reroll')} />
                      :
                      <PurchaseOver />
                  }
                  {
                    shop.dices.rechoice.count ?
                      <PurchaseButton cost={15} count={shop.dices.rechoice.count} name={"???????????? ????????????????"} onclick={() => purchase('rechoice')} />
                      :
                      <PurchaseOver />
                  }
                  {
                    shop.dices.double.count ?
                      <PurchaseButton cost={30} count={shop.dices.double.count} name={"?????????????? ??????????????????"} onclick={() => purchase('doubleResult')} />
                      :
                      <PurchaseOver />
                  }
                </div>
                <hr />
                <div className={classes.shopProductKnightCategory}>
                  <p>????????????</p>
                  {/* <div className={classes.shopProduct}></div> */}
                </div>
              </div>
            </ShopModal>

          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;



