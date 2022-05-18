import React, { useEffect } from 'react';
import classes from './dice.module.scss';
import { Dices, SpecialDices } from '../../dices';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

interface IDiceProps {
    diceId: number,
    // unrollFunc: any,
    // setDiceFunc: any
}

const Dice: React.FC<IDiceProps> = (props) => {
    // const { counts, rolling, rollCounter, specials } = useTypedSelector(state => state.dice)
    const { dice, rollCounter } = useTypedSelector(state => state.dices)
    // const { diceId, unrollFunc, setDiceFunc } = props
    const { diceId } = props
    const { setDice, unsetRolling } = useActions()

    useEffect(() => {
        unsetRolling(diceId)
    }, [rollCounter])

    const style = {
        height: 100+"px",
         width: 100+"px"
      };

    return (
        <div className={classes.container}>

            { // вывод картинки кубика в зависимости от выпавшего значения
                (() => {
                    if (dice[diceId].rolling) return <img src={Dices.roll} alt="" width="70" height="70" />
                    switch (dice[diceId].count) {
                        case 1:
                            switch (dice[diceId].special) {
                                case 'attack':
                                    // return <img src={SpecialDices.attack1} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.attack1Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g transform="translate(173,160)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M128 58c-32 0-64 16-64 37.838C64 154 96 142 96 142l-6 24h76l-6-24s32 12 32-52c0-16-32-32-64-32zm-26 38a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm52 0a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm-26 34l10 26h-20l10-26zm-28 51.002v17.996h56v-17.996h-56z"></path>
                                        </g>
                                    </g>
                                </svg>
                                case 'coin':
                                    // return <img src={SpecialDices.coin1} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.coin1Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(173,160)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M103 63.52c-11.5 0-23 5-23 15 0 19.97 46 19.97 46 0 0-10-11.5-15-23-15zm50 35.78c-11.5 0-23 5-23 15 0 20 46 20 46 0 0-10-11.5-15-23-15zm-73 7.1v5.1c0 12.7 18.47 17.3 32 13.9v-11.1c0-1.2.1-2.4.2-3.6-10.9 1.8-22.76.4-32.2-4.3zm0 33v5.1c0 12.7 18.47 17.3 32 13.9v-14.6c-10.9 1.7-22.61.3-32-4.4zm50 2.8v5.1c0 20 46 20 46 0v-5.1c-13.7 6.8-32.3 6.8-46 0zm-50 30.2v2.1c0 13.3 20.2 17.7 33.8 13.4-1.2-3.2-1.8-6.7-1.8-10.6v-.5c-10.9 1.7-22.61.3-32-4.4zm50 2.8v2.1c0 20 46 20 46 0v-2.1c-13.7 6.8-32.3 6.8-46 0z"></path>
                                        </g>
                                    </g>
                                </svg>
                                case 'life':
                                    // return <img src={SpecialDices.life1} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.life1Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g transform="translate(173,160)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M128 204c16-24 68-78 68-94 0-24-20-39.824-36-40-16 0-32 10-32 30 0-20-16-30-32-30-16-.176-36 16-36 40 0 16 52 70 68 94z"></path>
                                        </g>
                                    </g>
                                </svg>
                                case 'magic':
                                    // return <img src={SpecialDices.magic1} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                return <svg  onClick={() => setDice(diceId)} className={classes.magic1Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g   transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g transform="translate(173,160)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M99.016 83.18c0 27.973 28.984 32.635 28.984 55.946 0 9.325-9.661 23.312-24.153 23.312-14.492 0-24.153-13.987-14.492-37.298-14.491 9.324-19.322 18.649-19.322 27.973 0 23.312 24.153 46.623 57.967 46.623 33.813 0 57.966-13.987 57.966-41.96.216-41.378-49.4-55.2-62.797-74.597-9.66-13.987-4.83-23.311 4.83-32.636-19.321 4.663-28.983 17.717-28.983 32.636z"></path>
                                        </g>
                                    </g>
                                </svg>
                                case 'roar':
                                    // return <img src={SpecialDices.roar1} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.roar1Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(173,160)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M145.2 58.45c-8.3 12.4-10.3 22.35 2.5 21.1 10.4-1.02 7.2-10.11-2.5-21.1zm-38.3.55c-6.7 13.14-7.73 23.5 3.7 21.69 9.3-1.45 5.6-10.72-3.7-21.69zm69.7 17.45c-12.8 15.11-11.2 26.75-.4 27.95 11.6.3 11.8-12.14.4-27.95zm-99.87 4.9C68.85 95.5 68.37 106 79.88 105.2c14.04-1 8.37-11.54-3.15-23.85zm68.27 4.9c-17.5.72-15.7 37.15.8 36.55 16.3-.6 16.3-37.25-.8-36.55zm-33.6.59h-.7c-17.48 1.5-13.91 37.96 2.6 36.46 16.2-1.4 14.4-36.81-1.9-36.49zM85.34 112.9c-.52 0-.94.1-1.47.1-17.33 2.2-11.98 38.4 4.41 36.4 15.72-2 12.82-36.3-2.94-36.5zm87.36.5c-17.5-.4-18.3 36.2-1.6 36.5 16.3.3 18.8-36.2 1.6-36.5zm-45.4 21.1c-17.9.4-4.1 18.9-35.65 29.6-24.49 8.3-9.67 33.2 11.35 33.4 11.6.1 15.6-9 25-9 10.7.1 11.5 8.2 27.1 8.2 20.1.1 31.6-25 8.8-33.6-29.1-10.9-16.9-28.4-35.7-28.6z"></path>
                                        </g>
                                    </g>
                                </svg>
                                case 'shield':
                                    // return <img src={SpecialDices.shield1} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.shield1Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(173,160)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M64 94l64-38 64 38c0 32-48 108-64 108-16 .25-64-76-64-108z"></path>
                                        </g>
                                    </g>
                                </svg>
                            }
                            break
                        case 2:
                            switch (dice[diceId].special) {
                                case 'attack':
                                    // return <img src={SpecialDices.attack2} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.attack2Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm-268 268A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(301,32)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M128 58c-32 0-64 16-64 37.838C64 154 96 142 96 142l-6 24h76l-6-24s32 12 32-52c0-16-32-32-64-32zm-26 38a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm52 0a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm-26 34l10 26h-20l10-26zm-28 51.002v17.996h56v-17.996h-56z"></path>
                                        </g>
                                    </g>
                                </svg>
                                case 'coin':
                                    // return <img src={SpecialDices.coin2} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.coin2Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm-268 268A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(300,33)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M103 63.52c-11.5 0-23 5-23 15 0 19.97 46 19.97 46 0 0-10-11.5-15-23-15zm50 35.78c-11.5 0-23 5-23 15 0 20 46 20 46 0 0-10-11.5-15-23-15zm-73 7.1v5.1c0 12.7 18.47 17.3 32 13.9v-11.1c0-1.2.1-2.4.2-3.6-10.9 1.8-22.76.4-32.2-4.3zm0 33v5.1c0 12.7 18.47 17.3 32 13.9v-14.6c-10.9 1.7-22.61.3-32-4.4zm50 2.8v5.1c0 20 46 20 46 0v-5.1c-13.7 6.8-32.3 6.8-46 0zm-50 30.2v2.1c0 13.3 20.2 17.7 33.8 13.4-1.2-3.2-1.8-6.7-1.8-10.6v-.5c-10.9 1.7-22.61.3-32-4.4zm50 2.8v2.1c0 20 46 20 46 0v-2.1c-13.7 6.8-32.3 6.8-46 0z"></path>
                                        </g>
                                    </g>
                                </svg>
                                case 'life':
                                    // return <img src={SpecialDices.life2} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.life2Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm-268 268A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(301,32)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M128 204c16-24 68-78 68-94 0-24-20-39.824-36-40-16 0-32 10-32 30 0-20-16-30-32-30-16-.176-36 16-36 40 0 16 52 70 68 94z"></path>
                                        </g>
                                    </g>
                                </svg>
                                case 'magic':
                                    // return <img src={SpecialDices.magic2} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.magic2Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm-268 268A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(301,32)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M99.016 83.18c0 27.973 28.984 32.635 28.984 55.946 0 9.325-9.661 23.312-24.153 23.312-14.492 0-24.153-13.987-14.492-37.298-14.491 9.324-19.322 18.649-19.322 27.973 0 23.312 24.153 46.623 57.967 46.623 33.813 0 57.966-13.987 57.966-41.96.216-41.378-49.4-55.2-62.797-74.597-9.66-13.987-4.83-23.311 4.83-32.636-19.321 4.663-28.983 17.717-28.983 32.636z"></path>
                                        </g>
                                    </g>
                                </svg>
                                case 'roar':
                                    // return <img src={SpecialDices.roar2} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.roar2Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm-268 268A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(301,32)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M145.2 58.45c-8.3 12.4-10.3 22.35 2.5 21.1 10.4-1.02 7.2-10.11-2.5-21.1zm-38.3.55c-6.7 13.14-7.73 23.5 3.7 21.69 9.3-1.45 5.6-10.72-3.7-21.69zm69.7 17.45c-12.8 15.11-11.2 26.75-.4 27.95 11.6.3 11.8-12.14.4-27.95zm-99.87 4.9C68.85 95.5 68.37 106 79.88 105.2c14.04-1 8.37-11.54-3.15-23.85zm68.27 4.9c-17.5.72-15.7 37.15.8 36.55 16.3-.6 16.3-37.25-.8-36.55zm-33.6.59h-.7c-17.48 1.5-13.91 37.96 2.6 36.46 16.2-1.4 14.4-36.81-1.9-36.49zM85.34 112.9c-.52 0-.94.1-1.47.1-17.33 2.2-11.98 38.4 4.41 36.4 15.72-2 12.82-36.3-2.94-36.5zm87.36.5c-17.5-.4-18.3 36.2-1.6 36.5 16.3.3 18.8-36.2 1.6-36.5zm-45.4 21.1c-17.9.4-4.1 18.9-35.65 29.6-24.49 8.3-9.67 33.2 11.35 33.4 11.6.1 15.6-9 25-9 10.7.1 11.5 8.2 27.1 8.2 20.1.1 31.6-25 8.8-33.6-29.1-10.9-16.9-28.4-35.7-28.6z"></path>
                                        </g>
                                    </g>
                                </svg>
                                case 'shield':
                                    // return <img src={SpecialDices.shield2} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.shield2Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm-268 268A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(301,32)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M64 94l64-38 64 38c0 32-48 108-64 108-16 .25-64-76-64-108z"></path>
                                        </g>
                                    </g>
                                </svg>
                            }
                            break
                        case 3:
                            switch (dice[diceId].special) {
                                case 'attack':
                                    // return <img src={SpecialDices.attack3} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.attack3Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(301,32)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M128 58c-32 0-64 16-64 37.838C64 154 96 142 96 142l-6 24h76l-6-24s32 12 32-52c0-16-32-32-64-32zm-26 38a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm52 0a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm-26 34l10 26h-20l10-26zm-28 51.002v17.996h56v-17.996h-56z"></path>
                                        </g>
                                    </g>
                                </svg>
                                case 'coin':
                                    // return <img src={SpecialDices.coin3} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.coin3Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(301,32)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M103 63.52c-11.5 0-23 5-23 15 0 19.97 46 19.97 46 0 0-10-11.5-15-23-15zm50 35.78c-11.5 0-23 5-23 15 0 20 46 20 46 0 0-10-11.5-15-23-15zm-73 7.1v5.1c0 12.7 18.47 17.3 32 13.9v-11.1c0-1.2.1-2.4.2-3.6-10.9 1.8-22.76.4-32.2-4.3zm0 33v5.1c0 12.7 18.47 17.3 32 13.9v-14.6c-10.9 1.7-22.61.3-32-4.4zm50 2.8v5.1c0 20 46 20 46 0v-5.1c-13.7 6.8-32.3 6.8-46 0zm-50 30.2v2.1c0 13.3 20.2 17.7 33.8 13.4-1.2-3.2-1.8-6.7-1.8-10.6v-.5c-10.9 1.7-22.61.3-32-4.4zm50 2.8v2.1c0 20 46 20 46 0v-2.1c-13.7 6.8-32.3 6.8-46 0z"></path>
                                        </g>
                                    </g>
                                </svg>
                                case 'life':
                                    // return <img src={SpecialDices.life3} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.life3Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(301,32)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M128 204c16-24 68-78 68-94 0-24-20-39.824-36-40-16 0-32 10-32 30 0-20-16-30-32-30-16-.176-36 16-36 40 0 16 52 70 68 94z"></path>
                                        </g>
                                    </g>
                                </svg>
                                case 'magic':
                                    // return <img src={SpecialDices.magic3} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.magic3Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(300,33)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M99.016 83.18c0 27.973 28.984 32.635 28.984 55.946 0 9.325-9.661 23.312-24.153 23.312-14.492 0-24.153-13.987-14.492-37.298-14.491 9.324-19.322 18.649-19.322 27.973 0 23.312 24.153 46.623 57.967 46.623 33.813 0 57.966-13.987 57.966-41.96.216-41.378-49.4-55.2-62.797-74.597-9.66-13.987-4.83-23.311 4.83-32.636-19.321 4.663-28.983 17.717-28.983 32.636z"></path>
                                        </g>
                                    </g>
                                </svg>
                                case 'roar':
                                    // return <img src={SpecialDices.roar3} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.roar3Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(301,32)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M145.2 58.45c-8.3 12.4-10.3 22.35 2.5 21.1 10.4-1.02 7.2-10.11-2.5-21.1zm-38.3.55c-6.7 13.14-7.73 23.5 3.7 21.69 9.3-1.45 5.6-10.72-3.7-21.69zm69.7 17.45c-12.8 15.11-11.2 26.75-.4 27.95 11.6.3 11.8-12.14.4-27.95zm-99.87 4.9C68.85 95.5 68.37 106 79.88 105.2c14.04-1 8.37-11.54-3.15-23.85zm68.27 4.9c-17.5.72-15.7 37.15.8 36.55 16.3-.6 16.3-37.25-.8-36.55zm-33.6.59h-.7c-17.48 1.5-13.91 37.96 2.6 36.46 16.2-1.4 14.4-36.81-1.9-36.49zM85.34 112.9c-.52 0-.94.1-1.47.1-17.33 2.2-11.98 38.4 4.41 36.4 15.72-2 12.82-36.3-2.94-36.5zm87.36.5c-17.5-.4-18.3 36.2-1.6 36.5 16.3.3 18.8-36.2 1.6-36.5zm-45.4 21.1c-17.9.4-4.1 18.9-35.65 29.6-24.49 8.3-9.67 33.2 11.35 33.4 11.6.1 15.6-9 25-9 10.7.1 11.5 8.2 27.1 8.2 20.1.1 31.6-25 8.8-33.6-29.1-10.9-16.9-28.4-35.7-28.6z"></path>
                                        </g>
                                    </g>
                                </svg>
                                case 'shield':
                                    // return <img src={SpecialDices.shield3} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.shield3Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(301,32)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M64 94l64-38 64 38c0 32-48 108-64 108-16 .25-64-76-64-108z"></path>
                                        </g>
                                    </g>
                                </svg>
                            }
                            break
                        case 4:
                            switch (dice[diceId].special) {
                                case 'attack':
                                    // return <img src={SpecialDices.attack4} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.attack4Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm-268 268A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(301,32)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M128 58c-32 0-64 16-64 37.838C64 154 96 142 96 142l-6 24h76l-6-24s32 12 32-52c0-16-32-32-64-32zm-26 38a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm52 0a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm-26 34l10 26h-20l10-26zm-28 51.002v17.996h56v-17.996h-56z"></path>
                                        </g>
                                    </g>
                                </svg>
                                case 'coin':
                                    // return <img src={SpecialDices.coin4} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.coin4Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm-268 268A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(301,32)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M103 63.52c-11.5 0-23 5-23 15 0 19.97 46 19.97 46 0 0-10-11.5-15-23-15zm50 35.78c-11.5 0-23 5-23 15 0 20 46 20 46 0 0-10-11.5-15-23-15zm-73 7.1v5.1c0 12.7 18.47 17.3 32 13.9v-11.1c0-1.2.1-2.4.2-3.6-10.9 1.8-22.76.4-32.2-4.3zm0 33v5.1c0 12.7 18.47 17.3 32 13.9v-14.6c-10.9 1.7-22.61.3-32-4.4zm50 2.8v5.1c0 20 46 20 46 0v-5.1c-13.7 6.8-32.3 6.8-46 0zm-50 30.2v2.1c0 13.3 20.2 17.7 33.8 13.4-1.2-3.2-1.8-6.7-1.8-10.6v-.5c-10.9 1.7-22.61.3-32-4.4zm50 2.8v2.1c0 20 46 20 46 0v-2.1c-13.7 6.8-32.3 6.8-46 0z"></path>
                                        </g>
                                    </g>
                                </svg>
                                case 'life':
                                    // return <img src={SpecialDices.life4} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.life4Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm-268 268A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(298,37)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M128 204c16-24 68-78 68-94 0-24-20-39.824-36-40-16 0-32 10-32 30 0-20-16-30-32-30-16-.176-36 16-36 40 0 16 52 70 68 94z"></path>
                                        </g>
                                    </g>
                                </svg>
                                case 'magic':
                                    // return <img src={SpecialDices.magic4} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.magic4Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm-268 268A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(301,32)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M99.016 83.18c0 27.973 28.984 32.635 28.984 55.946 0 9.325-9.661 23.312-24.153 23.312-14.492 0-24.153-13.987-14.492-37.298-14.491 9.324-19.322 18.649-19.322 27.973 0 23.312 24.153 46.623 57.967 46.623 33.813 0 57.966-13.987 57.966-41.96.216-41.378-49.4-55.2-62.797-74.597-9.66-13.987-4.83-23.311 4.83-32.636-19.321 4.663-28.983 17.717-28.983 32.636z"></path>
                                        </g>
                                    </g>
                                </svg>
                                case 'roar':
                                    // return <img src={SpecialDices.roar4} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.roar4Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm-268 268A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(301,32)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M145.2 58.45c-8.3 12.4-10.3 22.35 2.5 21.1 10.4-1.02 7.2-10.11-2.5-21.1zm-38.3.55c-6.7 13.14-7.73 23.5 3.7 21.69 9.3-1.45 5.6-10.72-3.7-21.69zm69.7 17.45c-12.8 15.11-11.2 26.75-.4 27.95 11.6.3 11.8-12.14.4-27.95zm-99.87 4.9C68.85 95.5 68.37 106 79.88 105.2c14.04-1 8.37-11.54-3.15-23.85zm68.27 4.9c-17.5.72-15.7 37.15.8 36.55 16.3-.6 16.3-37.25-.8-36.55zm-33.6.59h-.7c-17.48 1.5-13.91 37.96 2.6 36.46 16.2-1.4 14.4-36.81-1.9-36.49zM85.34 112.9c-.52 0-.94.1-1.47.1-17.33 2.2-11.98 38.4 4.41 36.4 15.72-2 12.82-36.3-2.94-36.5zm87.36.5c-17.5-.4-18.3 36.2-1.6 36.5 16.3.3 18.8-36.2 1.6-36.5zm-45.4 21.1c-17.9.4-4.1 18.9-35.65 29.6-24.49 8.3-9.67 33.2 11.35 33.4 11.6.1 15.6-9 25-9 10.7.1 11.5 8.2 27.1 8.2 20.1.1 31.6-25 8.8-33.6-29.1-10.9-16.9-28.4-35.7-28.6z"></path>
                                        </g>
                                    </g>
                                </svg>
                                case 'shield':
                                    // return <img src={SpecialDices.shield4} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.shield4Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm-268 268A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(301,32)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M64 94l64-38 64 38c0 32-48 108-64 108-16 .25-64-76-64-108z"></path>
                                        </g>
                                    </g>
                                </svg>
                            }
                            break
                        case 5:
                            switch (dice[diceId].special) {
                                case 'attack':
                                    // return <img src={SpecialDices.attack5} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.attack5Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(301,32)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M128 58c-32 0-64 16-64 37.838C64 154 96 142 96 142l-6 24h76l-6-24s32 12 32-52c0-16-32-32-64-32zm-26 38a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm52 0a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm-26 34l10 26h-20l10-26zm-28 51.002v17.996h56v-17.996h-56z"></path>
                                        </g>
                                    </g>
                                </svg>
                                case 'coin':
                                    // return <img src={SpecialDices.coin5} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.coin5Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(301,32)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M103 63.52c-11.5 0-23 5-23 15 0 19.97 46 19.97 46 0 0-10-11.5-15-23-15zm50 35.78c-11.5 0-23 5-23 15 0 20 46 20 46 0 0-10-11.5-15-23-15zm-73 7.1v5.1c0 12.7 18.47 17.3 32 13.9v-11.1c0-1.2.1-2.4.2-3.6-10.9 1.8-22.76.4-32.2-4.3zm0 33v5.1c0 12.7 18.47 17.3 32 13.9v-14.6c-10.9 1.7-22.61.3-32-4.4zm50 2.8v5.1c0 20 46 20 46 0v-5.1c-13.7 6.8-32.3 6.8-46 0zm-50 30.2v2.1c0 13.3 20.2 17.7 33.8 13.4-1.2-3.2-1.8-6.7-1.8-10.6v-.5c-10.9 1.7-22.61.3-32-4.4zm50 2.8v2.1c0 20 46 20 46 0v-2.1c-13.7 6.8-32.3 6.8-46 0z"></path>
                                        </g>
                                    </g>
                                </svg>
                                case 'life':
                                    // return <img src={SpecialDices.life5} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.life5Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(301,32)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M128 204c16-24 68-78 68-94 0-24-20-39.824-36-40-16 0-32 10-32 30 0-20-16-30-32-30-16-.176-36 16-36 40 0 16 52 70 68 94z"></path>
                                        </g>
                                    </g>
                                </svg>
                                case 'magic':
                                    // return <img src={SpecialDices.magic5} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.magic5Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(301,32)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M99.016 83.18c0 27.973 28.984 32.635 28.984 55.946 0 9.325-9.661 23.312-24.153 23.312-14.492 0-24.153-13.987-14.492-37.298-14.491 9.324-19.322 18.649-19.322 27.973 0 23.312 24.153 46.623 57.967 46.623 33.813 0 57.966-13.987 57.966-41.96.216-41.378-49.4-55.2-62.797-74.597-9.66-13.987-4.83-23.311 4.83-32.636-19.321 4.663-28.983 17.717-28.983 32.636z"></path>
                                        </g>
                                    </g>
                                </svg>
                                case 'roar':
                                    // return <img src={SpecialDices.roar5} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.roar5Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(301,32)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M145.2 58.45c-8.3 12.4-10.3 22.35 2.5 21.1 10.4-1.02 7.2-10.11-2.5-21.1zm-38.3.55c-6.7 13.14-7.73 23.5 3.7 21.69 9.3-1.45 5.6-10.72-3.7-21.69zm69.7 17.45c-12.8 15.11-11.2 26.75-.4 27.95 11.6.3 11.8-12.14.4-27.95zm-99.87 4.9C68.85 95.5 68.37 106 79.88 105.2c14.04-1 8.37-11.54-3.15-23.85zm68.27 4.9c-17.5.72-15.7 37.15.8 36.55 16.3-.6 16.3-37.25-.8-36.55zm-33.6.59h-.7c-17.48 1.5-13.91 37.96 2.6 36.46 16.2-1.4 14.4-36.81-1.9-36.49zM85.34 112.9c-.52 0-.94.1-1.47.1-17.33 2.2-11.98 38.4 4.41 36.4 15.72-2 12.82-36.3-2.94-36.5zm87.36.5c-17.5-.4-18.3 36.2-1.6 36.5 16.3.3 18.8-36.2 1.6-36.5zm-45.4 21.1c-17.9.4-4.1 18.9-35.65 29.6-24.49 8.3-9.67 33.2 11.35 33.4 11.6.1 15.6-9 25-9 10.7.1 11.5 8.2 27.1 8.2 20.1.1 31.6-25 8.8-33.6-29.1-10.9-16.9-28.4-35.7-28.6z"></path>
                                        </g>
                                    </g>
                                </svg>
                                case 'shield':
                                    // return <img src={SpecialDices.shield5} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.shield5Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(301,32)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M64 94l64-38 64 38c0 32-48 108-64 108-16 .25-64-76-64-108z"></path>
                                        </g>
                                    </g>
                                </svg>
                            }
                            break
                        case 6:
                            switch (dice[diceId].special) {
                                case 'attack':
                                    // return <img src={SpecialDices.attack6} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.attack6Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM122 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zm268 0a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(301,32)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M128 58c-32 0-64 16-64 37.838C64 154 96 142 96 142l-6 24h76l-6-24s32 12 32-52c0-16-32-32-64-32zm-26 38a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm52 0a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm-26 34l10 26h-20l10-26zm-28 51.002v17.996h56v-17.996h-56z"></path>
                                        </g>
                                    </g>
                                </svg>
                                case 'coin':
                                    // return <img src={SpecialDices.coin6} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.coin6Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM122 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zm268 0a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(301,32)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M103 63.52c-11.5 0-23 5-23 15 0 19.97 46 19.97 46 0 0-10-11.5-15-23-15zm50 35.78c-11.5 0-23 5-23 15 0 20 46 20 46 0 0-10-11.5-15-23-15zm-73 7.1v5.1c0 12.7 18.47 17.3 32 13.9v-11.1c0-1.2.1-2.4.2-3.6-10.9 1.8-22.76.4-32.2-4.3zm0 33v5.1c0 12.7 18.47 17.3 32 13.9v-14.6c-10.9 1.7-22.61.3-32-4.4zm50 2.8v5.1c0 20 46 20 46 0v-5.1c-13.7 6.8-32.3 6.8-46 0zm-50 30.2v2.1c0 13.3 20.2 17.7 33.8 13.4-1.2-3.2-1.8-6.7-1.8-10.6v-.5c-10.9 1.7-22.61.3-32-4.4zm50 2.8v2.1c0 20 46 20 46 0v-2.1c-13.7 6.8-32.3 6.8-46 0z"></path>
                                        </g>
                                    </g>
                                </svg>
                                case 'life':
                                    // return <img src={SpecialDices.life6} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.life6Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM122 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zm268 0a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(301,32)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M128 204c16-24 68-78 68-94 0-24-20-39.824-36-40-16 0-32 10-32 30 0-20-16-30-32-30-16-.176-36 16-36 40 0 16 52 70 68 94z"></path>
                                        </g>
                                    </g>
                                </svg>
                                case 'magic':
                                    // return <img src={SpecialDices.magic6} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.magic6Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM122 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zm268 0a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(301,32)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M99.016 83.18c0 27.973 28.984 32.635 28.984 55.946 0 9.325-9.661 23.312-24.153 23.312-14.492 0-24.153-13.987-14.492-37.298-14.491 9.324-19.322 18.649-19.322 27.973 0 23.312 24.153 46.623 57.967 46.623 33.813 0 57.966-13.987 57.966-41.96.216-41.378-49.4-55.2-62.797-74.597-9.66-13.987-4.83-23.311 4.83-32.636-19.321 4.663-28.983 17.717-28.983 32.636z"></path>
                                        </g>
                                    </g>
                                </svg>
                                case 'roar':
                                    // return <img src={SpecialDices.roar6} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.roar6Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM122 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zm268 0a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(301,32)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M145.2 58.45c-8.3 12.4-10.3 22.35 2.5 21.1 10.4-1.02 7.2-10.11-2.5-21.1zm-38.3.55c-6.7 13.14-7.73 23.5 3.7 21.69 9.3-1.45 5.6-10.72-3.7-21.69zm69.7 17.45c-12.8 15.11-11.2 26.75-.4 27.95 11.6.3 11.8-12.14.4-27.95zm-99.87 4.9C68.85 95.5 68.37 106 79.88 105.2c14.04-1 8.37-11.54-3.15-23.85zm68.27 4.9c-17.5.72-15.7 37.15.8 36.55 16.3-.6 16.3-37.25-.8-36.55zm-33.6.59h-.7c-17.48 1.5-13.91 37.96 2.6 36.46 16.2-1.4 14.4-36.81-1.9-36.49zM85.34 112.9c-.52 0-.94.1-1.47.1-17.33 2.2-11.98 38.4 4.41 36.4 15.72-2 12.82-36.3-2.94-36.5zm87.36.5c-17.5-.4-18.3 36.2-1.6 36.5 16.3.3 18.8-36.2 1.6-36.5zm-45.4 21.1c-17.9.4-4.1 18.9-35.65 29.6-24.49 8.3-9.67 33.2 11.35 33.4 11.6.1 15.6-9 25-9 10.7.1 11.5 8.2 27.1 8.2 20.1.1 31.6-25 8.8-33.6-29.1-10.9-16.9-28.4-35.7-28.6z"></path>
                                        </g>
                                    </g>
                                </svg>
                                case 'shield':
                                    // return <img src={SpecialDices.shield6} alt="..." width="70" height="70" onClick={() => setDice(diceId)} />
                                    return <svg onClick={() => setDice(diceId)} className={classes.shield6Dice}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g  transform="translate(1,0)">
                                        <path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM122 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zm268 0a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z" fill="#1d3557" fill-opacity="1"></path>
                                    </g>
                                    <g  transform="translate(301,32)">
                                        <g transform="translate(12.8, 12.8) scale(0.6, 0.6) rotate(0, 128, 128)">
                                            <circle cx="128" cy="128" r="128" fill="#c1121f" fill-opacity="1"></circle>
                                            <circle stroke="#fff" stroke-opacity="1" fill="#c1121f" fill-opacity="1" stroke-width="18" cx="128" cy="128" r="101"></circle>
                                            <path className={classes.notChangeFill} fill="#fff" fill-opacity="1" d="M64 94l64-38 64 38c0 32-48 108-64 108-16 .25-64-76-64-108z"></path>
                                        </g>
                                    </g>
                                </svg>
                            }
                            break
                        default:
                            break
                    }
                })()
            }
            {/* <div className={classes.rollBtn} onClick={() => setDiceFunc(diceId)}> ROLL</div> */}
            {/* <div className={classes.rollBtn} onClick={unrollFunc}> stop </div> */}

        </div>
    );
};

export default Dice;