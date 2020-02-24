/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';


const Slider = ({ slides }) => {
    const [curr, setCurr] = useState(0);
    const { length } = slides;

    const goToNext = () => {
        setCurr(curr === length - 1 ? 0 : curr + 1);
    };

    useEffect(() => {
        setTimeout(goToNext, 2000);
    });


    if (!Array.isArray(slides) || length <= 0) {
        return null;
    }

    return (
        <div className="slider">
            {slides.map((s, i) => (
                <div className={i === curr ? 'slide active' : 'slide'} key={s.id} aria-hidden={i !== curr}>
                    {i === curr && (
                        <img className="image" src={s.image} alt={`Image for ${s.alt}`} />
                    )}
                </div>
            ))}
        </div>
    );
};


export default Slider;
