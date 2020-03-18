/* eslint-disable react/no-array-index-key */
import React from 'react';

import Title from '../home/Title';

import data from './DataTeam';

import SetTeam from './SetTeam';

import OurClients from '../ourClients/OurClients';

import '../../styles/_Team.scss';

export default function Team() {
    return (
        <>
            <section className="Team">
                <Title
                    classis="team"
                    title="Our team"
                    info="Our team has helped to become happier for more than"
                    br="500 families and we are not going to stop"
                />
                {data.map((team, i) => <SetTeam key={i} team={team} />)}
                <div className="description">
                    <div className="line" />
                    <p className="p">
                        Each employee of our company is a qualified full-time specialist
                        <br />
            with work experience of 6 years.
                        <br />
            We do not have laborers and guest workers, each employee carries out
                        <br />
            work corresponding to his specialty.
                    </p>
                </div>
                <div className="substrate" aria-hidden="true" />
            </section>
            <OurClients />
        </>
    );
}
