import React from 'react';
import classes from './purchaseOver.module.scss'

const PurchaseOver: React.FC = () => {
    return (
        <div className={classes.purchaseBtnContainer}>
            <div className={classes.circle_rectangle}>
                <div className={classes.rectangle}>
                    <svg width="45px" height="45px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 490 490"  >
                        <polygon fill="#1d3557" points="386.813,0 245,141.812 103.188,0 0,103.188 141.813,245 0,386.812 103.187,489.999 245,348.187 386.813,490 490,386.812 348.187,244.999 490,103.187 "/>
                    </svg>
                </div>
                <div className={classes.circle}>
                </div>
            </div>
        </div>
    );
};

export default PurchaseOver;