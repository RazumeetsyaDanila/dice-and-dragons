import React from 'react';
import classes from './dragonLifebar.module.scss'


const DragonLifebar: React.FC<any> = ({ dragon, allRollingsEnd, rollResult, stage }) => {
    let lifePercent = dragon.currentHealth * 100 / dragon.maxHealth
    if (dragon.currentHealth <= 0) lifePercent = 0

    return (
        <div>
            <div className={classes.dragonLifebarBox}>
                <p>{dragon.currentHealth}/{dragon.maxHealth}</p>
                {/* {
                    allRollingsEnd && stage === 'thrown' ?
                    <p>{dragon.currentHealth}/{dragon.maxHealth}</p>
                    :
                    <p>{dragon.currentHealth}//{dragon.maxHealth}</p>
                } */}
                <div className={classes.dragonLifebarContainer}>
                    {
                        (() => {
                            if (lifePercent >= 70) return <div className={classes.dragonLifebarFill} style={{ width: lifePercent + '%', backgroundColor: "#1D3557" }}></div>
                            if (lifePercent < 70 && lifePercent >= 40) return <div className={classes.dragonLifebarFill} style={{ width: lifePercent + '%', backgroundColor: "#F77F00" }}></div>
                            if (lifePercent < 40) return <div className={classes.dragonLifebarFill} style={{ width: lifePercent + '%', backgroundColor: "#D62828" }}></div>
                        })()
                    }
                </div>
            </div>
        </div>
    );
};

export default DragonLifebar;