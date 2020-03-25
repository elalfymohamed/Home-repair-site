/* eslint-disable react/no-array-index-key */
import React from 'react';

import Title from '../home/Title';

import data from './Data';

import SetClients from './SetClients';

import Detail from '../detail/Detail';

import '../../styles/_OurClients.scss';

export default function OurClients() {
    return (
        <>
            <section className="OurClients">
                <Title classis="OurClients" title="our clients" info="80% of our customers recommend us to their" br="friends and family." />
                {data.map((p, i) => <SetClients key={i} clients={p} />)}
            </section>
            <Detail />
        </>
    );
}
