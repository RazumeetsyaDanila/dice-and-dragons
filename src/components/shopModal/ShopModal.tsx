import classes from './shopModal.module.scss'
import React from 'react';
import { coinsSvg_d } from '../../img/svg/svgImages'

const ShopModal: React.FC<any> = ({ children, coinCount, visible, setVisible }) => {
    const rootClasses = [classes.modal]
    if (visible) rootClasses.push(classes.active)

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.modalContent} onClick={event => event.stopPropagation()}>
                <div className={classes.circle_rectangle}>
                    <div className={classes.circle}>
                        <svg width="30px" height="30px" version="1.1" viewBox="0 0 60 60" >
                            <path fill="#1d3557" d={coinsSvg_d} />
                        </svg>
                        <p>{coinCount}</p>
                    </div>
                    <div className={classes.rectangle}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopModal;