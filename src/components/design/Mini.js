import React from 'react';

import { Link } from 'react-router-dom';

// image--------

import miron from '../../img/repair/tania-miron-IQMNHCHLkZQ-unsplash.jpg';

export default function Mini() {
    return (
        <div className="project__Mini">
            <div className="mini_image">
                <img className="project__img" src={miron} alt="miron" />
            </div>
            <div className="mini__list">
                <h2 className="mini__title">Mini</h2>
                <ul className="mini__list__ul">
                    <li className="mini__list__li">
                        Measurement drawing
                    </li>
                    <li className="mini__list__li">
                        Redevelopment
                    </li>
                    <li className="mini__list__li">
                        Layout of furniture
                    </li>
                    <li className="mini__list__li">
                        Plumbing plan. equipment
                    </li>
                </ul>
            </div>
            <div className="project__btn">
                <Link to="/" className="project__link" tabIndex="0" type="button">
                    150 rub / m2
                </Link>
            </div>
        </div>
    );
}
