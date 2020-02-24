/*                                                   */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';


export default function Nav() {
    return (
        <header className="main__header">
            <Link to="/" className="main__title">
                <h3>IC &#34;REPAIR DESIGN&#34;</h3>
            </Link>
            <nav className="main__nav">
                <ul className="main__nav__ul">
                    <NavLink to="/" exact className="main__nav__item">Home</NavLink>
                    <NavLink to="/Projects" className="main__nav__item">Projects</NavLink>
                    <NavLink to="/Measurement" className="main__nav__item">Measurement</NavLink>
                    <NavLink to="/Team" className="main__nav__item">Team</NavLink>
                    <NavLink to="/Reviews" className="main__nav__item">Reviews</NavLink>
                    <NavLink to="/Contacts" className="main__nav__item">Contacts</NavLink>
                </ul>
            </nav>
            <Link className="btn btn-tel" to="tel:+20(345)345-34-55">+20(345)345-34-55</Link>
            <Link className="btn btn-request" to="mailto:Nasa@gmail.com">Request a call</Link>
        </header>
    );
}
