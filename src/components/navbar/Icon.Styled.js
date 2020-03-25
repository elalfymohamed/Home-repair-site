/* eslint-disable import/no-extraneous-dependencies */

import Styled from 'styled-components';

import { PhoneCall } from '@styled-icons/evaicons-solid/PhoneCall';

import { EmailOutline } from '@styled-icons/evaicons-outline/EmailOutline';

import { Map } from '@styled-icons/boxicons-solid/Map';


export const NavIcon = Styled.div`
grid-column: 2;
grid-row: 3/3;
`;

export const ListContact = Styled.ul`
display: flex;
list-style: none;
padding: 0;
margin: 0;
-webkit-box-pack: center;
justify-content: center;
`;

export const ListIconLi = Styled.li`
margin-left: 16px;
`;


export const ListIcon = Styled.span`
display: flex;
justify-content: center;

`;
export const Call = Styled(PhoneCall)`
height: 2rem;


`;
export const Email = Styled(EmailOutline)`
height: 2rem;

`;
export const GoogleMaps = Styled(Map)`
height: 2rem;

`;
