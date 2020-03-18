/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import PropTypes from 'prop-types';

export default function SetClients({
    clients: {
        image, name, info, days, distance,
    },
}) {
    return (
        <div className="clients">
            <div className="show__clients">
                <div className="info__clients">
                    <div className="img__clients">
                        <img className="image" src={image} alt="clients" />
                    </div>
                    <div className="names__clients">
                        <h2 className="name">{name}</h2>
                    </div>
                </div>
                <div className="detailing__clients">
                    <p className="detailing">{info}</p>
                </div>
            </div>
            <div className="detailed__project">
                <div className="box__distance">
                    <div className="icon__distance" role="img">
                        {/* h4 or Link */}
                        <h4 className="distance">{distance}</h4>
                    </div>
                </div>
                <div className="box__days">
                    <div className="icon__days" role="img">
                        {/* h4 or Link */}
                        <h4 className="days">{days}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

SetClients.defaultProps = {
    clients: [],
};

SetClients.propTypes = {
    clients: PropTypes.objectOf(PropTypes.string),
};
