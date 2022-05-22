import React from 'react';
import classes from './choiceBox.module.scss'
import { choiceLifeSvg_d, choiceCoinSvg_d, choiceAttackSvg_d } from '../../img/svg/svgImages'

const ChoiceBox: React.FC<any> = ({ roll }) => {
	return (
		<div className={classes.choiceContainer}>
			<p>Выберите действие:</p>
			<div className={classes.choiceButtonsContainer}>
				<div className={classes.choiceButtonContainer}>
					<div className={classes.choiceAttackButton} onClick={() => roll('attack')}>
						<svg className={classes.choiceButtonAttackImg} width="70px" height="70px" viewBox="0 0 512 512">
							<path className={classes.choiceButtonAttackFill} fill="#1d3557" d={choiceAttackSvg_d} />
						</svg>
						Атака
					</div>
				</div>
				<div className={classes.choiceButtonContainer}>
					<div className={classes.choiceLifeButton} onClick={() => roll('life')}>
						<svg className={classes.choiceButtonLifeImg} width="70px" height="70px" version="1.1" id="Layer_1" x="0px" y="0px"
							viewBox="0 0 329.928 329.928">
							<g id="XMLID_481_">
								<path className={classes.choiceButtonLifeFill} fill="#1d3557" id="XMLID_482_" d={choiceLifeSvg_d} /></g>
						</svg>
						Лечение
					</div>
				</div>
				<div className={classes.choiceButtonContainer}>
					<div className={classes.choiceCoinButton} onClick={() => roll('coin')}>
						<svg className={classes.choiceButtonCoinImg} width="70px" height="70px" version="1.1" viewBox="0 0 58 58">
							<path className={classes.choiceButtonCoinFill} fill="#1d3557" d={choiceCoinSvg_d}
							/>
						</svg>
						Монеты
					</div>
				</div>
			</div>

		</div>
	);
};

export default ChoiceBox;