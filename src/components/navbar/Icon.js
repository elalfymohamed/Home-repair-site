/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';

import { Link } from 'react-router-dom';

import '../../styles/_Icon.scss';


export default function Icon() {
    return (
        <>
            <div className="Nav__icon">
                <ul className="list__contact">
                    <li className="list__icon">
                        <Link className="list__icon_btu" to="/" tabIndex="0" target="_blank" rel="noopener noreferrer" title="phoneCall">
                            <span className="list__icon__phoneCall" role="img" aria-label="phoneCall" />
                        </Link>
                    </li>
                    <li className="list__icon">
                        <Link className="list__icon_btu" to="mailto:elalfy@gmail.com" tabIndex="0" target="_blank" rel="noopener noreferrer" title="Email">
                            <span className="list__icon__Email" role="img" aria-label="Email" />
                        </Link>
                    </li>
                    <li className="list__icon">
                        <Link className="list__icon_btu" to="/" tabIndex="0" target="_blank" rel="noopener noreferrer" title="GoogleMaps">
                            <span className="list__icon__GoogleMaps" role="img" aria-label="GoogleMaps" />
                        </Link>
                    </li>
                </ul>

            </div>
            {/* <div className="Nav__icon__media">
                <ul className="list__contact">
                    <li className="list__media">
                        <Link to="/" tabIndex="0" type="button" role="button" target="_blank" rel="noopener noreferrer">
                            <img className="media__" src={Facebook} alt="Facebook" />
                        </Link>
                    </li>
                    <li className="list__media">
                        <Link to="/" tabIndex="0" type="button" role="button" target="_blank" rel="noopener noreferrer">
                            <img className="media__" src={Instagram} alt="Instagram" />
                        </Link>
                    </li>
                    <li className="list__media">
                        <Link to="/" tabIndex="0" type="button" role="button" target="_blank" rel="noopener noreferrer">
                            <img className="media__" src={Pinterest} alt="Pinterest" />
                        </Link>
                    </li>
                    <li className="list__media">
                        <Link to="/" tabIndex="0" type="button" role="button" target="_blank" rel="noopener noreferrer">
                            <img className="media__" src={YouTube} alt="YouTube" />
                        </Link>
                    </li>
                </ul>
            </div> */}
        </>
    );
}
