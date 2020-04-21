import React from 'react';

// img

import realize from '../../img/realize/realize-3.jpg';

import conner from '../../img/realize/connor-wang-MNz7IGrcEl0-unsplash.jpg';

import arapaima from '../../img/realize/aranprime-Km7HYydcot4-unsplash.jpg';

import realize2 from '../../img/realize/realize-2.jpg';


export default function ClassicImg() {
    return (
        <>
            <div className="classic__top">
                <div className="classic__img_realize">
                    <img className="realize" src={realize} alt="realize" />
                </div>
            </div>
            <div className="classic__right">
                <div className="classic__img_conner">
                    <img className="conner" src={conner} alt="conner-wang" />
                </div>
            </div>
            <div className="classic__left">
                <div className="classic__img_arapaima">
                    <img className="arapaima" src={arapaima} alt="arapaima" />
                </div>
            </div>
            <div className="classic__top_">
                <div className="classic__img_realize2">
                    <img className="realize2" src={realize2} alt="realize2" />
                </div>
            </div>
        </>
    );
}
