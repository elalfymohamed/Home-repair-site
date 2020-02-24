
import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import FocusLock from 'react-focus-lock';

import Burger from './Burger';

import Menu from './Menu';

const Nav = () => {
    const [open, setOpen] = useState(false);
    const menuId = 'main-menu';
    const title = {
        position: 'absolute',
        top: '3%',
        left: '94px',
        margin: '0',
        lineHeight: '16px',
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: '#E3B873',
        fontSize: '18px',
        zIndex: '10',
    };
    return (
        <div>
            <Link to="/" className="main__title">
                <h3 style={title}>IC &#34;REPAIR DESIGN&#34;</h3>
            </Link>
            <FocusLock disabled={!open}>
                <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
        </div>
    );
};


export default Nav;
