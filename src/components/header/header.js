import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <HeaderDiv>
                <HeaderNav>
                    <Logo className='logo-container'>
                        <NavLink to='/'>
                            <a style={{ color: 'light blue' }}>
                                Monty Hall Paradox
                            </a>
                        </NavLink>
                    </Logo>
                    <NavLinkContainer className='navlinks-container'>
                        <ul style={{ fontSize: '30px', fontWeight: 'lighter', margin: '0', marginLeft: '40px' }}>
                            <ListItem>
                                <NavLink to='/jogar'>
                                    <ItemNavLink>Jogar</ItemNavLink>
                                </NavLink>
                            </ListItem>
                            <ListItem>
                                <NavLink to='/creditos'>
                                    <ItemNavLink>Créditos</ItemNavLink>
                                </NavLink>
                            </ListItem>
                        </ul>
                    </NavLinkContainer>
                </HeaderNav>
            </HeaderDiv>
        </>
    )
};

const Logo = styled.div`
float: left;
margin-left: 2rem;
font-family: Courier, monospace;
font-size: 40px;
font-weight: bold;
`

const HeaderDiv = styled.div`
display: block;
`

const HeaderNav = styled.nav`
padding: 0px 1rem; 
height: auto;
justify-content: center;
border-bottom: 1rem solid black;
`

const NavLinkContainer = styled.div`
display: flex;
height: auto;
padding: 8px;
`

const ListItem = styled.li`
flex: 0 0 auto;
display: inline;
padding: 0px 15px;
`

const ItemNavLink = styled.a`
position: relative;
display: inline-block;
color: black;
&:hover {
    color: light blue;
}`
