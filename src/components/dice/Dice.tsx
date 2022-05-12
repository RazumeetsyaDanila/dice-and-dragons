import React, { useEffect } from 'react';
import classes from './dice.module.scss';
import { Dices } from '../../dices'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

interface IDiceProps {
    diceId: number,
    unrollFunc: any
}

const Dice: React.FC<IDiceProps> = (props) => {
    const { count, rolling, rollCounter } = useTypedSelector(state => state.dice)
    const { diceId, unrollFunc } = props

    useEffect(() => {
        setTimeout(() => {
            unrollFunc()
        }, 500 + Math.floor(Math.random() * 1200) )
    }, [rollCounter])

    return (
        <div className={classes.container}>

            { // вывод картинки кубика в зависимости от выпавшего значения
                (() => {
                    if (rolling[diceId]) return <img src={Dices.roll} alt="" width="70" height="70" />
                    switch (count[diceId]) {
                        case 1:
                            return <img src={Dices.dice1} alt="" width="70" height="70" />
                        case 2:
                            return <img src={Dices.dice2} alt="" width="70" height="70" />
                        case 3:
                            return <img src={Dices.dice3} alt="" width="70" height="70" />
                        case 4:
                            return <img src={Dices.dice4} alt="" width="70" height="70" />
                        case 5:
                            return <img src={Dices.dice5} alt="" width="70" height="70" />
                        case 6:
                            return <img src={Dices.dice6} alt="" width="70" height="70" />
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