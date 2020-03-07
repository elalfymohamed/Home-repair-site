import React from 'react';

// img

import realize from '../../img/realize/realize-3.jpg';

import connor from '../../img/realize/connor-wang-MNz7IGrcEl0-unsplash.jpg';

import aranprime from '../../img/realize/aranprime-Km7HYydcot4-unsplash.jpg';

import realize2 from '../../img/realize/realize-2.jpg';


export default function ClassicImg() {
    return (
        <div className="classic__img">
            <div className="classic__img__top">
                <div className="classic__img__right">
                    <img src={realize} alt="realize" />
                </div>
            </div>
            <div className="classic__img__right">
                <div className="classic__img__bottom">
                    <img src={connor} alt="connor-wang" />
                </div>
            </div>
            <div className="classic__img__left_">
                <div className="classic__img__top_">
                    <img src={aranprime} alt="aranprime" />
                </div>
            </div>
            <div className="classic__img__left">
                <div className="classic__img__bottom_">
                    <img src={realize2} alt="realize2" />
                </div>
            </div>
        </div>
    );
}
