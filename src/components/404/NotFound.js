import React, { useEffect, useState } from 'react';

import Helmet from 'react-helmet';

import Not from '../../img/404/ERROR_original_opt.jpeg';


import {
    StyledMain, Image, Text, StyledImage, TextH1, TextP, TextH5,
} from './NotFound.Styled';

export default function NotFound() {
    const [counter, setCounter] = useState(10);

    useEffect(() => {
        const timer = counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [counter]);
    return (
        <>
            <Helmet>
                <meta httpEquiv="refresh" content="10; url =http://localhost:8080/" />
                <meta name="description" content="NotFound" />
                <title itemProp="name" lang="en">NotFound</title>
                <body className="NotFound" />
                <style type="text/css">
                    {`
        body {
            background-color: #FFFFFF;
        }
    `}
                </style>
            </Helmet>
            <StyledMain>
                <StyledImage>
                    <Image src={Not} alt="NotFound" />
                </StyledImage>
                <Text>
                    <TextH1>Oops... Page Not Found!</TextH1>
                    <TextP>Sorry, but the page you were trying to view does not exist</TextP>
                    <TextH5>
                        Wait
                        {' '}
                        {counter}
                        {' '}
                        minutes and it will Home page
                    </TextH5>
                </Text>
            </StyledMain>
        </>
    );
}
