import React from 'react';

import { Link } from 'react-router-dom';

// image -------------

import repair from '../../img/repair/image-repair-2-1.jpg';


export default function Full() {
    return (
        <div className="project__Full">
            <div className="Full__image">
                <img className="project__img" src={repair} alt="repair" />
            </div>
            <div className="Full__list">
                <h2 className="Full__title">Standard</h2>
                <ul className="Full__list__ul">
                    <li className="Full__list__li">
                        Measurement drawing
                    </li>
                    <li className="Full__list__li">
                        Redevelopment
                    </li>
                    <li className="Full__list__li">
                        Layout of furniture
                    </li>
                    <li className="Full__list__li">
                        Plan of ceilings
                    </li>
                    <li className="Full__list__li">
                        Floor Plan
                    </li>
                    <li className="Full__list__li">
                        Electricians plan
                    </li>
                    <li className="Full__list__li">
                        Lighting plan
                    </li>
                    <li className="Full__list__li">
                        Wall reamers
                    </li>
                    <li className="Full__list__li">
                        3D visualization
                    </li>
                    <li className="Full__list__li">
                        Bill of materials
                    </li>
                    <li className="Full__list__li">
                        Departure for a selection of materials
                    </li>
                    <li className="Full__list__li">
                        Furniture selection
                    </li>
                </ul>
            </div>
            <div className="project__btn">
                <Link to="/" className="project__link" tabIndex="0" type="button">
                    900 rub / m2
                </Link>
            </div>
        </div>
    );
}
