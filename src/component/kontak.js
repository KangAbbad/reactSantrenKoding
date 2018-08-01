import React from 'react';

const kontak = (props) => {
    return(
        <div>
            <section id="kontak" className="py-5 text-center">
                <div className="container">
                    <h3 className="mb-4 pb-2">Kontak</h3>
                    <p className="m-0">
                        <i className="fas fa-phone fa-sm"></i> 082225111587</p>
                    <p className="mb-4">
                        <i className="fas fa-envelope fa-sm"></i> santrenkoding@gmail.com</p>
                    <p className="m-0">
                        <i className="fas fa-map-marker-alt fa-sm"></i> Titik Ruang Space,</p>
                    <p className="mb-2">
                        Jl. Ngesrep Tim. III No.67, Sumurboto, Banyumanik,
                        <br /> Kota Semarang, Jawa Tengah 50269
                    </p>
                </div>
            </section>
        </div>
    )   
}

export default kontak;