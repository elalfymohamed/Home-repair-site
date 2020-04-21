/* eslint-disable import/no-cycle */

import React from 'react';

import Nav from '../navbar/Nav';

import Introduction from '../introduction/Introduction';

import Control from '../control/Control';

import Classic from '../classic/Classic';

import Goal from '../listGoal/Goal';

import '../../styles/App.scss';

import '../../styles/Respons.scss';


export default function Home() {
    return (
        <>
            <Nav />
            <Introduction />
            <Control />
            <Classic />
            <Goal />
        </>
    );
}
