import React from "react";
import {
    MDBCarousel,
    MDBCarouselItem,
} from "mdb-react-ui-kit"
import PantaiNgebumImage from "../../assets/pantaingebum.jpg"
import PantaiNgebumImage2 from "../../assets/pantaingebum2.jpg"
import PantaiNgebumImage3 from "../../assets/pantaingebum3.jpg"
import "../../style/margin.css"

function PantaiNgebum() {
    return (
        <div>
            <MDBCarousel showControls>
                <MDBCarouselItem
                    className='w-100 d-block'
                    src={PantaiNgebumImage}
                    alt='...'
                    style={{height: '500px', width:'500px', objectFit: 'cover'}}
                    />
                <MDBCarouselItem
                    className='w-100 d-block'
                    src={PantaiNgebumImage2}
                    alt='...'
                    style={{height: '500px', width:'500px', objectFit: 'cover'}}
                    />
                <MDBCarouselItem
                    className='w-100 d-block'
                    src={PantaiNgebumImage3}
                    alt='...'
                    style={{height: '500px', width:'500px', objectFit: 'cover'}}
                    />
            </MDBCarousel>

            <div className="d-flex">
                <div className="pt-4 col-8 font custom-div">
                    <h4><b>Pantai Ngebum</b></h4>
                    <p className="custom-div">
                        Wisata Pantai Ngebum di Kaliwungu Kendal Jawa Tengah adalah tempat wisata yang ramai dengan wisatawan pada hari biasa maupun hari liburan. Tempat ini sangat indah dan bisa memberikan sensasi yang berbeda dengan aktivitas kita sehari hari.
                    </p><hr/>
                    <h4><b>Lokasi Pantai Ngebum</b></h4>
                    <p className="custom-div">
                        Terletak di Desa Mororejo, Kecamatan Kaliwungu, Kabupaten Kendal, Jawa Tengah, Indonesia
                    </p><hr/>  
                    <h4><b>Fasilitas Pantai Ngebum</b></h4>
                    <p className="custom-div">
                        – Area Parkir kendaraan<br/>

                        – Mushola<br/>

                        – Kamar mandi / MCK<br/>

                        -Warung Makan<br/>

                        – Tempat Istirahat<br/>

                        – Penyewaan Pelampung<br/>

                        – dan masih banyak lainya
                    </p><hr/>
                    <h4><b>Harga Tiket Pantai Ngebum</b></h4>
                    <p className="custom-div">
                        Tiket masuk: Rp.5000
                    </p><hr/>
                    </div>

                <div className="d-flex-column col-4 pt-5">
                    <img 
                        src={PantaiNgebumImage} 
                        alt="Omahe Opa" 
                        className="img-fluid rounded" 
                        style={{width: "55%",height: "auto"}}/>
                    <img 
                        src={PantaiNgebumImage2} 
                        alt="Omahe Opa" 
                        className="img-fluid rounded mt-5" 
                        style={{width: "55%",height: "auto"}}/>
                    <img 
                        src={PantaiNgebumImage3} 
                        alt="Omahe Opa" 
                        className="img-fluid rounded mt-5" 
                        style={{width: "55%",height: "auto"}}/>
                </div>
            </div>

        </div>
    );
}

export default PantaiNgebum;