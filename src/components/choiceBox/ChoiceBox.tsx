import React from 'react';
import classes from './choiceBox.module.scss'

const ChoiceBox: React.FC<any> = ({ roll }) => {
    return (
        <div className={classes.choiceContainer}>
            <p>Выберите действие:</p>
            <div className={classes.choiceButtonsContainer}>
                <div className={classes.choiceButtonContainer}>
                    <div className={classes.choiceAttackButton} onClick={() => roll('attack')}>
                        <svg className={classes.choiceButtonAttackImg} width="70px" height="70px" viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg">
                            <path className={classes.choiceButtonAttackFill} fill="#1d3557" d="M256.438 19.375c-47.71 0-95.422 14.41-136.094 43.22 13.022 15.09 26.314 30.127 39.156 44.468 16.038-11.682 32.482-18.857 48.688-22.282l9.875-9.874 6.625-6.625 6.593 6.626 7.72 7.72c78.735 5.644 140.54 95.133 101.406 175.53l118.5 118.5c54.447-90.673 42.59-209.88-35.625-288.094C377.17 42.45 316.806 19.376 256.44 19.376zM66.5 27.063L29.53 64.03c37.95 29.834 80.152 65.906 115 96.845l7.407 6.594-7 7-47.375 47.374L117.25 241.5l34.5-34.5 268.125 268.156 77.344 19.28-21.845-74.78-26.977-26.978.04-.053-117.75-117.75-.032.045L207.25 151.5l37.094-37.094-19.656-19.656-46.47 46.438-6.968 6.937-6.563-7.28C133.5 106.334 96.644 64.837 66.5 27.062zm-1.28 90.062C-1.735 209.41 6.38 339.035 89.593 422.25c52.93 52.93 124.633 75.448 193.562 67.625-131.5.997-246.804-128.563-207.125-263.156l-4.874-4.876 6.594-6.625 3.25-3.25c7.028-18.512 17.076-37.017 30.5-55.22-14.87-12.992-30.55-26.433-46.28-39.625zm120.374 46.03c12.283 0 22.22 9.968 22.22 22.25 0 2.224-.332 4.35-.94 6.376l236.94 236.97-13.19 13.188L194.47 205.813c-2.72 1.185-5.72 1.843-8.876 1.843-12.284 0-22.25-9.964-22.25-22.25 0-12.285 9.966-22.25 22.25-22.25z" />
                        </svg>
                        Атака</div>
                </div>
                <div className={classes.choiceButtonContainer}>
                    <div className={classes.choiceLifeButton} onClick={() => roll('life')}>
                        <svg className={classes.choiceButtonLifeImg} width="70px" height="70px" version="1.1" id="Layer_1" x="0px" y="0px"
                            viewBox="0 0 329.928 329.928">
                            <g id="XMLID_481_">
                                <path className={classes.choiceButtonLifeFill} fill="#1d3557" id="XMLID_482_" d="M115.604,278.4c5.95,5.224,12.092,10.614,18.41,16.202c0.043,0.038,0.087,0.077,0.131,0.115l21.018,18.155
		c2.816,2.433,6.311,3.649,9.806,3.649s6.991-1.217,9.807-3.649l21.014-18.155c0.044-0.038,0.087-0.076,0.13-0.114
		c41.607-36.796,72.802-64.966,95.371-92.44c26.36-32.088,38.638-61.101,38.638-91.305c0-54.646-42.805-97.451-97.449-97.451
		c-24.56,0-48.827,9.248-67.511,25.279c-18.689-16.032-42.956-25.279-67.517-25.279C42.806,13.406,0,56.212,0,110.857
		C0,176.912,45.99,217.286,115.604,278.4z M104.964,134.965h39.999V94.964h40.001v40.001h40v40h-40v39.999h-40.001v-39.999h-39.999
		V134.965z"/></g>
                        </svg>
                        Лечение
                    </div>
                </div>
                <div className={classes.choiceButtonContainer}>
                    <div className={classes.choiceCoinButton} onClick={() => roll('coin')}>
                        <svg className={classes.choiceButtonCoinImg} width="70px" height="70px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 58 58">
                            <path className={classes.choiceButtonCoinFill} fill="#1d3557" d="M32,0c-1.021,0-2.025,0.076-3.015,0.21C27.953,0.072,26.972,0,26,0C18.638,0,11.999,3.571,7.34,9.264
	C7.293,9.306,7.259,9.356,7.221,9.406c-1.485,1.839-2.761,3.898-3.793,6.126c-0.026,0.049-0.049,0.097-0.068,0.15
	c-0.711,1.557-1.304,3.193-1.76,4.897c-0.045,0.096-0.065,0.201-0.078,0.31C0.861,23.465,0.5,26.185,0.5,29
	c0,4.404,0.872,8.579,2.423,12.321c0.014,0.04,0.027,0.078,0.046,0.116c0.93,2.218,2.1,4.28,3.473,6.145
	c0.035,0.048,0.064,0.099,0.107,0.14c1.39,1.865,2.983,3.526,4.74,4.942c0.05,0.055,0.11,0.096,0.172,0.139
	C15.588,56.075,20.599,58,26,58c0.972,0,1.953-0.072,2.985-0.21C29.975,57.924,30.979,58,32,58c14.061,0,25.5-13.009,25.5-29
	S46.061,0,32,0z M49.217,20.202c0.523-0.182,1.091,0.099,1.27,0.622c0.222,0.646,0.419,1.313,0.587,1.98
	c0.135,0.536-0.19,1.079-0.726,1.214c-0.082,0.021-0.164,0.03-0.245,0.03c-0.447,0-0.854-0.302-0.969-0.756
	c-0.155-0.614-0.336-1.227-0.54-1.82C48.416,20.95,48.694,20.381,49.217,20.202z M5.428,42h3.788
	c0.157,0.354,0.318,0.705,0.487,1.051c0.073,0.149,0.149,0.296,0.225,0.444c0.205,0.402,0.417,0.797,0.638,1.186
	c0.082,0.145,0.161,0.292,0.246,0.436c0.177,0.299,0.362,0.592,0.548,0.884H7.774C6.891,44.754,6.109,43.415,5.428,42z M4.968,17
	h3.827c-0.175,0.437-0.341,0.879-0.498,1.327c-0.043,0.124-0.087,0.247-0.129,0.371C8.024,19.128,7.89,19.562,7.763,20H3.857
	C4.175,18.969,4.547,17.969,4.968,17z M8.525,11h3.503c-0.122,0.175-0.245,0.349-0.364,0.527c-0.295,0.443-0.58,0.894-0.852,1.356
	c-0.084,0.143-0.164,0.291-0.246,0.436c-0.221,0.389-0.434,0.785-0.638,1.186c-0.075,0.148-0.152,0.294-0.225,0.444
	C9.695,14.966,9.686,14.983,9.678,15H5.929C6.686,13.573,7.558,12.238,8.525,11z M24.782,10.228c-0.146,0.074-0.3,0.109-0.453,0.109
	c-0.364,0-0.715-0.199-0.892-0.546c-0.251-0.492-0.056-1.094,0.437-1.345c0.623-0.318,1.267-0.602,1.916-0.845
	c0.516-0.193,1.094,0.068,1.287,0.586c0.194,0.517-0.069,1.093-0.586,1.287C25.913,9.691,25.338,9.944,24.782,10.228z
	 M25.258,49.135c-0.176,0.347-0.528,0.547-0.893,0.547c-0.152,0-0.307-0.035-0.452-0.108c-0.615-0.312-1.224-0.665-1.809-1.048
	c-0.462-0.302-0.591-0.922-0.289-1.384c0.304-0.461,0.922-0.591,1.385-0.289c0.523,0.343,1.068,0.659,1.619,0.938
	C25.311,48.041,25.508,48.643,25.258,49.135z M13.644,33.94c0.534-0.136,1.079,0.193,1.212,0.729
	c0.153,0.613,0.333,1.226,0.536,1.82c0.178,0.523-0.101,1.091-0.624,1.269c-0.107,0.037-0.216,0.054-0.323,0.054
	c-0.416,0-0.805-0.262-0.946-0.678c-0.221-0.648-0.417-1.315-0.583-1.982C12.782,34.616,13.108,34.074,13.644,33.94z M12.167,29.021
	V29c0-0.682,0.027-1.368,0.08-2.037c0.044-0.55,0.523-0.958,1.076-0.918c0.551,0.044,0.961,0.526,0.918,1.076
	c-0.049,0.618-0.074,1.25-0.074,1.879c0,0.552-0.448,1.011-1,1.011S12.167,29.574,12.167,29.021z M15.378,21.551
	c-0.142,0.417-0.53,0.679-0.947,0.679c-0.106,0-0.215-0.018-0.321-0.053c-0.523-0.178-0.803-0.745-0.626-1.269
	c0.221-0.65,0.472-1.299,0.747-1.928c0.222-0.507,0.81-0.736,1.317-0.516c0.506,0.221,0.737,0.811,0.516,1.317
	C15.811,20.359,15.581,20.955,15.378,21.551z M16.515,41.298c0.457-0.309,1.079-0.189,1.388,0.27
	c0.353,0.523,0.732,1.033,1.127,1.515c0.35,0.427,0.288,1.057-0.139,1.408c-0.186,0.152-0.411,0.227-0.634,0.227
	c-0.289,0-0.576-0.125-0.774-0.366c-0.434-0.53-0.851-1.09-1.239-1.665C15.937,42.229,16.057,41.607,16.515,41.298z M19.004,14.95
	c-0.198,0.242-0.485,0.367-0.775,0.367c-0.223,0-0.446-0.074-0.632-0.226c-0.428-0.35-0.491-0.979-0.142-1.407
	c0.441-0.541,0.91-1.06,1.391-1.545c0.391-0.391,1.023-0.393,1.415-0.004c0.392,0.39,0.394,1.022,0.004,1.415
	C19.829,13.988,19.405,14.459,19.004,14.95z M2.5,29c0-0.674,0.036-1.338,0.078-2h3.987c-0.001,0.016-0.001,0.032-0.002,0.048
	C6.526,27.694,6.5,28.343,6.5,29c0,0.335,0.012,0.667,0.022,1H2.539C2.528,29.666,2.5,29.337,2.5,29z M6.636,32
	c0.038,0.421,0.087,0.839,0.141,1.255c0.004,0.03,0.006,0.061,0.01,0.092C6.861,33.903,6.951,34.454,7.052,35H3.108
	c-0.195-0.982-0.349-1.981-0.448-3H6.636z M7.256,22c-0.026,0.118-0.048,0.238-0.072,0.356c-0.027,0.132-0.055,0.263-0.081,0.395
	c-0.122,0.627-0.23,1.26-0.315,1.902c-0.004,0.03-0.006,0.061-0.01,0.092C6.766,24.83,6.759,24.915,6.748,25H2.779
	c0.132-1.018,0.299-2.022,0.528-3H7.256z M7.495,37c0.031,0.122,0.06,0.246,0.092,0.367c0.012,0.044,0.022,0.09,0.034,0.134
	c0.165,0.609,0.35,1.208,0.548,1.8c0.042,0.125,0.086,0.247,0.129,0.371C8.335,39.782,8.372,39.892,8.411,40H4.558
	c-0.379-0.971-0.705-1.973-0.983-3H7.495z M29.03,50.288c0.066-0.549,0.567-0.933,1.112-0.875c0.612,0.073,1.237,0.11,1.858,0.11
	c0.552,0,1.043,0.448,1.043,1s-0.405,1-0.957,1H32c-0.7,0-1.406-0.042-2.096-0.124C29.356,51.334,28.964,50.836,29.03,50.288z
	 M33.936,8.588c-0.039,0-0.078-0.002-0.117-0.007C33.217,8.511,32.605,8.476,32,8.476c-0.552,0-1.021-0.448-1.021-1s0.426-1,0.979-1
	H32c0.682,0,1.371,0.04,2.049,0.119c0.548,0.063,0.942,0.56,0.878,1.108C34.868,8.212,34.436,8.588,33.936,8.588z M21.44,2.614
	c-0.331,0.172-0.658,0.352-0.981,0.539c-0.181,0.105-0.363,0.206-0.541,0.316C19.641,3.639,19.37,3.819,19.1,4h-1.925
	c1.462-0.684,2.988-1.223,4.579-1.558C21.647,2.495,21.546,2.559,21.44,2.614z M13.732,6h2.762
	c-0.248,0.217-0.496,0.435-0.737,0.662c-0.201,0.19-0.396,0.387-0.592,0.584c-0.198,0.199-0.394,0.401-0.586,0.606
	c-0.185,0.197-0.37,0.393-0.55,0.596C13.869,8.628,13.716,8.815,13.561,9h-3.302C11.333,7.883,12.492,6.876,13.732,6z M9.324,48
	h3.432c0.113,0.148,0.225,0.296,0.341,0.441c0.302,0.38,0.613,0.75,0.932,1.111c0.179,0.203,0.365,0.399,0.55,0.596
	c0.193,0.206,0.389,0.408,0.588,0.607c0.08,0.08,0.156,0.166,0.237,0.245h-3.008C11.297,50.101,10.27,49.097,9.324,48z
	 M21.753,55.558c-2.293-0.483-4.46-1.369-6.47-2.558h2.419c0.128,0.099,0.26,0.192,0.389,0.288c0.207,0.154,0.414,0.309,0.625,0.456
	c0.393,0.274,0.794,0.537,1.201,0.787c0.178,0.109,0.36,0.211,0.541,0.316c0.323,0.187,0.65,0.367,0.981,0.539
	C21.546,55.441,21.647,55.505,21.753,55.558z M40.167,49.533c-0.623,0.32-1.267,0.605-1.914,0.849
	c-0.116,0.044-0.235,0.065-0.353,0.065c-0.404,0-0.785-0.247-0.936-0.648c-0.195-0.517,0.066-1.094,0.583-1.288
	c0.576-0.217,1.15-0.472,1.706-0.757c0.491-0.254,1.094-0.059,1.346,0.433C40.853,48.678,40.658,49.281,40.167,49.533z
	 M42.15,10.833c-0.192,0.294-0.512,0.454-0.839,0.454c-0.187,0-0.376-0.052-0.545-0.162c-0.523-0.341-1.068-0.655-1.621-0.934
	c-0.493-0.249-0.691-0.85-0.442-1.343c0.249-0.491,0.85-0.691,1.343-0.442c0.618,0.312,1.227,0.663,1.812,1.043
	C42.321,9.751,42.451,10.371,42.15,10.833z M46.574,44.281c-0.441,0.542-0.908,1.063-1.389,1.548
	c-0.195,0.197-0.453,0.296-0.71,0.296c-0.254,0-0.509-0.097-0.704-0.29c-0.392-0.389-0.395-1.022-0.006-1.414
	c0.435-0.438,0.857-0.91,1.257-1.402c0.349-0.428,0.979-0.494,1.407-0.145C46.857,43.222,46.922,43.852,46.574,44.281z
	 M46.903,16.837c-0.321,0-0.636-0.154-0.829-0.439c-0.354-0.522-0.734-1.031-1.13-1.512c-0.351-0.426-0.29-1.057,0.136-1.408
	c0.426-0.352,1.057-0.29,1.408,0.136c0.436,0.529,0.854,1.088,1.243,1.663c0.31,0.457,0.19,1.079-0.268,1.389
	C47.291,16.782,47.096,16.837,46.903,16.837z M50.53,37.049c-0.22,0.653-0.47,1.303-0.743,1.93
	c-0.164,0.376-0.532,0.601-0.917,0.601c-0.133,0-0.269-0.027-0.399-0.083c-0.506-0.221-0.738-0.81-0.518-1.316
	c0.25-0.575,0.479-1.17,0.681-1.769c0.176-0.522,0.743-0.805,1.267-0.629C50.425,35.958,50.707,36.525,50.53,37.049z M51.757,30.993
	c-0.041,0.524-0.479,0.923-0.996,0.923c-0.026,0-0.052-0.001-0.078-0.003c-0.551-0.042-0.962-0.523-0.92-1.074
	c0.047-0.606,0.071-1.225,0.071-1.838c0-0.552,0.448-1.032,1-1.032s1,0.415,1,0.967V29C51.833,29.665,51.808,30.335,51.757,30.993z"
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