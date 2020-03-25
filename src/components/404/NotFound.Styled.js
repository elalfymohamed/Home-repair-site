/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';


export const StyledMain = styled.main`
display: grid;
grid-template-columns: auto auto;
grid-template-rows: auto;

`;


export const StyledImage = styled.div`
grid-column: 1/span 2;
grid-row:1/1;

`;


export const Image = styled.img`
height: 100%;
width: 100%;

`;

export const Text = styled.div`
grid-column: 1/1;
grid-row:1/1;
position: relative;
position: relative;
top: 45%;
height: 20%;
margin-left: 55px;

`;

export const TextH1 = styled.h1`
text-align:center;
color: #000000;
font-size:50px;
line-height:20px;
`;

export const TextP = styled.p`
text-align:center;
color: #000000;
font-family: Yeseva One;
font-style: normal;
font-weight: normal;
font-size:22px;
line-height:30px;
`;

export const TextH5 = styled.h5`
text-align:center;
color: #000000;
font-family: Yeseva One;
font-style: normal;
font-weight: normal;
font-size:13px;
line-height:22px;
`;
