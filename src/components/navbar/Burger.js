
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';


import '../../styles/App.scss';

import styled from 'styled-components';


const StyledBurger = styled.button`
position: absolute;
top: 2%;
left: 97%;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 2rem;
height: 2rem;
background: transparent;
border: none;
cursor: pointer;
padding: 0;
z-index: 11;
transform: rotate(180deg);

&:focus {
outline: none;
}


span {
width: 2rem;
height: 0.11rem;
background: ${({ open }) => (open ? '#EEEEEE' : '#EEEEEE')};
border-radius: 10px;
transition: all 0.3s linear;
position: relative;
transform-origin: 1px;



:first-child {
height: 0.11rem;
width: ${({ open }) => (open ? '2rem' : '1em')};
transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
}

:nth-child(2) {
height: 0.11rem;
width: ${({ open }) => (open ? '2rem' : '1.7em')};
opacity: ${({ open }) => (open ? '0' : '1')};
transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
}

:nth-child(3) {
height: 0.11rem;
transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
}
}
`;


const Burger = ({ open, setOpen }) => {
    const MODAL_OPEN = 'nav__active';
    const MODAL = 'open';

    const [condition, setCondition] = useState(false);

    useEffect(() => {
        document.body.classList.add(condition ? MODAL_OPEN : MODAL);
        return () => {
            document.body.classList.remove(MODAL_OPEN);
        };
    }, [condition]);


    return (
        <div
            onClick={() => setCondition(!condition)}
            role="button"
            tabIndex="0"
            aria-label="Toggle menu"
            onKeyPress={() => setCondition(!condition)}
        >
            <StyledBurger
                aria-label="Toggle menu"
                open={open}
                onClick={() => setOpen(!open)}
            >
                <span />
                <span />
                <span />
            </StyledBurger>
        </div>
    );
};

export default Burger;

Burger.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
};
