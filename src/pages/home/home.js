import React from 'react';
import './home.css';
import Layout from '../../components/layout/layout.js';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <Layout>
            <h1>Paradoxo de Monty Hall</h1>
            <NavLink to='/jogar'>
                <Button>
                    Iniciar o jogo
                </Button>
            </NavLink>
        </Layout>
    )
}