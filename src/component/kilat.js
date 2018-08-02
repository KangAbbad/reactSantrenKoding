import React from 'react';
import Comingsoon from './assets/images/comingsoon.png';
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

const kilat = (props) => {
    return(
        <div>
            <section id="kilat">
                <Container>
                    <h3 className="text-capitalize text-center my-4">Daftar santren kilat koding</h3>
                    <Row>
                        <Col md="4">
                            <Card>
                                <CardImg top src={ Comingsoon } alt="Santren Kilat Koding #1" />
                                <CardBody>
                                    <CardTitle>Santren Kilat #1 (Coming Soon)</CardTitle>
                                    <CardSubtitle className="py-2 mb-2">4 Hari Intensif Laravel</CardSubtitle>
                                    <CardText className="d-flex justify-content-between align-center">
                                        <a href="/" className="text-secondary">by Santren Koding</a>
                                        <span className="align-bottom text-danger">Kuota Terbatas</span>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Button outline color="success" className="d-block my-4 mx-auto">Lihat Seluruh Santren Kilat</Button>{' '}
                </Container>
            </section>

            <hr />
        </div>
    )
}

export default kilat;