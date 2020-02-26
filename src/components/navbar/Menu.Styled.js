/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledMenu = styled.nav`
display: grid;
grid-template-columns: auto 580px;

/* grid-template-columns: auto 800px; */

grid-template-rows: 50px auto 90px;
flex-direction: column;
justify-content: center;
background: #000000;
transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
height:100%;
width: 100%;
padding: 0;
position: absolute;
top: 0;
left: 0;
transition: transform 0.3s ease-in-out;
overflow: hidden;
z-index: 10;


a {
font-size: 1rem;
text-transform: uppercase;
/* font-weight: bold; */
letter-spacing: 0.5rem;
color: #EFFFFA;
text-decoration: none;
transition: color 0.3s linear;
display: block;


&:hover {
color: #E3B873;
}
}

.main__title{
grid-column: 2;
grid-row: 1;
font-size: 25px;
padding: 2px 0 0;
text-align: center;


width: max-content;
position: relative;
top: 0;
left: 50%;
h3{
margin: 0;
}
}

.main__nav{
grid-column: 2;
grid-row: 2/2;


.main__nav__ul{
text-align: center;
position: absolute;
/* top: 200px; */
/* right: 285px; */
top: 10%;
right: 11%;
padding: 0;

a{
/* padding: 1.5rem 0; */
padding: 1rem 0;
font-size: 1.5rem;
}
}
}

.main__nav__img{
height: 100%;
position: relative;
overflow: hidden;
width: 100%;
grid-column: 1;
grid-row: 1/span 3;

figure{
overflow: hidden;
margin: 0;   
width: 100%;
display: flex;
}

.main__nav__img__{
filter: grayscale(100%);
transition: .3s ease-in-out;
transform: scale(1.1);
height: 50%;

img{
width: 100%;
height: 100%;
}

&:hover{
filter: grayscale(0);
transform: scale(1);
}
}

.main__nav__img_{
filter: grayscale(100%);
transition: all .3s ease-out;
transform: scale(1.1);
height: 50%;

img{
width: 100%;
height: 100%;
}

&:hover{
filter: grayscale(0);
transform: scale(1);
}
}
}
.active{
color: #E3B873;

&:hover{
color: #eeeeee;
}
}
.main__icon{
grid-column: 2;
grid-row: 3/3;

}

.list__contact{
display: flex;
text-align: center;
list-style: none;
/* padding: 0; */
/* margin: 0;    */
justify-content: center;
position: relative;
bottom: 20px;
}

.list__icon{
height: 2rem;
width: 3em;

}

.list__media{
height: 2rem;
width: 3em;
}

`;
