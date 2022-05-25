import React from 'react';
import classes from './knightLifebar.module.scss'


const KnightLifebar: React.FC<any> = ({ knight }) => {
    let lifePercent = knight.currentHealth * 100 / knight.maxHealth
    if (knight.currentHealth <= 0) lifePercent = 0
    return (
        <div className={classes.knightLifebarBox}>
            <p className={classes.lvl}>1 уровень</p>
            <div className={classes.knightLifebarContainer}>
                <p className={classes.hp}>{knight.currentHealth}/{knight.maxHealth}</p>
                {
                    (() => {
                        if (lifePercent >= 70) return <div className={classes.knightLifebarFill} style={{ width: lifePercent + '%', backgroundColor: "#457B9D" }}></div>
                        if (lifePercent < 70 && lifePercent >= 40) return <div className={classes.knightLifebarFill} style={{ width: lifePercent + '%', backgroundColor: "#F77F00" }}></div>
                        if (lifePercent < 40) return <div className={classes.knightLifebarFill} style={{ width: lifePercent + '%', backgroundColor: "#D62828" }}></div>
                    })()
                }

            </div>
        </div>
    );
};

export default KnightLifebar;