/* eslint-disable react/prop-types */


import React from 'react';

import { NavLink } from 'react-router-dom';

import { StyledMenu } from './Menu.Styled';

import Icon from './Icon';

//------------------------------------------

import kelsey from '../../img/menu/kelsey-dody-mt2QzllH814-unsplash.jpg';

import toledo from '../../img/menu/rogerio-toledo-REdjtVaNyh8-unsplash.jpg';

//------------------------------------------


export default function Menu({ open }) {
    return (
        <StyledMenu open={open}>
            <div className="main__icon-img" aria-label="GO To Home">
                <div role="img" />
            </div>
            <div className="main__nav">
                <ul className="main__nav__ul">
                    <li className="main__nav__li">
                        <NavLink to="/" exact className="main__nav__item">Home</NavLink>
                    </li>
                    <li className="main__nav__li">
                        <NavLink to="/Projects" className="main__nav__item">Projects</NavLink>
                    </li>
                    <li className="main__nav__li">
                        <NavLink to="/Measurement" className="main__nav__item">Measurement</NavLink>
                    </li>
                    <li className="main__nav__li">
                        <NavLink to="/Team" className="main__nav__item">Team</NavLink>
                    </li>
                    <li className="main__nav__li">
                        <NavLink to="/Reviews" className="main__nav__item">Reviews</NavLink>
                    </li>
                    <li className="main__nav__li">
                        <NavLink to="/Contacts" className="main__nav__item">Contacts</NavLink>
                    </li>
                </ul>
            </div>
            <div className="main__icon">
                <Icon />
            </div>
            <div className="main__nav__img">
                <figure className="main__nav__img__">
                    <img src={kelsey} alt="toledo" />
                </figure>
                <figure className="main__nav__img_">
                    <img src={toledo} alt="rogerio-toledo" />
                </figure>
            </div>
        </StyledMenu>
    );
}
