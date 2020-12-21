import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import Header from '../header/header';
import Footer from '../footer/footer';

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <Wrapper>{children}</Wrapper>
            <Footer />
        </>
    )
};

Layout.propTypes = {
    children: PropTypes.element.isRequired,
};