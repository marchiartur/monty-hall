import React, { useState } from 'react';
import './settings.css';
import Layout from '../../components/layout/layout';
import { Typography, Row, Col, Button, Input, notification, Modal } from 'antd';
import Paragraph from 'antd/lib/skeleton/Paragraph';

export default function Settings() {

    const initialStateButtonsCurtains = Array.from({ length: 3 }).map((_, id) => {
        return { id: id + 1, disabled: false }
    });

    const [titles, setTitles] = useState(['Selecione um mico.', 'Selecione outro mico.', 'Selecione o prêmio.']);
    const [imageOne, setImageOne] = useState('');
    const [imageTwo, setImageTwo] = useState('');
    const [imageThree, setImageThree] = useState('');
    const [buttonsCurtains, setButtonsCurtains] = useState(initialStateButtonsCurtains);

    const [beforeSort, setBeforeSort] = useState(true);
    const [imagesSources, setImagesSources] = useState(['', '', '']);

    const [sortedCurtains, setSortedCurtains] = useState([]);
    const [choosedCurtain, setChoosedCurtain] = useState();

    const [showChangeModal, setShowChangeModal] = useState(false);

    const [openedCurtain, setOpenedCurtain] = useState();

    const { Title } = Typography;

    function sortImages() {
        setImagesSources([imageOne, imageTwo, imageThree]);
        hideImagesTitleAndInput();
        let curtains = [1, 2, 3]; // mico, mico, premio
        curtains = shuffle(curtains);
        setSortedCurtains(curtains);
    };

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function hideImagesTitleAndInput() {
        let curtain = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fak5.picdn.net%2Fshutterstock%2Fvideos%2F1009729775%2Fthumb%2F1.jpg&f=1&nofb=1';
        setBeforeSort(false);
        setImageOne(curtain);
        setImageTwo(curtain);
        setImageThree(curtain);
        setTitles(['Cortina 1', 'Cortina 2', 'Cortina 3']);
    };

    function chooseCurtain(position) {
        setChoosedCurtain(position);
    }

    function openCurtain(curtain, positionImageToOpen) {

        if (curtain == 1)
            setImageOne(imagesSources[positionImageToOpen]);
        if (curtain == 2)
            setImageTwo(imagesSources[positionImageToOpen]);
        if (curtain == 3)
            setImageThree(imagesSources[positionImageToOpen]);
    }

    function getMico(curtain) {

        let temporaryArray = [...sortedCurtains];

        temporaryArray.splice(curtain, 1);

        if (temporaryArray[0] === sortedCurtains[2])
            return temporaryArray[1];
        else if (temporaryArray[1] === sortedCurtains[2])
            return temporaryArray[0];

        return temporaryArray[Math.floor(Math.random() * temporaryArray.length)];
    }

    function findCurtainByImagePosition(imagePosition) {
        for (let i = 0; i < 3; i++)
            if (imagePosition === sortedCurtains[i]) return i + 1;
    }

    function handleButtonClick(buttonId) {
        const nextState = buttonsCurtains.map(button => {
            return { ...button, disabled: true };
        });

        setButtonsCurtains(nextState);
        chooseCurtain(buttonId - 1);

        let micoImagePosition = getMico(buttonId - 1);
        let micoCurtainNumber = findCurtainByImagePosition(micoImagePosition);

        openCurtain(micoCurtainNumber, micoImagePosition - 1);

        setOpenedCurtain(micoCurtainNumber);

        notification.warn({ description: `O prêmio não está na cortina ${micoCurtainNumber}` });
        setTimeout(function () { setShowChangeModal(true) }, 2000);
    };

    function changeChooseCurtain(changed) {
        setShowChangeModal(false);

        let curtainPrize = choosedCurtain, curtainLost;

        for (let i = 0; i < 3; i++)
            if (choosedCurtain != sortedCurtains[i] && openedCurtain != sortedCurtains[i])
                curtainLost = i;

        if (changed) {
            curtainPrize = curtainLost;
            curtainLost = choosedCurtain;
        };

        console.log('imagens', sortedCurtains, 'ganhou', curtainPrize, 'perdeu', curtainLost);

        openCurtain(curtainLost + 1, sortedCurtains[curtainLost] - 1);
        notification.error({ description: `Você perdeu a cortina ${curtainLost + 1}` });

        openCurtain(curtainPrize + 1, sortedCurtains[curtainPrize] - 1);
        notification.success({ description: `Você ganhou a cortina ${curtainPrize + 1}` })

    }

    return (
        <Layout>
            <>
                <Title style={{ textAlign: 'center' }}>Vamos Jogar!</Title>
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
                            <img src={imageThree} alt='Imagem 3' style={{ width: '400px' }} /> : <div />
                        }
                    </Col>
                </Row>

                <Row style={{ marginTop: '20px' }} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Button style={center} onClick={() => sortImages()} style={{ display: beforeSort ? 'visible' : 'none' }} >Embaralhar</Button>

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

                <Modal
                    title="Você deseja mudar de cortina?"
                    centered
                    footer={null}
                    closable={false}
                    visible={showChangeModal}
                >
                    <Row>
                        A sua cortina é a Cortina {choosedCurtain + 1}. Deseja mudar para a cortina?
                    </Row>
                    <Row style={{ marginTop: '20px' }}>
                        <Button style={center} onClick={() => changeChooseCurtain(true)}>Sim</Button>
                        <Button style={center} onClick={() => changeChooseCurtain(false)}>Não</Button>
                    </Row>
                </Modal>
            </>
        </Layout>
    );
};

const center = { margin: "0 auto", textAlign: 'center' }

