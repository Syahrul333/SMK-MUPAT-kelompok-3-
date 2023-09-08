import React from "react";
import {
    MDBCarousel,
    MDBCarouselItem,
} from "mdb-react-ui-kit"
import CurugSewuImage from "../../assets/curugsewu.jpg"
import CurugSewuImage2 from "../../assets/curugsewu2.jpg"
import "../../style/margin.css"

function CurugSewu() {
    return (
        <div>
            <MDBCarousel showControls>
                <MDBCarouselItem
                    className='w-100 d-block'
                    src={CurugSewuImage}
                    alt='...'
                    style={{height: '500px', width:'500px', objectFit: 'cover'}}
                    />
                <MDBCarouselItem
                    className='w-100 d-block'
                    src={CurugSewuImage2}
                    alt='...'
                    style={{height: '500px', width:'500px', objectFit: 'cover'}}
                    />
            </MDBCarousel>

            <div className="d-flex">
                <div className="pt-4 col-8 font custom-div">
                    <h4><b>Curug Sewu</b></h4>
                    <p className="custom-div">
                        Curug Sewu terletak di Patean, Kendal dan merupakan air terjun tingkat tiga dengan ketinggian sekitar 80m.<br/>

                        Nama air terjun tersebut diambilkan dari nama desa tempat air terjun tersebut berada, yakni desa Curugsewu tepatnya di Kecamatan Patean, jaraknya 40 kilometer dari kota Kendal dengan terlebih dahulu melewati kota Weleri dan Sukorejo.
                    </p><hr/>
                    <h4><b>Lokasi dan Alamat Curug Sewu</b></h4>
                    <p className="custom-div">
                        Lokasi dan alamat Curug Sewu berada di Jl. Sri Wedari, Desa Curug Sewu, Kecamatan Patean, Kabupaten Kendal, Provinsi Jawa Tengah.
                    </p><hr/>  
                    <h4><b>Ragam Wisata Curug Sewu</b></h4>
                    <p className="custom-div">
                        Berikut ragam wisata yang dapat kamu lakukan saat berada di Curug Sewu, yakni:<br/><br/>

                        1.Menikmati Keindahan Alam Curug Sewu<br/>
                        2.Merasakan Sejuknya Air Curug Sewu<br/>
                        3.Area Play Ground<br/>
                        4.Kolam Renang<br/>
                        5.Kolam Terapi Ikan<br/>
                        6.Kebun Binatang<br/>
                        7.Panggung Hiburan<br/>
                        8.Spot Selfie
                    </p><hr/>
                    <h4><b>Rute Menuju Curug Sewu</b></h4>
                    <p className="custom-div">
                        Rute menuju Curug Sewu dari Kota Kendal kamu harus melakukan perjalanan sejauh kurang lebih 40 kilometer, kamu akan melewati Weleri-Sukorejo terlebih dahulu kamu akan melewati Kota Cepiring.<br/>

                        Sedangkan jika dari arah Temanggung, kamu harus mengambil rute melewati Jl. Parakan dan Ngadirejo. Dan akan memakan waktu sekitar 1,5 jam perjalanan saja.
                    </p><hr/>
                    <h4><b>Tiket Masuk Curug Sewu</b></h4>
                    <p className="custom-div">           
                        Tiket masuk Curug Sewu sangat murah, kamu hanya perlu membayar Rp. 9.200,- per orangnya. Dengan rincian sebagai berikut :<br/><br/>

                        Tiket masuk Rp. 2.000,-<br/>
                        Tiket masuk Curug Rp. 7.000,-<br/>
                        Asuransi Rp. 200,-
                    </p><hr/>
                    <h4><b>Jam Operasional Curug Sewu</b></h4>
                    <p className="custom-div">
                        Jam operasional Curug Sewu dibuka setiap hari Senin sampai dengan hari Jumat, mulai pukul 08.00 sampai dengan pukul 17.00 WIB.
                    </p><hr/>
                    </div>

                <div className="d-flex-column col-4 pt-5">
                    <img 
                        src={CurugSewuImage} 
                        alt="Omahe Opa" 
                        className="img-fluid rounded" 
                        style={{width: "55%",height: "auto"}}/>
                    <img 
                        src={CurugSewuImage2} 
                        alt="Omahe Opa" 
                        className="img-fluid rounded mt-5" 
                        style={{width: "55%",height: "auto"}}/>
                </div>
            </div>

        </div>
    );
}

export default CurugSewu;