import React from 'react';

import From from './Form';

import '../../styles/_Form.scss';

export default function Free() {
    return (
        <section className="free">
            <div className="free__old">
                <div className="free__img">
                    <div className="free__img__title">
                        <div className="title__">
                            <ul className="free__title">
                                <li className="free__title__l">
                                    <div className="l__title">
                                        <p className="l__p">
                                            Our specialist will arrive for measurements per day
            contact, or appoint a date convenient for you
                                        </p>
                                    </div>
                                </li>
                                <li className="free__title__l">
                                    <div className="l__title_">
                                        <p className="l__p">
                                            Free metering
                                        </p>
                                    </div>
                                </li>
                                <li className="free__title__l">
                                    <div className="l__title__">
                                        <p className="l__p">
                                            Free consultation
                                        </p>
                                    </div>
                                </li>
                                <li className="free__title__l">
                                    <div className="l__title___">
                                        <p className="l__p">
                                            Get a cost estimate and
            the timing of your future repairs
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <From />
        </section>
    );
}
