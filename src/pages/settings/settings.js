import React, { useState } from 'react';
import './settings.css';
import Layout from '../../components/layout/layout';
import { Row, Col, Button, Input, notification } from 'antd';
import gifCurtain from '../../images/curtain.gif';
import frameCurtain from '../../images/frame_curtain.jpg';

export default function Settings() {

    const initialStateButtonsCurtains = Array.from({ length: 3 }).map((_, id) => {
        return { id: id + 1, disabled: false }
    });

    const [titles, setTitles] = useState(['Selecione um mico.', 'Selecione outro mico.', 'Selecione o prêmio.']);
    const [choosedCurtain, setChoosedCurtain] = useState();
    const [openedCurtain, setOpenedCurtain] = useState();
    const [gameMessages, setGameMessages] = useState(['Escolha uma das três cortinas', 'Você quer mudar sua escolha?', 'Clique em uma das cortinas para jogar novamente.']);
    const [gameStage, setGameStage] = useState(0);
    const [imageOne, setImageOne] = useState('');
    const [imageTwo, setImageTwo] = useState('');
    const [imageThree, setImageThree] = useState('');
    const [buttonsCurtains, setButtonsCurtains] = useState(initialStateButtonsCurtains);

    const [beforeSort, setBeforeSort] = useState(true);
    const [imagesSources, setImagesSources] = useState(['', '', '']);

    const [sortedCurtains, setSortedCurtains] = useState([]);


    function sortImages() {
        setImagesSources([imageOne, imageTwo, imageThree]);
        hideImagesTitleAndInput();
        let curtains = [1, 2, 3];
        curtains = shuffle(curtains);
        setSortedCurtains(curtains);
        setGameStage(1);
    };

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function hideImagesTitleAndInput() {
        setBeforeSort(false);
        setImageOne(frameCurtain);
        setImageTwo(frameCurtain);
        setImageThree(frameCurtain);
        setTitles(['Cortina 1', 'Cortina 2', 'Cortina 3']);
    };

    function chooseCurtain(position) {
        setChoosedCurtain(position);
    }

    function openCurtain(curtain, positionImageToOpen) {
        if (curtain == 1) {
            setImageOne(gifCurtain);
            setTimeout(function () {
                setImageOne(imagesSources[positionImageToOpen]);
            }, 2500);
        }
        if (curtain == 2) {
            setImageTwo(gifCurtain);
            setTimeout(function () {
                setImageTwo(imagesSources[positionImageToOpen]);
            }, 2500);
        }
        if (curtain == 3) {
            setImageThree(gifCurtain);
            setTimeout(function () {
                setImageThree(imagesSources[positionImageToOpen]);
            }, 2500);
        }

        return curtain;
    }

    function getMico(curtain) {

        let temporaryArray = [...sortedCurtains];

        temporaryArray.splice(curtain, 1);


        if (temporaryArray[0] === 3)
            return temporaryArray[1];
        else if (temporaryArray[1] === 3)
            return temporaryArray[0];

        return temporaryArray[Math.floor(Math.random() * temporaryArray.length)];
    }

    function findCurtainByImagePosition(imagePosition) {
        for (let i = 0; i < 3; i++)
            if (imagePosition === sortedCurtains[i]) return i + 1;
    }

    function handleButtonClick(buttonId) {
        if (gameStage === 2) {
            changeChooseCurtain(buttonId);
            return;
        } else if (gameStage === 3) {
            setGameStage(0);
            setBeforeSort(true);
            setImageOne(imagesSources[0]);
            setImageTwo(imagesSources[1]);
            setImageThree(imagesSources[2]);
            setTitles(['Cortina 1', 'Cortina 2', 'Cortina 3']);
            sortImages();
            setButtonsCurtains(initialStateButtonsCurtains);
            return;
        }

        chooseCurtain(buttonId - 1);

        let micoImagePosition = getMico(buttonId - 1);
        let micoCurtainNumber = findCurtainByImagePosition(micoImagePosition);

        let openedCurtain = openCurtain(micoCurtainNumber, micoImagePosition - 1);

        setOpenedCurtain(micoImagePosition);

        const nextState = buttonsCurtains.map(button => {
            if (openedCurtain != button.id) return button;
            return { ...button, disabled: true };
        });
        setButtonsCurtains(nextState);

        let arrayMessages = gameMessages;
        arrayMessages[1] = `Você quer mudar sua escolha da cortina ${micoCurtainNumber}?`
        setGameMessages(arrayMessages);
        notification.warn({ description: `O prêmio não está na cortina ${micoCurtainNumber}` });

        setGameStage(2);
    };

    function changeChooseCurtain(buttonId) {
        let curtainPrize = choosedCurtain, curtainLost;

        for (let i = 0; i < 3; i++)
            if (choosedCurtain != i && openedCurtain != sortedCurtains[i]) {
                curtainLost = i;
                break;
            }

        if (buttonId - 1 != choosedCurtain) {
            curtainPrize = curtainLost;
            curtainLost = choosedCurtain;
        };

        openCurtain(curtainLost + 1, sortedCurtains[curtainLost] - 1);
        notification.error({ description: `Você perdeu a cortina ${curtainLost + 1}` });

        openCurtain(curtainPrize + 1, sortedCurtains[curtainPrize] - 1);
        notification.success({ description: `Você ganhou a cortina ${curtainPrize + 1}` });

        setGameStage(3);
    };

    return (
        <Layout>
            <>
                <Row style={{ marginBottom: '50px' }}>
                    <h1 style={center}>
                        {gameStage === 1 ? gameMessages[0] : gameStage === 2 ? gameMessages[1] : gameStage === 3 ? gameMessages[2] : 'Insira a URL das imagens dos micos e do prêmio.'}
                    </h1>
                </Row>

                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col id='column1' style={center}>
                        <h2>{titles[0]}</h2>
                        <Input id='inputImagem1' style={{ display: beforeSort ? 'visible' : 'none' }} placeholder='Cole o link de uma imagem.' onChange={(event) => setImageOne(event.target.value)} />
                        {imageOne ?
                            <img src={imageOne} alt='Imagem 1' style={{ width: '400px' }} /> : <div />
                        }
                    </Col>

                    <Col id='column2' style={center} >
                        <h2>{titles[1]}</h2>
                        <Input id='inputImagem2' style={{ display: beforeSort ? 'visible' : 'none' }} placeholder='Cole o link de uma imagem.' onChange={(event) => setImageTwo(event.target.value)} />
                        {imageTwo ?
                            <img id='image2' src={imageTwo} alt='Imagem 1' style={{ width: '400px' }} /> : <div />
                        }
                    </Col>

                    <Col id='column3' style={center} >
                        <h2>{titles[2]}</h2>
                        <Input id='inputImagem3' style={{ display: beforeSort ? 'visible' : 'none' }} placeholder='Cole o link de uma imagem.' onChange={(event) => setImageThree(event.target.value)} />
                        {imageThree ?
                            <img src={imageThree} alt='Imagem 3' style={{ width: '400px' }} loading='lazy' /> : <div />
                        }
                    </Col>
                </Row>

                <Row style={{ marginTop: '20px' }} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {
                        beforeSort ? 
                        <Col style={{ display: beforeSort === true ? 'visible' : 'none' }, center}>
                            <Button type='primary' size='large' style={center} onClick={() => sortImages()} >Jogar</Button>
                        </Col> : ''
                    }

                    {beforeSort ? ' ' : buttonsCurtains.map(button => (
                        <Col key={button.id} style={center}>
                            <Button
                                onClick={() => handleButtonClick(button.id)}
                                disabled={button.disabled}
                                style={{ display: beforeSort ? 'none' : 'visible' }}
                            >
                                Escolher cortina {button.id}
                            </Button>
                        </Col>))}
                </Row>
            </>
        </Layout>
    );
};

const center = { margin: "0 auto", textAlign: 'center' };
