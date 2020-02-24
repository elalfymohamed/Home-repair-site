/* eslint-disable max-len */
/* eslint-disable jsx-a11y/iframe-has-title */

import React from 'react';
//-----------
import Title from '../home/Title';
//------------------------
import Repair from '../repair/Repair';
//----------------
import '../../styles/_Control.scss';
//------------
import lins from '../../img/svg/line.svg';


export default function Control() {
    return (
        <>
            <section className="control">
                <Title title="Online Control" />
                <div className="content__video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/kacyaEXqVhs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
                <div className="control__svg" />
                <img className="content__img__line" src={lins} alt="lins" />
                <p className="content__description">
                    At each facility, a camera is installed that broadcasts the progress of work on the clock. At any time, you can
                    go to our website and monitor the progress of work in your apartment.
                    You can watch the live broadcast from one of our facilities! Leave a request below and you will receive a link to the broadcast.
                </p>
                <div className="content__substrate" />
            </section>
            <Repair />
        </>
    );
}
