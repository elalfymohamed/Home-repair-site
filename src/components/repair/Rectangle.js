import React from 'react';


import repair from '../../img/repair/image-repair-3.jpg';

import adrien from '../../img/repair/adrien-olichon-lVZqNzHFAkU-unsplash.jpg';

import unsplash from '../../img/repair/yucel-moran-tjy9eR3nxK8-unsplash.jpg';


export default function Rectangle() {
    return (
        <div className="repair__rectangle">
            <div className="rectangle__img">
                <img className="rectangle__img__one" src={repair} alt="repair" />
            </div>
            <div className="rectangle__Redecorating">
                <h2 className="rectangle__title">Redecorating</h2>
                <ul className="rectangle__ul">
                    <li className="rectangle__li">
                        Dismantling of old coatings
                    </li>
                    <li className="rectangle__li">
                        Wallpapering
                    </li>
                    <li className="rectangle__li">
                        Painting walls and ceilings
                    </li>
                    <li className="rectangle__li">
                        Laying flooring
                    </li>
                    <li className="rectangle__li">
                        Replacing plumbing
                    </li>
                    <li className="rectangle__li">
                        Replacing sockets and switches
                    </li>
                    <li className="rectangle__li">
                        Replacing doors
                    </li>
                </ul>
            </div>
            <div className="btu_rectangle">
                <a href="/" className="btu_link" tabIndex="0" type="butt">from 1800 rub / m2</a>
            </div>

        </div>


    );
}
