import React from 'react';

import ClassicImg from './ClassicImg';

import Design from '../design/Design';

import '../../styles/_Classic.scss';

export default function Classic() {
    return (
        <>
            <section className="classic">
                <div className="classic__image" />
                <div className="menu__classic">
                    <div className="menu__classic__ul">
                        <h2 className="menu__title">
                            We realize your
                            <br />
                            wildest fantasies
                        </h2>
                        <div className="menu__classic__div">
                            <h3 className="menu__ul__title">American classic</h3>
                            <ul className="menu__ul">
                                <li className="menu__li">Empire</li>
                                <li className="menu__li">Classical</li>
                                <li className="menu__li">Loft</li>
                                <li className="menu__li">Minimalism</li>
                                <li className="menu__li">Provence</li>
                                <li className="menu__li">Romanticism</li>
                                <li className="menu__li">Scandinavian style</li>
                                <li className="menu__li">Mediterranean style</li>
                                <li className="menu__li">High tech</li>
                                <li className="menu__li">Eclecticism</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <ClassicImg />
            </section>
            <Design />
        </>
    );
}
