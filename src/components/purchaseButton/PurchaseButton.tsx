import React from 'react';
import classes from './purchaseButton.module.scss'

const PurchaseButton: React.FC<any> = ({ cost, name, onclick }) => {
    return (
        <div className={classes.purchaseBtnContainer}>
            <div className={classes.circle_rectangle} onClick={onclick}>
                <div className={classes.rectangle}>
                    {name}
                    <hr />
                    Осталось: 1
                </div>
                <div className={classes.circle}>
                    {cost}
                </div>
            </div>

        </div>
    );
};

export default PurchaseButton;