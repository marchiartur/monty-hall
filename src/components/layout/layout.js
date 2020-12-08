import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

export default function Layout({ children }) {
    return <Wrapper>{children}</Wrapper>;
};

Layout.propTypes = {
    children: PropTypes.element.isRequired,
};