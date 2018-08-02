import React from 'react';
import Kajiankoding3 from './assets/images/kajiankoding3.png';
import Kajiankoding2 from './assets/images/kajiankoding2.png';
import Kajiankoding1 from './assets/images/kajiankoding1.png';
import { 
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button } from 'reactstrap';

const kajian = (props) => {
    return(
        <div>
            <section id="kajian">
                <h2 className="text-capitalize text-center my-4 py-2">Daftar kajian koding rutin</h2>
                <Container>
                    <Row>
                        <Col md="4">
                            <Card>
                                <CardImg top width="100%" src={ Kajiankoding3 } alt="Kajian Koding #3" />
                                <CardBody>
                                    <CardTitle>Kajian Koding #3</CardTitle>
                                    <CardSubtitle className="py-2 mb-2">ReactJS dan Firebase Auth/Hosting</CardSubtitle>
                                    <CardText className="d-flex justify-content-between align-center">
                                        <a href="/" className="text-secondary">by Santren Koding</a>
                                        <span className="align-bottom text-danger">Kuota Terbatas</span>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card>
                                <CardImg top width="100%" src={ Kajiankoding2 } alt="Kajian Koding #2" />
                                <CardBody>
                                    <CardTitle>Kajian Koding #2</CardTitle>
                                    <CardSubtitle className="py-2 mb-2">html, css, bootstrap dasar</CardSubtitle>
                                    <CardText className="d-flex justify-content-between align-center">
                                        <a href="/" className="text-secondary">by Santren Koding</a>
                                        <span className="align-bottom text-danger">Kuota Terbatas</span>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card>
                                <CardImg top width="100%" src={ Kajiankoding1 } alt="Kajian Koding #1" />
                                <CardBody>
                                    <CardTitle>Kajian Koding #1</CardTitle>
                                    <CardSubtitle className="py-2 mb-2">Belajar Laravel Dasar</CardSubtitle>
                                    <CardText className="d-flex justify-content-between align-center">
                                        <a href="/" className="text-secondary">by Santren Koding</a>
                                        <span className="align-bottom text-danger">Kuota Terbatas</span>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Button outline color="success" className="d-block my-4 mx-auto">Lihat Seluruh Kajian Koding</Button>{' '}
                </Container>
            </section>

            <hr />
        </div>
    )
}

export default kajian;