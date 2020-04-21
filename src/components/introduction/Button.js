/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';

import styled from 'styled-components';


import { ChevronTop } from '@styled-icons/open-iconic/ChevronTop';

const Top = styled.button`
display: none; 
position: fixed; 
bottom: 20px;
right: 30px; 
z-index: 99;
border: none;
outline: none; 
background-color: rgb(233, 178, 90); 
color: #000000; 
cursor: pointer;
padding: 10px;
border-radius: 10px; 
font-size: 18px;

&:hover{
    background-color: #555;
}

`;

const TopIcon = styled(ChevronTop)`
width: 25px;
color: #eeeeee;

&:hover{
    color: rgb(233, 178, 90);
}
`;


export default function Button() {
    useEffect(() => {
        window.onscroll = () => { scrollFunction(); };
    }, []);

    const scrollFunction = () => {
        const myButton = document.getElementById('btn');
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            myButton.style.display = 'block';
        } else {
            myButton.style.display = 'none';
        }
    };

    const topFunction = () => {
        document.body.scrollTo = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <>
            <Top onClick={() => topFunction()} type="button" id="btn" title="Go to top">
                <span>
                    <TopIcon />
                </span>
            </Top>
        </>
    );
}
