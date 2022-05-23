import classes from './gameOver.module.scss'
import React from 'react';

const GameOver: React.FC<any> = ({children, visible, setVisible}) => {
    const rootClasses = [classes.modal]
    if(visible) rootClasses.push(classes.active)

    return (
        <div className={rootClasses.join(' ')}>
            <div className={classes.modalContent}>
                {children}
            </div>
        </div>
    );
};

export default GameOver;