import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import styled from 'styled-components';
import Typography from '../styles/Typography';

const SiteBorderStyles = styled.div`
    max-width: 1000px;
    margin: 12rem auto 4rem auto;
    padding: 5px;
    //background: white;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.44);
    @media(max-width: 1100px) {
        margin-left: 1.5rem;
        margin-right: 1.5rem;
    }
    @media(max-width: 700px) {
        margin-top: 10rem;
    }
`;

const ContentStyles = styled.div`
    background: white;
    padding: 2rem;
`;

export default function Layout({ children }) {
    return (
        <>
            <GlobalStyles />
            <Typography />
            <SiteBorderStyles>
                <ContentStyles>
                    <Nav />
                    {children}
                    <Footer />
                </ContentStyles>
            </SiteBorderStyles>
        </>
    );
}