import React from 'react';

import { Link } from 'react-router-dom';

// image -------------

import jonathan from '../../img/repair/jonathan-borba-EnN96CYQmXI-unsplash.jpg';


export default function Standard() {
    return (
        <div className="project__Standard">
            <div className="standard__image">
                <img className="project__img" src={jonathan} alt="jonathan" />
            </div>
            <div className="standard__list">
                <h2 className="standard__title">Standard</h2>
                <ul className="standard__list__ul">
                    <li className="standard__list__li">
                        Measurement drawing
                    </li>
                    <li className="standard__list__li">
                        Redevelopment
                    </li>
                    <li className="standard__list__li">
                        Layout of furniture
                    </li>
                    <li className="standard__list__li">
                        Plan of ceilings
                    </li>
                    <li className="standard__list__li">
                        Floor Plan
                    </li>
                    <li className="standard__list__li">
                        Electricians plan
                    </li>
                    <li className="standard__list__li">
                        Lighting plan
                    </li>
                </ul>
            </div>
            <div className="project__btn">
                <Link to="/" className="project__link" tabIndex="0" type="button">
                    400 rub / m2
                </Link>
            </div>
        </div>
    );
}
