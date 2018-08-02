import React from 'react';
import Poster from './assets/images/poster.png';
import {
    Container,
    Button } from 'reactstrap';

const mondok = (props) => {
    return(
        <div>
            <section id="mondok">
                <Container>
                    <div className="text-center">
                        <h3>Mondok by Santren Koding</h3>
                        <p className="mb-5">Sebuah Kegiatan Belajar Intensif Programming & Al Qur'an Selama 3 Tahun hingga jaminan kerja</p>
                        <a href="/">
                            <img className="py-4" src={ Poster } alt="Poster Santren Koding" />
                        </a>
                        <Button outline color="success" className="d-block my-4 mx-auto">Lihat Seluruh Santren Kilat</Button>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default mondok;