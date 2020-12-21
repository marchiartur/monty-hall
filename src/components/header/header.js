import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Header() {

    return (
        <>
            <HeaderDiv>
                <HeaderNav>
                    <NavLinkContainer className='navlinks-container'>
                        <ul style={{ fontSize: '29px', fontWeight: 'lighter', marginLeft: '6px', margin: '0' }}>
                            <ListItem>
                                <NavLink to='/'>
                                    <ItemNavLink>Página Inicial</ItemNavLink>
                                </NavLink>
                            </ListItem>
                            <ListItem>
                                <NavLink to='/jogar'>
                                    <ItemNavLink>Jogar</ItemNavLink>
                                </NavLink>
                            </ListItem>
                        </ul>
                    </NavLinkContainer>
                </HeaderNav>
            </HeaderDiv>
        </>
    )
};

const HeaderDiv = styled.div`
display: block;
left: 0px;
right: 0px;
top: 0px;
z-index: 9;
`
const HeaderNav = styled.nav`
display: flex;
padding: 10px 2rem; 
height: auto;
justify-content: center;
border-bottom: 1rem solid black;
`

const NavLinkContainer = styled.div`
display: flex;
height: auto;
margin: auto;
align-items: center;
`

const ListItem = styled.li`
flex: 0 0 auto;
display: inline;
padding: 0px 15px;
`

const ItemNavLink = styled.div`
position: relative;
display: inline-block;
color: black;
&:hover {
    color: light blue;
}`

