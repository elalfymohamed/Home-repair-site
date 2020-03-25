import React from 'react';

import { Link } from 'react-router-dom';

import {
    Grid, Info, Icon, StyleEmail, StyleInstagram, IconEmailOutline,
    IconInstagram, IconEmail, SvgInstagram, IconFacebook, StyleFacebook, SvgFacebook,
} from './Address.Styled';

export default function Address() {
    return (
        <Grid className="address">
            <div>
                <Info className="title">
                    Rostov-on-Don, Nansen St., 239 Shopping Center
                    <br />
                    Decorum Tel +7 (928) 768 32 29
                </Info>
            </div>
            <Icon className="icon">
                <StyleFacebook className="icon__Facebook">
                    <Link aria-label="Design on Facebook" to="/" rel="noopener noreferrer" target="_blank" title="Facebook">
                        <SvgFacebook>
                            <span>
                                <IconFacebook />
                            </span>
                        </SvgFacebook>
                    </Link>
                </StyleFacebook>
                <StyleInstagram className="icon__instagram">
                    <Link aria-label="Design on Instagram" to="/" rel="noopener noreferrer" target="_blank" title="Instagram">
                        <SvgInstagram>
                            <span>
                                <IconInstagram />
                            </span>
                        </SvgInstagram>
                    </Link>
                </StyleInstagram>
                <StyleEmail className="icon__email">
                    <Link aria-label="Design on email" to="/" rel="noopener noreferrer" target="_blank" title="Email">
                        <IconEmail>
                            <span>
                                <IconEmailOutline />
                            </span>
                        </IconEmail>
                    </Link>
                </StyleEmail>
            </Icon>
        </Grid>
    );
}
