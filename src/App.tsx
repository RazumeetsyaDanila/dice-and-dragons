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
import TeachingModal from './components/teachingModal/TeachingModal';
import teachingImg1 from './img/teaching/main.jpg';
import teachingImg2 from './img/teaching/kubiki.jpg';
import teachingImg3 from './img/teaching/zdorovie.jpg';
import teachingImg4 from './img/teaching/bazoviy_uron.jpg';
import teachingImg5 from './img/teaching/moneti.jpg';
import teachingImg6 from './img/teaching/brosok.jpg';
import teachingImg7 from './img/teaching/vibor.jpg';
import teachingImg8 from './img/teaching/kubiki2.jpg';
import teachingImg9 from './img/teaching/resultat.jpg';
import teachingImg10 from './img/teaching/magazin.jpg';
import teachingImg11 from './img/teaching/final.jpg';

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
  const [teachingModal, setTeachingModal] = useState(false)
  const [teachingStep, setTeachingStep] = useState(0)
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
    const teaching = localStorage.getItem("dnd_teaching")
    teaching == null && setTeachingModal(true)
  }, [])

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
    setStartGameModal(true)
    nextStage('waiting')
  }

  const startTeaching = () => {
    setTeachingStep(0)
    setTeachingModal(true)
  }
  const teachNextStep = () => {
    setTeachingStep(teachingStep + 1)
  }
  const teachPrevStep = () => {
    setTeachingStep(teachingStep - 1)
  }
  const teachEnd = () => {
    setTeachingModal(false)
    setStartGameModal(false)
    localStorage.setItem("dnd_teaching", "true")
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
              <div className={classes.circle}>{
                (() => {
                  switch (actionType) {
                    case 'attack':
                      return <p>{allRollingsEnd ?
                        <span className={classes.countSpanCircle}>{rollResult.numeral * rollResult.attack}
                          <span className="text-[18px]">
                            +<svg width="16px" height="16px" version="1.1" viewBox="0 0 512 512" >
                              <path fill="#8b0000" d={choiceAttackSvg_d} />
                            </svg>{dragon.damage}
                          </span>
                        </span>
                        :
                        <span className={classes.countSpanCircle}>?</span>}</p>
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

            {
              stage === 'thrown' ?
                <p>Перебросить кубик - 5 монет</p>
                :
                <p>Бросьте кубики</p>
            }
          </div>

          {/* Поле с характеристиками */}
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
              <div className={classes.openShopBtn + " mt-[16px]"} onClick={() => setShopModal(true)}>Магазин</div>
            </div>

            {/* Окно выбора действия */}
            <Modal visible={actionModal} setVisible={setActionModal}>
              <ChoiceBox roll={roll} />
            </Modal>

            <Modal visible={rechoiceActionModal} setVisible={setRechoiceActionModal}>
              <ChoiceBox roll={rechoiceAction} />
            </Modal>

            {/* Стартовое окно */}
            <Modal visible={startGameModal} setVisible={setStartGameModal}>
              <div className={classes.openingSpeech}>
                {/* <p style={{ fontSize: 18 + 'px' }}>Добро пожаловать!</p>
                <p style={{ fontSize: 18 + 'px' }}>Ты - дракон! Убей рыцаря.</p> */}
                {/* <p style={{ fontSize: 12 + 'px' }}>(моя игра, мои правила)</p> */}
                <div className={classes.startGamebtn} onClick={() => setStartGameModal(false)}>Начать игру</div>
                <div className={classes.startGamebtn} onClick={startTeaching}>Обучение</div>
              </div>
            </Modal>


            <GameOver visible={badGameOverModal} setVisible={setBadGameOverModal}>
              <div className={classes.badGameOverContainer}>
                <p>Конец игры</p>
                <img src={Death} alt="..." />
                Идет по кругу тот сюжет знакомый <br />
                Играем эту пьесу опять и опять <br />
                Где каждый хочет меч вонзить в дракона <br />
                Но никто не хочет сжимать рукоять...
                {/* <button onClick={restart}>рестарт</button> */}
                <div onClick={restart} className={classes.openShopBtn + " mt-[16px]"}>Заново</div>
              </div>
            </GameOver>

            <GameOver visible={goodGameOverModal} setVisible={setGoodGameOverModal}>
              <div className={classes.goodGameOverContainer}>
                <p>Победа!</p>
                <img src={Dragon2} alt="..." />
                Тихо сел и грустно покачал головой дракон <br />
                И он видом всем намекал о том <br />
                Что и мне пора бы сдать доспех на металлолом...
                <div onClick={restart} className={classes.openShopBtn + " mt-[16px]"}>Заново</div>
              </div>
            </GameOver>


            {/* shop */}
            <ShopModal visible={shopModal} setVisible={setShopModal} coinCount={dragon.wallet}>
              <div className={classes.shopContainer}>
                <div className={classes.shopProductDragonCategory}>
                  <p>Дракон</p>
                  {
                    shop.dragon.levelUp.count ?
                      <PurchaseButton cost={30} count={shop.dragon.levelUp.count} name={"Повышение уровня"} onclick={() => purchase('levelup')} />
                      :
                      <PurchaseOver />
                  }
                </div>
                <hr />
                <div className={classes.shopProductGameCategory}>
                  <p>Кубики</p>
                  {
                    shop.dices.reroll.count ?
                      <PurchaseButton cost={15} count={shop.dices.reroll.count} name={"Перебросить кубики"} onclick={() => purchase('reroll')} />
                      :
                      <PurchaseOver />
                  }
                  {
                    shop.dices.rechoice.count ?
                      <PurchaseButton cost={15} count={shop.dices.rechoice.count} name={"Другое действие"} onclick={() => purchase('rechoice')} />
                      :
                      <PurchaseOver />
                  }
                  {
                    shop.dices.double.count ?
                      <PurchaseButton cost={30} count={shop.dices.double.count} name={"Удвоить результат"} onclick={() => purchase('doubleResult')} />
                      :
                      <PurchaseOver />
                  }
                </div>
                <hr />
                <div className={classes.shopProductKnightCategory}>
                  <p>Рыцарь</p>
                  {/* <div className={classes.shopProduct}></div> */}
                </div>
              </div>
            </ShopModal>

            <TeachingModal visible={teachingModal} setVisible={setTeachingModal}>
              <div>
                {(() => {
                  switch (teachingStep) {
                    case 0:
                      return <div>
                        <div className='w-[480px] flex justify-center'>
                          <img className='rounded-[4px] mt-[10px] w-[354px]' src={teachingImg1} alt="..." />
                        </div>
                        <p className='flex items-center text-center text-[#1D3557] w-[480px] h-[104px] pl-[5px] pr-[5px]'>Добро пожаловать! Dice'n'Dragons это игра о кубиках и драконах. И еще немного о рыцарях... Вопреки традициям, вы не будете убивать дракона. Вы будете сражаться против рыцаря. </p>
                      </div>
                    case 1:
                      return <div>
                        <div className='w-[480px] flex justify-center'>
                          <img className='border-solid border-2 border-[#1d3557] rounded-[4px] mt-[10px]' src={teachingImg2} alt="..." />
                        </div>
                        <p className='flex items-center text-center text-[#1D3557] w-[480px] h-[104px] pl-[5px] pr-[5px]'>Вам повезло, ваше оружие - игральные кости. Почти такие же, как в нардах. С помощью них, вы попытаетесь сразить несчастного рыцаря. Кстати, рыцарь тоже попытается вас сразить этими же кубиками, тут вам, конечно, не повезло.</p>
                      </div>
                    case 2:
                      return <div>
                        <div className='w-[480px] flex justify-center'>
                          <img className='border-solid border-2 border-[#1d3557] rounded-[4px] mt-[10px]' src={teachingImg3} alt="..." />
                        </div>
                        <p className='flex items-center text-center text-[#1D3557] w-[480px] h-[104px] pl-[5px] pr-[5px]'>Над вашим драконом располагается шкала здоровья и уровень. Не поверите, но над моим рыцарем это все тоже располагается. Вы можете возмутиться тем, что у рыцаря больше здоровья, чем у дракона. Вы имеете на это право.</p>
                      </div>
                    case 3:
                      return <div>
                        <div className='w-[480px] flex justify-center'>
                          <img className='border-solid border-2 border-[#1d3557] rounded-[4px] mt-[10px]' src={teachingImg4} alt="..." />
                        </div>
                        <p className='flex items-center text-center text-[#1D3557] w-[480px] h-[104px] pl-[5px] pr-[5px]'>Уровень влияет на максимальное количество здоровья и базовый урон, который отображается снизу (слева - урон дракона, справа - рыцаря). Базовый урон прибавляется к сумме урона, выпавшей на кубиках, когда вы или рыцарь совершаете атаку.</p>
                      </div>
                    case 4:
                      return <div>
                        <div className='w-[480px] flex justify-center'>
                          <img className='border-solid border-2 border-[#1d3557] rounded-[4px] mt-[10px]' src={teachingImg5} alt="..." />
                        </div>
                        <p className='flex items-center text-center text-[#1D3557] w-[480px] h-[104px] pl-[5px] pr-[5px]'>Еще, у вас будут монеты, за которые вы сможете перебрасывать кубики и усиливать свои ходы.</p>
                      </div>
                    case 5:
                      return <div>
                        <div className='w-[480px] flex justify-center'>
                          <img className='border-solid border-2 border-[#1d3557] rounded-[4px] mt-[10px]' src={teachingImg6} alt="..." />
                        </div>
                        <p className='flex items-center text-center text-[#1D3557] w-[480px] h-[104px] pl-[5px] pr-[5px]'>Каждый ход включает в себя 2 фазы. Первая фаза - бросок кубиков. Вторая фаза - усиление. Чтобы начать ход, нажмите на иконку с кубиками.</p>
                      </div>
                    case 6:
                      return <div>
                        <div className='w-[480px] flex justify-center'>
                          <img className='border-solid border-2 border-[#1d3557] rounded-[4px] mt-[10px]' src={teachingImg7} alt="..." />
                        </div>
                        <p className='flex items-center text-center text-[#1D3557] w-[480px] h-[104px] pl-[5px] pr-[5px]'>Перед броском, вам необходимо выбрать одно из трех действий, которое вы хотите совершить. Можно атаковать, полечиться или собрать монеты.</p>
                      </div>
                    case 7:
                      return <div>
                        <div className='w-[480px] flex justify-center'>
                          <img className='border-solid border-2 border-[#1d3557] rounded-[4px] mt-[10px]' src={teachingImg8} alt="..." />
                        </div>
                        <p className='flex items-center text-center text-[#1D3557] w-[480px] h-[104px] pl-[5px] pr-[5px]'>Существует 4 типа кубиков, которые могут выпасть. Вот они, слева направо: кубик монет, кубик атаки, кубик лечения и обычный кубик. Они помечаются соответствующими красными кружочками.</p>
                      </div>
                    case 8:
                      return <div>
                        <div className='w-[480px] flex justify-center'>
                          <img className='border-solid border-2 border-[#1d3557] rounded-[4px] mt-[10px]' src={teachingImg9} alt="..." />
                        </div>
                        <p className='flex items-center text-center text-[#1D3557] w-[480px] h-[104px] pl-[5px] pr-[5px]'>Количество нанесенного урона, вылеченного здоровья или собранных вами монет вычисляется путем перемножения суммы, выпавшей на обычных кубиках и суммы, выпавшей на кубиках, соответствующих вашему действию. В данном случае, вы заработали бы 65 монет.</p>
                      </div>
                    case 9:
                      return <div>
                        <div className='w-[480px] flex justify-center'>
                          <img className='border-solid border-2 border-[#1d3557] rounded-[4px] mt-[10px]' src={teachingImg10} alt="..." />
                        </div>
                        <p className='flex items-center text-center text-[#1D3557] w-[480px] h-[104px] pl-[5px] pr-[5px]'>Во время второй фазы вы можете усилить свой ход. Например, перебросить нужные кубики, или купить за монеты какое нибудь улучшение в магазине. </p>
                      </div>
                    case 10:
                      return <div>
                        <div className='w-[480px] flex justify-center'>
                          <img className='border-solid border-2 border-[#1d3557] rounded-[4px] mt-[10px]' src={teachingImg11} alt="..." />
                        </div>
                        <p className='flex items-center text-center text-[#1D3557] w-[480px] h-[104px] pl-[5px] pr-[5px]'>После того, как вы применили все усиления, вы можете закончить ход, нажав на стрелку. Затем рыцарь тоже бросит кубики и попытается вас атаковать. На этом все, удачи!</p>
                      </div>
                  }
                })()}

                <div className='flex justify-center'>
                  {
                    teachingStep > 1 && <div onClick={teachPrevStep} className={classes.openShopBtn + " mr-[20px]"}>Назад</div>
                  }
                  {
                    teachingStep == 10 && <div onClick={teachEnd} className={classes.openShopBtn}>Начать игру</div>
                  }
                  {
                    teachingStep < 10 && <div onClick={teachNextStep} className={classes.openShopBtn}>Далее</div>
                  }
                </div>
                <p className='text-center text-[#1D3557] mt-[4px]'>{teachingStep}/10</p>
              </div>

            </TeachingModal>

          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;



