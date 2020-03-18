/* eslint-disable max-len */
/* eslint-disable jsx-a11y/iframe-has-title */

import React from 'react';

//-----------

import Title from '../home/Title';

//------------------------

import Repair from '../repair/Repair';

//----------------

import '../../styles/_Control.scss';


export default function Control() {
    return (
        <>
            <section className="control">
                <Title classis="control" title="Online Control" />
                <div className="content__video">
                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/kacyaEXqVhs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                </div>
                <div className="control__svg" />
                <div className="content__icon__line" role="img" />
                <p className="content__description">
                    At each facility, a camera is installed that broadcasts the progress of work on the clock.
                    {' '}
                    <br />
                    {' '}
                    At any time, you can
                    go to our website and monitor the progress of work in your
                    <br />
                    {' '}
                    apartment.
                    You can watch the live broadcast from one of our facilities!
                    <br />
                    {' '}
                    Leave a request below and you will receive a link to the broadcast.
                </p>
                <div className="substrate" aria-hidden="true" />
            </section>
            <Repair />
        </>
    );
}
