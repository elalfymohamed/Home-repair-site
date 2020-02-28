/* eslint-disable react/prop-types */
import React from 'react';

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
