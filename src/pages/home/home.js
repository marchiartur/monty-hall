import React from 'react';
import './home.css';
import Layout from '../../components/layout/layout.js';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <Layout>
            <h1>Paradoxo de Monty Hall</h1>
            <p>O problema de Monty Hall, também conhecido por paradoxo de Monty Hall é um problema matemático e paradoxo que surgiu a partir de um concurso televisivo dos Estados Unidos chamado Let’s Make a Deal, exibido na década de 1970.</p>
            <NavLink to='/jogar'>
                <Button type='primary' size='large'>
                    Iniciar o jogo
                </Button>
            </NavLink>
        </Layout>
    )
}