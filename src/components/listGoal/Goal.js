import React from 'react';

import SliderGoal from './SliderGoal';

import data from './Data';

import image from './Image';

import info from './Data2';

import Team from '../ourTeam/Team';

import '../../styles/_Goal.scss';

export default function Goal() {
    return (
        <>
            <section className="goal">
                <div className="goal__info">
                    <h2 className="Goal__Title">How we are working</h2>
                    <div className="goal__div">
                        <h4 className="goal__h4">
                            6 steps to
                            <br />
                        the goal
                        </h4>
                        <samp className="goal__after" />
                    </div>
                </div>
                <SliderGoal room={data} image={image} info={info} />
            </section>
            <Team />
        </>
    );
}
