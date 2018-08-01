import React from 'react';
import Poster from './assets/images/poster.png';

const mondok = (props) => {
    return(
        <div>
            <section id="mondok">
                <div className="container">
                    <div className="text-center">
                        <h3>Mondok by Santren Koding</h3>
                        <p className="mb-5">Sebuah Kegiatan Belajar Intensif Programming & Al Qur'an Selama 3 Tahun hingga jaminan kerja</p>
                        <a href="/">
                            <img className="py-4" src={ Poster } alt="Poster Santren Koding" />
                        </a>
                        <button type="button" className="btn btn-outline-success d-block my-4 mx-auto">Lihat Seluruh Santren Kilat</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default mondok;