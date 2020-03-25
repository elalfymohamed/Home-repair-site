/* eslint-disable import/no-extraneous-dependencies */
import Styled from 'styled-components';


import { Instagram } from '@styled-icons/entypo-social/Instagram';

import { EmailOutline } from '@styled-icons/evaicons-outline/EmailOutline';

import { Facebook } from '@styled-icons/boxicons-logos/Facebook';


export const Grid = Styled.div`
grid-column: 2/ 2;
grid-row: 3;

`;

export const Info = Styled.p`
font-family: Yeseva One;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 28px;
text-align: center;
text-transform: uppercase;
color:rgb(233, 178, 90);

`;

export const Icon = Styled.div`
display: flex; 
flex-direction: row;
flex-wrap: wrap;
height: unset;
width: unset;
justify-content: center;

`;

export const StyleEmail = Styled.div`
height: unset;
width: unset;
margin: 0.375rem;
`;

export const IconEmail = Styled.div`
position: relative;
bottom: 2px;
align-self: center;
-webkit-box-align: center;
align-items: center;
display: inline-flex;
filter: none;
cursor: unset;
vertical-align: unset;
height: unset;
width: unset;
`;


export const SvgInstagram = Styled.div`
align-self: center;
-webkit-box-align: center;
align-items: center;
display: inline-flex;
filter: none;
cursor: unset;
vertical-align: unset;
height: unset;
width: unset;
`;


export const StyleInstagram = Styled.div`
height: unset;
width: unset;
margin: 0.375rem;


`;
export const IconInstagram = Styled(Instagram)`
width: 25px;
color: #eeeeee;

&:hover {
color: #E3B873;
}

`;

export const IconEmailOutline = Styled(EmailOutline)`
width: 30px;
color: #eeeeee;

&:hover {
color: #E3B873;
}
`;

export const IconFacebook = Styled(Facebook)`
width: 30px;
color: #eeeeee;

&:hover {
color: #E3B873;
}
`;

export const StyleFacebook = Styled.div`
height: unset;
width: unset;
margin: 0.375rem;
`;

export const SvgFacebook = Styled.div`
position: relative;
bottom: 2px;
align-self: center;
-webkit-box-align: center;
align-items: center;
display: inline-flex;
filter: none;
cursor: unset;
vertical-align: unset;
height: unset;
width: unset;
`;
