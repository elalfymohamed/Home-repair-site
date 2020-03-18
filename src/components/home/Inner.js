import React from 'react';

import PropTypes from 'prop-types';


export default function Inner({
    title, __title, br, em, paragraph, __paragraph, img,
}) {
    return (
        <>
            <div className={img} role="img" />
            <h2 className={__title}>
                {' '}
                {title}
                <br />
                {' '}
                {br}
                {' '}
                <em>
                    {em}
                </em>
            </h2>
            <p className={__paragraph}>
                {paragraph}
            </p>
        </>
    );
}


Inner.propTypes = {
    title: PropTypes.string.isRequired,
    __title: PropTypes.string.isRequired,
    br: PropTypes.string.isRequired,
    em: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    __paragraph: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,

};
