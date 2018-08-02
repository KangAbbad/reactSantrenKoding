import React from 'react';
import Klinik from './assets/images/klinikkita.jpg';
import Undip from './assets/images/Undip.png';
import Udinus from './assets/images/logo-udinus.png';
import Unisbank from './assets/images/Logo_unisbank.jpg';
import Javavalley from './assets/images/pt-java-valley-technology.png';
import Orderdilla from './assets/images/orderdilla.png';
import LogoG from './assets/images/logoG.png';
import Pemkot from './assets/images/pemkot.png';
import Sandec from './assets/images/sandec-logo.png';
import Smgopengo from './assets/images/smgopengo.png';
import Programmersmg from './assets/images/programmer-semarang.png';
import {
    Container,
    Row,
    Col } from 'reactstrap';

const sponsor = (props) => {
    return(
        <div>
            <section id="sponsor" className="pb-5 border bg-white">
                <Container>
                    <div className="text-center">
                        <h3 className="text-capitalize my-4 pb-2">Sponsor & partner</h3>
                    </div>
                    <Col>
                        <a href="/">
                            <img className="d-block mx-auto" src={ Klinik } alt="Klinik Kita" />
                        </a>
                    </Col>

                    <Row className="align-items-center text-center my-4">
                        <Col>
                            <a href="/">
                                <img src={ Undip } alt="Universitas Diponegoro" />
                            </a>
                        </Col>
                        <Col>
                            <a href="/">
                                <img src={ Udinus } alt="Universitas Dian Nuswantoro" />
                            </a>
                        </Col>
                        <Col>
                            <a href="/">
                                <img src={ Unisbank } alt="Unis Bank" />
                            </a>
                        </Col>
                        <Col>
                            <a href="/">
                                <img src={ Javavalley } alt="PT. Java Valley Technology" />
                            </a>
                        </Col>
                        <Col>
                            <a href="/">
                                <img src={ Orderdilla } alt="Dynamic Learning" />
                            </a>
                        </Col>
                        <Col>
                            <a href="/">
                                <img src={ LogoG } alt="Logo G" />
                            </a>
                        </Col>
                    </Row>
                    <Row className="align-items-center text-center mb-5">
                        <Col>
                            <a href="/">
                                <img src={ Pemkot } alt="Pemkot Semarang" />
                            </a>
                        </Col>
                        <Col>
                            <a href="/">
                                <img src={ Sandec } alt="Sandec" style={{ height: 80 }} />
                            </a>
                        </Col>
                        <Col>
                            <a href="/">
                                <img src={ Smgopengo } alt="Semarang Open Go" style={{ height: 130 }} />
                            </a>
                        </Col>
                        <Col>
                            <a href="/">
                                <img src={ Programmersmg } alt="Programmer Semarang" style={{ height: 50 }} />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default sponsor;