import React from 'react';
import Logo from './assets/images/logo.png';

const kegiatan = (props) => {
    return(
        <div>
            <section id="kegiatan" className="my-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 bg-green">
                            <div className="text-center text-white py-4">
                                <h4 className="pb-4 pt-2">Kegiatan</h4>
                                <p>
                                    <i className="fas fa-sign-in-alt fa-sm"></i> Koding 
                                </p>
                                <p>
                                    <i className="fas fa-sign-in-alt fa-sm"></i> Belajar Agama dan Al Quran
                                </p>
                                <p>
                                    <i className="fas fa-sign-in-alt fa-sm"></i> Pendidikan Karakter
                                </p>
                            </div>
                        </div>
                        <div className="col-6 border bg-white">
                            <div className="text-center pt-4 pb-5">
                                <img src={ Logo } height="100" alt="Logo" />
                                <blockquote className="blockquote mb-0">
                                    <h4 className="mb-4 pb-2">"Memberi Manfaat Untuk Ummat"</h4>
                                    <p className="mb-0">-Santren Koding-</p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr />
        </div>
    )
}

export default kegiatan;