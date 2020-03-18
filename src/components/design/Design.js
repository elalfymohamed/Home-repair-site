import React from 'react';

import Title from '../home/Title';

import ProjectList from './ProjectList';

import '../../styles/_Design.scss';

export default function Design() {
    return (
        <section className="design">
            <Title
                classis="design"
                title="design project"
                info="Design project not only helps to make the repair of your apartment more modern,"
                br=" but also significantly reduces the cost of materials and reduces the time of repair work."
            />
            {' '}
            <ProjectList />
        </section>
    );
}
