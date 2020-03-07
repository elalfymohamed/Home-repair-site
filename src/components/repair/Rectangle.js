/* eslint-disable react/prop-types */
import React from 'react';

import { Link } from 'react-router-dom';

export default function Rectangle({
    classs, img, title, li, li2, li3, li4, li5, li6, li7, btn,
}) {
    return (
        <>
            <div className={classs}>
                <div className="rectangle__img">
                    <img className="rectangle__img__one" src={img} alt="repair" />
                </div>
                <div className="rectangle__Redecorating">
                    <h2 className="rectangle__title">{title}</h2>
                    <ul className="rectangle__ul">
                        <li className="rectangle__li">
                            {li}
                        </li>
                        <li className="rectangle__li">
                            {li2}
                        </li>
                        <li className="rectangle__li">
                            {li3}
                        </li>
                        <li className="rectangle__li">
                            {li4}
                        </li>
                        <li className="rectangle__li">
                            {li5}
                        </li>
                        <li className="rectangle__li">
                            {li6}
                        </li>
                        <li className="rectangle__li">
                            {li7}
                        </li>
                    </ul>
                </div>
                <div className="btu_rectangle">
                    <Link to="/" className="btu_link" tabIndex="0" type="button">
                        {' '}
                        {btn}
                        {' '}
                    </Link>
                </div>
            </div>
        </>
    );
}
