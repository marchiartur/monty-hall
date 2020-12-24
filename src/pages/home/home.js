import React from 'react';
import './home.css';
import Layout from '../../components/layout/layout.js';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ListGoat from '../../images/animal-kingdom.svg';

export default function Home() {
    return (
        <Layout>
            <ParagraphContainer>
                <h1>Paradoxo de Monty Hall</h1>
                <p>
                    O Paradoxo de Monty Hall é um problema matemático que surgiu a partir de um concurso televisivo dos Estados Unidos chamado Let’s Make a Deal, exibido na década de 1970.
                </p>
                <p>
                    O jogo consistia no seguinte: Monty Hall, o apresentador, apresentava três portas aos concorrentes. Atrás de uma delas estava um prêmio (um carro) e, atrás das outras duas, dois bodes.
                </p>
                <ol>
                    <ListItem>
                        Na 1.ª etapa o concorrente escolhe uma das três portas (que ainda não é aberta);
                    </ListItem>
                    <ListItem>
                        Na 2.ª etapa, Monty abre uma das outras duas portas que o concorrente não escolheu, revelando que o carro não se encontra nessa porta e revelando um dos bodes;
                    </ListItem>
                    <ListItem>
                        Na 3.ª etapa Monty pergunta ao concorrente se quer decidir permanecer com a porta que escolheu no início do jogo ou se ele pretende mudar para a outra porta que ainda está fechada para então a abrir. Agora, com duas portas apenas para escolher — pois uma delas já se viu, na 2.ª etapa, que não tinha o prêmio — e sabendo que o carro está atrás de uma das restantes duas, o concorrente tem que tomar a decisão.
                    </ListItem>
                </ol>

                <NavLink to='/jogar'>
                    <Button type='primary' size='large'>
                        Iniciar o jogo
                    </Button>
                </NavLink>
            </ParagraphContainer>
        </Layout>
    )
};


const ParagraphContainer = styled.div`
margin: auto;
width: 50%;
`

const ListItem = styled.li`
margin-left: 1rem;
margin-bottom: 1rem;
list-style: url(${ListGoat});
list-style-image-size: 20px;
`