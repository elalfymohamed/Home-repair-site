import React from 'react';

import PropTypes from 'prop-types';


export default function Title({
    title, info, classis, br,
}) {
    return (
        <>
            <div className={`${classis}__Title`}>
                <h1 className={`${classis}__title`}>{title}</h1>
                <div className={`${classis}__image`} role="img" />
                <p className={`${classis}__info`}>
                    {info}
                    <br />
                    {br}
                </p>
            </div>
        </>
    );
}

Title.defaultProps = {
    title: '',
    info: '',
    classis: '',
    br: '',
};

Title.propTypes = {
    title: PropTypes.string,
    info: PropTypes.string,
    classis: PropTypes.string,
    br: PropTypes.string,

};
