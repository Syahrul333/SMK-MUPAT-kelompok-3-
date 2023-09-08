import React from "react";
import {
    MDBCarousel,
    MDBCarouselItem,
} from "mdb-react-ui-kit"
import RiverWalkImage from "../../assets/riverwalk.jpg"
import RiverWalkImage1 from "../../assets/riverwalk1.jpg"
import RiverWalkImage2 from "../../assets/riverwalk2.jpg"
import "../../style/margin.css"

function RiverWalk() {
    return (
        <div>
            <MDBCarousel showControls>
                <MDBCarouselItem
                    className='w-100 d-block'
                    src={RiverWalkImage}
                    alt='...'
                    style={{height: '500px', width:'500px', objectFit: 'cover'}}
                    />
                <MDBCarouselItem
                    className='w-100 d-block'
                    src={RiverWalkImage1}
                    alt='...'
                    style={{height: '500px', width:'500px', objectFit: 'cover'}}
                    />
                <MDBCarouselItem
                    className='w-100 d-block'
                    src={RiverWalkImage2}
                    alt='...'
                    style={{height: '500px', width:'500px', objectFit: 'cover'}}
                />
            </MDBCarousel>

            <div className="d-flex">
                <div className="pt-4 col-8 font custom-div">
                    <h4><b>River Walk Boja</b></h4>
                    <p className="custom-div">
                        River Walk Boja memiliki seluruh wahana permainan yang bikin anak – anak happy, tempat wisata modern yang satu ini memang selalu ramai dikunjungi keluarga di akhir pekan ataupun hari libur nasional.
                    </p><hr/>
                    <h4><b>Lokasi River Walk Boja</b></h4>
                    <p className="custom-div">
                        Lokasi River Walk Boja berada di alamat Jl. Veteran, Desa Ngadibolo, Boja, Kabupaten Kendal, Jawa Tengah.
                    </p><hr/>
                    <h4><b>Rute Menuju River Walk Boja</b></h4>
                    <p className="custom-div">
                        Rute menuju River Walk Boja sangat mudah dituju, jalannya dapat dilalui oleh kendaraan roda dua maupun roda empat.<br/>

                        Ketika memulai perjalanan dari Alun-Alun Kaliwungu, dengan menuju Jl. Kyai H. Asyari untuk menuju Jl. Pungkuran untuk kemudian belok ke kiri.Selanjutnya belok lagi ke kiri untuk menuju Jl. Raya Boja-Kaliwungu, lalu belok kiri lagi untuk tiba di lokasi wisata River Walk Boja. Estimasi waktunya kurang dari 40 menit saja.
                    </p><hr/>  
                    <h4><b>Jam Buka River Walk Boja</b></h4>
                    <p className="custom-div">
                        Jam operasional River Walk Boja setiap hari Senin hingga Minggu<br/>
                        Mulai buka pukul 09.00 sampai dengan 18.00
                    </p><hr/>
                    <h4><b>Harga Tiket Masuk River Walk Boja</b></h4>
                    <p className="custom-div">
                        Tiket masuk River Walk Boja weekdays sebesar Rp. 25.000,-<br/>
                        Tiket masuk River Walk Boja weekend dan hari libur lainnya sebesar Rp. 30.000,-
                    </p><hr/>
                    <h4><b>Fasilitas Fasilitas River Walk Boja</b></h4>
                    <p className="custom-div">
                        Fasilitas wisata yang ada di kawasan River Walk Boja, sudah lengkap dan memadai. Hal tersebut dibuktikan dengan tersedianya:<br/>

                        Area parkir kendaraan,<br/>
                        Toilet,<br/>
                        Mushola,<br/>
                        Penginapan,<br/>
                        Playground,<br/>
                        Restoran
                    </p><hr/>
                    </div>

                <div className="d-flex-column col-4 pt-5">
                    <img 
                        src={RiverWalkImage} 
                        alt="Omahe Opa" 
                        className="img-fluid rounded" 
                        style={{width: "55%",height: "auto"}}/>
                    <img 
                        src={RiverWalkImage1} 
                        alt="Omahe Opa" 
                        className="img-fluid rounded mt-5" 
                        style={{width: "55%",height: "auto"}}/>
                    <img 
                        src={RiverWalkImage2} 
                        alt="Omahe Opa" 
                        className="img-fluid rounded mt-5" 
                        style={{width: "55%",height: "auto"}}/>
                </div>
            </div>

        </div>
    );
}

export default RiverWalk;