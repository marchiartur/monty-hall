import React from 'react';
import styled from 'styled-components';


export default function Footer(){
    return(
        <FooterContainer>
            <p style={{marginBottom: '0'}}>
                Criado por <a href='https://github.com/marchiartur' target="_blank" >@marchiartur</a>
            </p>
        </FooterContainer>
    )
};

const FooterContainer = styled.div`
display: flex;
padding: 20px 2rem; 
height: auto;
border-top: 1rem solid black;
justify-content: center;
`