import React, { useEffect } from 'react';
import classes from './dice.module.scss';
import { Dices, SpecialDices } from '../../dices';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

interface IDiceProps {
    diceId: number,
    unrollFunc: any
}

const Dice: React.FC<IDiceProps> = (props) => {
    const { counts, rolling, rollCounter, specials } = useTypedSelector(state => state.dice)
    const { diceId, unrollFunc } = props

    useEffect(() => {
        setTimeout(() => {
            unrollFunc()
        }, 500 + Math.floor(Math.random() * 3000) )
    }, [rollCounter])

    return (
        <div className={classes.container}>

            { // вывод картинки кубика в зависимости от выпавшего значения
                (() => {
                    if (rolling[diceId]) return <img src={Dices.roll} alt="" width="70" height="70" />
                    switch (counts[diceId]) {
                        case 1:
                            switch (specials[diceId]){
                                case 'attack':
                                    return <img src={SpecialDices.attack1} alt="..." width="70" height="70" />
                                case 'coin':
                                    return <img src={SpecialDices.coin1} alt="..." width="70" height="70" />
                                case 'life':
                                    return <img src={SpecialDices.life1} alt="..." width="70" height="70" />
                                case 'magic':
                                    return <img src={SpecialDices.magic1} alt="..." width="70" height="70" />
                                case 'roar':
                                    return <img src={SpecialDices.roar1} alt="..." width="70" height="70" />
                                case 'shield':
                                    return <img src={SpecialDices.shield1} alt="..." width="70" height="70" />
                            }
                            break                            
                        case 2:
                            switch (specials[diceId]){
                                case 'attack':
                                    return <img src={SpecialDices.attack2} alt="..." width="70" height="70" />
                                case 'coin':
                                    return <img src={SpecialDices.coin2} alt="..." width="70" height="70" />
                                case 'life':
                                    return <img src={SpecialDices.life2} alt="..." width="70" height="70" />
                                case 'magic':
                                    return <img src={SpecialDices.magic2} alt="..." width="70" height="70" />
                                case 'roar':
                                    return <img src={SpecialDices.roar2} alt="..." width="70" height="70" />
                                case 'shield':
                                    return <img src={SpecialDices.shield2} alt="..." width="70" height="70" />
                            }
                            break 
                        case 3:
                            switch (specials[diceId]){
                                case 'attack':
                                    return <img src={SpecialDices.attack3} alt="..." width="70" height="70" />
                                case 'coin':
                                    return <img src={SpecialDices.coin3} alt="..." width="70" height="70" />
                                case 'life':
                                    return <img src={SpecialDices.life3} alt="..." width="70" height="70" />
                                case 'magic':
                                    return <img src={SpecialDices.magic3} alt="..." width="70" height="70" />
                                case 'roar':
                                    return <img src={SpecialDices.roar3} alt="..." width="70" height="70" />
                                case 'shield':
                                    return <img src={SpecialDices.shield3} alt="..." width="70" height="70" />
                            }
                            break 
                        case 4:
                            switch (specials[diceId]){
                                case 'attack':
                                    return <img src={SpecialDices.attack4} alt="..." width="70" height="70" />
                                case 'coin':
                                    return <img src={SpecialDices.coin4} alt="..." width="70" height="70" />
                                case 'life':
                                    return <img src={SpecialDices.life4} alt="..." width="70" height="70" />
                                case 'magic':
                                    return <img src={SpecialDices.magic4} alt="..." width="70" height="70" />
                                case 'roar':
                                    return <img src={SpecialDices.roar4} alt="..." width="70" height="70" />
                                case 'shield':
                                    return <img src={SpecialDices.shield4} alt="..." width="70" height="70" />
                            }
                            break 
                        case 5:
                            switch (specials[diceId]){
                                case 'attack':
                                    return <img src={SpecialDices.attack5} alt="..." width="70" height="70" />
                                case 'coin':
                                    return <img src={SpecialDices.coin5} alt="..." width="70" height="70" />
                                case 'life':
                                    return <img src={SpecialDices.life5} alt="..." width="70" height="70" />
                                case 'magic':
                                    return <img src={SpecialDices.magic5} alt="..." width="70" height="70" />
                                case 'roar':
                                    return <img src={SpecialDices.roar5} alt="..." width="70" height="70" />
                                case 'shield':
                                    return <img src={SpecialDices.shield5} alt="..." width="70" height="70" />
                            }
                            break 
                        case 6:
                            switch (specials[diceId]){
                                case 'attack':
                                    return <img src={SpecialDices.attack6} alt="..." width="70" height="70" />
                                case 'coin':
                                    return <img src={SpecialDices.coin6} alt="..." width="70" height="70" />
                                case 'life':
                                    return <img src={SpecialDices.life6} alt="..." width="70" height="70" />
                                case 'magic':
                                    return <img src={SpecialDices.magic6} alt="..." width="70" height="70" />
                                case 'roar':
                                    return <img src={SpecialDices.roar6} alt="..." width="70" height="70" />
                                case 'shield':
                                    return <img src={SpecialDices.shield6} alt="..." width="70" height="70" />
                            }
                            break 
                        default:
                            break
                    }
                })()
            }

            {/* <div className={classes.rollBtn} onClick={unrollFunc}> stop </div> */}

        </div>
    );
};

export default Dice;