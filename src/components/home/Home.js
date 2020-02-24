/* eslint-disable import/no-cycle */

import React from 'react';

import Nav from '../navbar/Nav';

import Introduction from '../introduction/Introduction';

import Control from '../control/Control';


import '../../styles/App.scss';


export default function Home() {
    return (
        <>
            <Nav />
            <Introduction />
            <Control />
        </>
    );
}
