/* eslint-disable react/prop-types */
import React from 'react';

import { Link } from 'react-router-dom';

//----------------------------


import phoneCall from '../../img/icon/phone-call-service-support-customer.svg';

import Email from '../../img/icon/Email_security_.svg';

import GoogleMaps from '../../img/icon/Google_Maps__icons.svg';


import Facebook from '../../img/icon/Facebook_social_media.svg';

import Instagram from '../../img/icon/Instagram_social_media.svg';

import Pinterest from '../../img/icon/Pinterest_social_media.svg';

import YouTube from '../../img/icon/YouTube_social_media.svg';


//----------------------------

export default function Icon() {
    return (
        <>
            <div className="Nav__icon">
                <ul className="list__contact">
                    <li className="list__icon p-4">
                        <Link to="/" tabIndex="0" type="button" role="button" target="_blank" rel="noopener noreferrer">
                            <img className="list__icon" src={phoneCall} alt="phoneCall" />
                        </Link>
                    </li>
                    <li className="list__icon p-4">
                        <Link to="/" tabIndex="0" type="button" role="button" target="_blank" rel="noopener noreferrer">
                            <img className="list__icon" src={Email} alt="Email" />
                        </Link>
                    </li>
                    <li className="list__icon p-4">
                        <Link to="/" tabIndex="0" type="button" role="button" target="_blank" rel="noopener noreferrer">
                            <img className="list__icon" src={GoogleMaps} alt="GoogleMaps" />
                        </Link>
                    </li>
                </ul>

            </div>
            <div className="Nav__icon__media">
                <ul className="list__contact">
                    <li className="list__media p-5">
                        <Link to="/" tabIndex="0" type="button" role="button" target="_blank" rel="noopener noreferrer">
                            <img className="media__" src={Facebook} alt="Facebook" />
                        </Link>
                    </li>
                    <li className="list__media p-5">
                        <Link to="/" tabIndex="0" type="button" role="button" target="_blank" rel="noopener noreferrer">
                            <img className="media__" src={Instagram} alt="Instagram" />
                        </Link>
                    </li>
                    <li className="list__media p-5">
                        <Link to="/" tabIndex="0" type="button" role="button" target="_blank" rel="noopener noreferrer">
                            <img className="media__" src={Pinterest} alt="Pinterest" />
                        </Link>
                    </li>
                    <li className="list__media p-5">
                        <Link to="/" tabIndex="0" type="button" role="button" target="_blank" rel="noopener noreferrer">
                            <img className="media__" src={YouTube} alt="YouTube" />
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
