import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import Header from '../header/header';

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <Wrapper>{children}</Wrapper>
        </>
    )
};

Layout.propTypes = {
    children: PropTypes.element.isRequired,
};