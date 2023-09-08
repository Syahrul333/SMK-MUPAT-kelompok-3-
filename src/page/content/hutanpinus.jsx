import React from "react";
import {
    MDBCarousel,
    MDBCarouselItem,
} from "mdb-react-ui-kit"
import HutanPinusImage from "../../assets/hutanpinus.jpg"
import HutanPinusImage2 from "../../assets/hutanpinus2.jpg"
import HutanPinusImage3 from "../../assets/hutanpinus3.jpg"
import HutanPinusImage4 from "../../assets/hutanpinus4.jpg"
import "../../style/margin.css"

function HutanPinus() {
    return (
        <div>
            <MDBCarousel showControls>
                <MDBCarouselItem
                    className='w-100 d-block'
                    src={HutanPinusImage}
                    alt='...'
                    style={{height: '500px', width:'500px', objectFit: 'cover'}}
                    />
                <MDBCarouselItem
                    className='w-100 d-block'
                    src={HutanPinusImage2}
                    alt='...'
                    style={{height: '500px', width:'500px', objectFit: 'cover'}}
                    />
                <MDBCarouselItem
                    className='w-100 d-block'
                    src={HutanPinusImage3}
                    alt='...'
                    style={{height: '500px', width:'500px', objectFit: 'cover'}}
                    />
                <MDBCarouselItem
                    className='w-100 d-block'
                    src={HutanPinusImage4}
                    alt='...'
                    style={{height: '500px', width:'500px', objectFit: 'cover'}}
                />
            </MDBCarousel>

            <div className="d-flex">
                <div className="pt-4 col-8 font custom-div">
                    <h4><b>Hutan Pinus Nglimut</b></h4>
                    <p className="custom-div">
                        Wisata Hutan Pinus Nglimut atau disebut juga Wana Wisata Hutan Pinus Nglimut menjadi salah satu tempat camping hits di Kendal, Jawa Tengah.<br/>

                        Wisata Hutan Pinus Nglimut terkenal dengan spot tempat yang instagramable dengan corak catur di pepohonan dan cuaca sejuk.<br/>

                        Wisata Hutan Pinus Nglimut menyediakan fasilitas untuk berkemah sehingga selalu ramai dikunjungi.
                    </p><hr/>
                    <h4><b>Rute Menuju Hutan Pinus Nglimut</b></h4>
                    <p className="custom-div">
                        Rute menuju Hutan Pinus Nglimut jika diawali dari Jl. Raya Manyaran kemudian belok kanan ke arah Boja. Lanjutkan perjalanan untuk tiba di Jl. Raya Cangkiran – Gunung Pati.<br/>

                        Kemudian teruskan perjalanan ke arah Nglimut, Gonoharjo. Setelah melewati Promas Greenland, atau Pemandian Air Panas Nglimut belok kanan menuju jalan yang di cor.
                    </p><hr/>
                    <h4><b>Jam Buka Hutan Pinus Nglimut</b></h4>
                    <p className="custom-div">
                        Hutan Pinus Nglimut beroperasi setiap hari, dengan jam buka sebagai berikut:<br/><br/>
                                 
                        Senin hingga Jumat pukul 08.00 sampai dengan 17.00<br/>
                        Sabtu, Minggu, dan hari libur buka selama 24 jam nonstop
                    </p><hr/>  
                    <h4><b>Harga Tiket Masuk Hutan Pinus Nglimut</b></h4>
                    <p className="custom-div">
                        Tiket masuk kawasan Hutan Pinus Nglimut sangat murah, cukup membayar Rp. 8.000,-<br/>
                        saja kamu sudah dapat menikmati ademnya kawasan hutan pinus.
                    </p><hr/>
                    <h4><b>Harga Tiket Masuk River Walk Boja</b></h4>
                    <p className="custom-div">
                        Fasilitas wisata yang ada di sekitar Hutan Pinus Nglimut diantaranya:<br/><br/>

                        Gazebo,<br/>
                        Warung-warung makanan dan minuman,<br/>
                        Mushola,<br/>
                        Tempat duduk,<br/>
                        Ayunan,<br/>
                        Spot foto,<br/>
                        Area parkir kendaraan,<br/>
                        Toilet,<br/>
                        Hotspot area,<br/>
                        Penyewaan tenda
                    </p><hr/>
                    <h4><b>Daya Tarik Hutan Pinus Nglimut</b></h4>
                    <p className="custom-div">
                        1. Hutan Pinus Yang Sejuk<br/>
                        2.Camping Ground Yang Luas<br/>
                        3.Pemandian Air Panas Ngllimut
                    </p><hr/>
                    </div>

                <div className="d-flex-column col-4 pt-5">
                    <img 
                        src={HutanPinusImage} 
                        alt="Omahe Opa" 
                        className="img-fluid rounded" 
                        style={{width: "55%",height: "auto"}}/>
                    <img 
                        src={HutanPinusImage2} 
                        alt="Omahe Opa" 
                        className="img-fluid rounded mt-5" 
                        style={{width: "55%",height: "auto"}}/>
                    <img 
                        src={HutanPinusImage3} 
                        alt="Omahe Opa" 
                        className="img-fluid rounded mt-5" 
                        style={{width: "55%",height: "auto"}}/>
                    <img 
                        src={HutanPinusImage4} 
                        alt="Omahe Opa" 
                        className="img-fluid rounded mt-5" 
                        style={{width: "55%",height: "auto"}}/>
                </div>
            </div>

        </div>
    );
}

export default HutanPinus;