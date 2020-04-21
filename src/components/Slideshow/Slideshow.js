
import React from 'react';

import { Link } from 'react-router-dom';

import DefaultSlides from './DefaultSlides';

import Slider from './Slider';

import '../../styles/_Slideshow.scss';


export default function Slideshow() {
    return (
        <section className="completed">
            <h2 className="completed__title">
                completed
                {' '}
                <br />
                {' '}
                Projects
            </h2>
            <p className="completed__description">
                Only a small part of the work performed by our company
                is presented on the site. For 14 years on in the
                construction market we have made happy more than 1000 families
            </p>
            <div className="completed__slide__container">
                <Slider slides={DefaultSlides} />
            </div>
            <ul className="completed__properties">
                <li>
                    <h3>City:</h3>
                    <p>
                        Rostov-on-Don
                        <br />
                        LCD admiral
                    </p>
                </li>
                <li>
                    <h3>apartment area:</h3>
                    <p>81 m2</p>
                </li>
                <li>
                    <h3>Repair time:</h3>
                    <p>3.5 months</p>
                </li>
                <li>
                    <h3>Repair Cost:</h3>
                    <p>Upon request</p>
                </li>
            </ul>
            <div className="completed__box-links" id="box">
                <ul>
                    <li>
                        <Link to="/">Rostov-on-Don, Admiral</Link>
                    </li>
                    <li>
                        <Link to="/">Sochi Thieves</Link>
                    </li>
                    <li>
                        <Link to="/">Rostov-on-Don Patriotic</Link>
                    </li>
                </ul>
            </div>
        </section>
    );
}
