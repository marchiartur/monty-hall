import React, { useState } from 'react';
import './settings.css';
import Layout from '../../components/layout/layout';
import { Typography, Row, Col, Button, Input } from 'antd';

export default function Settings() {

    const { Title } = Typography;

    const [imageOne, setImageOne] = useState('');
    const [imageTwo, setImageTwo] = useState('');
    const [imageThree, setImageThree] = useState('');

    // esconder imagens
    // embaralhar imagens
    // escolher uma porta
    // sortear uma porta do mico
    // perguntar se deseja trocar de porta
    // abrir a porta desejada

    function sortImages() {

    }

    return (
        <Layout>
            <>
                <Title style={{ textAlign: 'center' }}>Vamos Jogar!</Title>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col style={center} >
                        <h2>Selecione um mico.</h2>
                        <Input className='imagem1' placeholder='Cole o link de uma imagem.' onChange={(event) => setImageOne(event.target.value)} />
                        {imageOne ?
                            <img src={imageOne} alt='Imagem 1' style={{ width: '400px' }} /> : <div />
                        }
                    </Col>

                    <Col style={center} >
                        <h2>Selecione outro mico.</h2>
                        <Input className='imagem2' placeholder='Cole o link de uma imagem.' onChange={(event) => setImageTwo(event.target.value)} />
                        {imageTwo ?
                            <img className='image2' src={imageTwo} alt='Imagem 1' style={{ width: '400px' }} /> : <div />
                        }
                    </Col>

                    <Col style={center} >
                        <h2>Selecione o prêmio.</h2>
                        <Input className='imagem3' placeholder='Cole o link de uma imagem.' onChange={(event) => setImageThree(event.target.value)} />
                        {imageThree ?
                            <img src={imageThree} alt='Imagem 3' style={{ width: '400px' }} /> : <div />
                        }
                    </Col>
                </Row>
                <Row style={{ marginTop: '20px' }}>
                    <Button style={center} onClick={() => sortImages()}>Embaralhar</Button>
                </Row>
            </>
        </Layout>
    );
};

const center = { margin: "0 auto", textAlign: 'center' }

