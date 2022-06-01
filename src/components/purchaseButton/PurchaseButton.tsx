import React from 'react';
import classes from './purchaseButton.module.scss'

const PurchaseButton: React.FC<any> = ({ cost, name, onclick, count }) => {
    return (
        <div className={classes.purchaseBtnContainer}>
            <div className={classes.circle_rectangle} onClick={onclick}>
                <div className={classes.rectangle}>
                    {name}
                    <hr />
                    Осталось: {count}
                </div>
                <div className={classes.circle}>
                    {cost}
                </div>
            </div>

        </div>
    );
};

export default PurchaseButton;