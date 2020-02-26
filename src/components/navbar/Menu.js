/* eslint-disable react/prop-types */


import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import { StyledMenu } from './Menu.Styled';

import Icon from './Icon';

//------------------------------------------

import kelsey from '../../img/menu/kelsey-dody-mt2QzllH814-unsplash.jpg';

import toledo from '../../img/menu/rogerio-toledo-REdjtVaNyh8-unsplash.jpg';

//------------------------------------------


export default function Menu({ open }) {
    return (
        <StyledMenu open={open}>
            <Link to="/" className="main__title">
                <h3>IC</h3>
            </Link>
            <div className="main__nav">
                <ul className="main__nav__ul">
                    <NavLink to="/" exact className="main__nav__item">Home</NavLink>
                    <NavLink to="/Projects" className="main__nav__item">Projects</NavLink>
                    <NavLink to="/Measurement" className="main__nav__item">Measurement</NavLink>
                    <NavLink to="/Team" className="main__nav__item">Team</NavLink>
                    <NavLink to="/Reviews" className="main__nav__item">Reviews</NavLink>
                    <NavLink to="/Contacts" className="main__nav__item">Contacts</NavLink>
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
