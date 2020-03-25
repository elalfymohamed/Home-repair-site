/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';


export default function SliderGoal({ room, image, info }) {
    const [curr, setCurr] = useState(0);
    const { length } = (room, image, info);

    const GoNext = () => {
        setCurr(curr === length - 1 ? 0 : curr + 1);
    };

    useEffect(() => {
        setTimeout(GoNext, 6000);
        return () => {
            clearTimeout(GoNext);
        };
    }, [GoNext]);

    if (!Array.isArray(room, image, info) || length <= 0) {
        return null;
    }

    return (
        <>
            <div className="slider__room__info">
                <div className="slider__room">
                    {room.map((r, i) => (
                        <div className={i === curr ? 'room-info active' : 'room-info'} key={r.id} aria-hidden={i !== curr}>
                            <h4 className="slider__number">{r.number}</h4>
                            <div className="slider__title">
                                {/* h5 or link */}
                                <h5 className="Slider__Title">{r.title}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="slider__image__show">
                <div className="slider__image">
                    {image.map((n, i) => (
                        <div className={i === curr ? 'image active' : 'image'} key={n.id} aria-hidden={i !== curr}>
                            {i === curr && (
                                <div className="slider__img">
                                    <img className="img" src={n.image} alt={`Image is ${n.alt}`} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="slider__info__room">
                <div className="slider__info">
                    {info.map((f, i) => (
                        <div className={i === curr ? 'info active' : 'info'} key={f.id} aria-hidden={i !== curr}>
                            {i === curr && (
                                <div className="slider__info_">
                                    <h3 className="Number__info">{f.number}</h3>
                                    <div className="title__info">
                                        <h4 className="title">{f.title}</h4>
                                    </div>
                                    <div className="info__p">
                                        <p className="f__p">
                                            {f.info}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}


SliderGoal.defaultProps = {
    room: [],
    image: [],
    info: [],
};


SliderGoal.propTypes = {
    room: PropTypes.arrayOf(PropTypes.object),
    image: PropTypes.arrayOf(PropTypes.object),
    info: PropTypes.arrayOf(PropTypes.object),

};
