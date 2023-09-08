import React from "react";
import {
    MDBCarousel,
    MDBCarouselItem,
} from "mdb-react-ui-kit"
import OmaheOpaImage from "../../assets/omaheopa.jpg"
import OmaheOpaImage2 from "../../assets/omaheopa2.jpg"
import OmaheOpaImage3 from "../../assets/omaheopa3.jpg"
import "../../style/margin.css"

function OmaheOpa() {
    return (
        <div>
            <MDBCarousel showControls>
                <MDBCarouselItem
                    className='w-100 d-block'
                    src={OmaheOpaImage}
                    alt='...'
                    style={{height: '500px', width:'500px', objectFit: 'cover'}}
                    />
                <MDBCarouselItem
                    className='w-100 d-block'
                    src={OmaheOpaImage2}
                    alt='...'
                    style={{height: '500px', width:'500px', objectFit: 'cover'}}
                    />
                <MDBCarouselItem
                    className='w-100 d-block'
                    src={OmaheOpaImage3}
                    alt='...'
                    style={{height: '500px', width:'500px', objectFit: 'cover'}}
                />
            </MDBCarousel>

            <div className="d-flex">
                <div className="pt-4 col-8 font custom-div">
                    <h4><b>Omahe Opa WaterPark</b></h4>
                    <p className="custom-div">
                        Omahe Opa Waterpark Taman Donorojo. Tempat ini sedang ramai dibicarakan di sosial media karena di dalamnya terdapat banyak wahana dan spot menarik yang bisa kamu datangi.
                    </p><hr/>
                    <h4><b>Harga Tiket masuk</b></h4>
                    <p className="custom-div">
                        Di bawah ini adalah harga tiket masuk di Omahe Opa Patean Kendal:<br/>
                        Tiket masuk hari biasa (Senin – Jumat) Rp 15.000,-<br/>
                        Tiket masuk hari libur dan tanggal merah (Sabtu – Minggu) Rp 20.000,-.
                    </p><hr/>
                    <h4><b>Harga Tiket Wahana Dan Permainan</b></h4>
                    <p className="custom-div">
                        Tiket Masuk Waterpark pada hari biasa Rp 30.000,- dan weekend Rp 40.000,-<br/>
                        Hidroponik (Edu Farm) Rp 10.000,-<br/>
                        Sewa Pelampung Rp 5.000,-, Loker Kecil Rp 5.000,-, Loker Besar Rp 8.000,-<br/>
                        Motor ATV Rp 20.000,- / 3x kecil<br/>
                        Motor ATV Rp 25.000,- / 3x besar<br/>
                        Flying Fox dan Burma Bridge Rp 20.000,- untuk anak-anak<br/>
                        Flying Fox dan Burma Bridge Rp 25.000,- untuk dewasa<br/>
                        Scooter Rp 10.000,- / Otoped Rp 5.000,-<br/>
                        Area Outbound Rp 10.000,-<br/>
                        Archery Rp 10.000,- / 5 panah<br/>
                        VW safari Rp 25.000,- per orang<br/>
                        Paket Terusan per 4 wahana diskon 5%
                    </p>   
                </div>
                <div className="d-flex-column col-4 pt-5">
                    <img 
                        src={OmaheOpaImage} 
                        alt="Omahe Opa" 
                        className="img-fluid rounded" 
                        style={{width: "55%",height: "auto"}}/>
                    <img 
                        src={OmaheOpaImage2} 
                        alt="Omahe Opa" 
                        className="img-fluid rounded mt-5" 
                        style={{width: "55%",height: "auto"}}/>
                </div>
            </div>

        </div>
    );
}

export default OmaheOpa;