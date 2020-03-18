
import React from 'react';

import Title from '../home/Title';

import Rectangle from './Rectangle';

import Free from '../from/Free';

import '../../styles/_Repair.scss';

// image -----------


import repair from '../../img/repair/image-repair-3.jpg';

import adrien from '../../img/repair/image-repair-1.jpg';

import unsplash from '../../img/repair/image-repair-2.jpg';


//-------

export default function Repair() {
    return (
        <>
            <section className="repair">
                <Title
                    classis="repair"
                    title="Types Fo Repair"
                />
                <Rectangle
                    classs="repair__rectangle"
                    img={adrien}
                    title="Redecorating"
                    li="Dismantling of old coatings"
                    li2="Wallpapering"
                    li3="Painting walls and ceilings"
                    li4="Laying flooring"
                    li5="Replacing plumbing"
                    li6="Replacing sockets and switches"
                    li7="Replacing doors"
                    btn="from 1800 rub / m2"
                />
                <Rectangle
                    classs="repair__rectangle_"
                    img={unsplash}
                    title="Redecorating"
                    li="Dismantling of old coatings"
                    li2="Wallpapering"
                    li3="Painting walls and ceilings"
                    li4="Laying flooring"
                    li5="Replacing plumbing"
                    li6="Replacing sockets and switches"
                    li7="Replacing doors"
                    btn="from 1800 rub / m2"
                />
                <Rectangle
                    classs="repair__rectangle__"
                    img={repair}
                    title="Redecorating"
                    li="Dismantling of old coatings"
                    li2="Wallpapering"
                    li3="Painting walls and ceilings"
                    li4="Laying flooring"
                    li5="Replacing plumbing"
                    li6="Replacing sockets and switches"
                    li7="Replacing doors"
                    btn="from 1800 rub / m2"
                />
            </section>
            <Free />
        </>
    );
}
