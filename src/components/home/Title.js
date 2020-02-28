/* eslint-disable react/prop-types */
import React from 'react';

export default function Title({ title, info }) {
    return (
        <>
            <h1 className="__title">{title}</h1>
            <div className="__image" role="img" />
            <p className="__info">{info}</p>
        </>
    );
}
