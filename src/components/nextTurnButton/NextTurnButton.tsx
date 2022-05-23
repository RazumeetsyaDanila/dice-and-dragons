import React from 'react';
import classes from './nextTurnButton.module.scss'

const NextTurnButton: React.FC<any> = ({acceptRoll}) => {
    return (
        <div className={classes.nextTurnButtonContainer} onClick={acceptRoll}>
            <svg version="1.1" id="Capa_1" className={classes.nextTurnButton} viewBox="0 0 297 297">
                <g>
                    <polygon fill="#1d3557" points="33,66 0,66 66,148 0,231 33,231 99,148 	" />
                    <polygon fill="#1d3557" points="83,66 50,66 116,148 50,231 83,231 149,148 	" />
                    <polygon fill="#1d3557" points="133,66 100,66 166,148 100,231 133,231 199,148 	" />
                    <polygon fill="#1d3557" points="231,66 149,66 215,148 149,231 231,231 297,148 	" />
                </g>
            </svg>
        </div>
    );
};

export default NextTurnButton;