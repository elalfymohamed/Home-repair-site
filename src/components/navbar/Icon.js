import React from 'react';

import { Link } from 'react-router-dom';

import {
    NavIcon, ListContact, ListIcon, Call, Email, GoogleMaps, ListIconLi, Svg,
} from './Icon.Styled';

export default function Icon() {
    return (
        <>
            <NavIcon>
                <Svg className="Nav__icon">
                    <ListContact className="list__contact">
                        <ListIconLi className="list__icon">
                            <Link className="list__icon_btu" style={{ outline: 'none' }} to="/" tabIndex="0" target="_blank" rel="noopener noreferrer" title="phoneCall">
                                <ListIcon className="phoneCall" aria-label="phoneCall">
                                    <Call />
                                </ListIcon>
                            </Link>
                        </ListIconLi>
                        <ListIconLi className="list__icon">
                            <Link className="list__icon_btu" style={{ outline: 'none' }} to="mailto:elalfy@gmail.com" tabIndex="0" target="_blank" rel="noopener noreferrer" title="Email">
                                <ListIcon className="Email" aria-label="Email">
                                    <Email />
                                </ListIcon>
                            </Link>
                        </ListIconLi>
                        <ListIconLi className="list__icon">
                            <Link className="list__icon_btu" style={{ outline: 'none' }} to="/" tabIndex="0" target="_blank" rel="noopener noreferrer" title="GoogleMaps">
                                <ListIcon className="GoogleMaps" aria-label="GoogleMaps">
                                    <GoogleMaps />
                                </ListIcon>
                            </Link>
                        </ListIconLi>
                    </ListContact>
                </Svg>
            </NavIcon>
        </>
    );
}
