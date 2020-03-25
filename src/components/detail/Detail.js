import React from 'react';

import styled from 'styled-components';

import Form from './FormDetail';

import Address from './Address';

import Map from './Maps';


import '../../styles/_Detail.scss';

export default function Detail() {
    const GoogleMap = styled.div`
    grid-column: 2/2;
        grid-row: 4/4;
        
    `;
    const StyledDiv = styled.div`
    grid-column: 2/2;
        grid-row: 5/5;
    
    `;
    const StyledH3 = styled.h3`
    text-align: center;
    font-size: 12px;
    line-height: 25px;
    color: rgb(233, 178, 90);
    margin-top: 19px;
    margin-bottom: 0;
    font-family: Yeseva One;
    font-style: normal;
    font-weight: normal;
    `;

    const StyledH4 = styled.h4`
    text-align: center;
    font-size: 12px;
    line-height: 25px;
    color: rgb(233, 178, 90);
    margin:0;
    font-family: Yeseva One;
    font-style: normal;
    font-weight: normal;
    `;
    return (
        <>
            <footer className="Detail">
                <div className="detail__" />
                <div className="detail__svg">
                    <div className="svg" role="img" />
                </div>
                <div className="detail__home">
                    <div className="detail__image" role="img" />
                </div>
                <div className="form__section">
                    <div className="container">
                        <div className="box">
                            <h2 className="title__box">have any questions?</h2>
                            <Form />
                        </div>
                    </div>
                </div>
                <Address />
                <GoogleMap>
                    <Map />
                </GoogleMap>
                <StyledDiv>
                    <div>
                        <StyledH3>
                            site design / logo © 2020 Inc
                        </StyledH3>
                    </div>
                    <div>
                        <StyledH4>
                            Created by © .
                        </StyledH4>
                    </div>
                </StyledDiv>
            </footer>
        </>
    );
}
