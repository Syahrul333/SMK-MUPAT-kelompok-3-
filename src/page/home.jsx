import React from "react";
import RiverWalk from "../assets/riverwalk.jpg"
import OmaheOpa from '../assets/omaheopa.jpg'
import KaliBladon from '../assets/kalibladon.jpg'
import HutanPinus from '../assets/hutanpinus.jpg'
import CurugSewu from '../assets/curugsewu.jpg'
import PantaiNgebum from '../assets/pantaingebum.jpg'
import { Card } from "react-bootstrap";

import {
  MDBContainer,
  MDBCol,
  MDBIcon,
  MDBRipple,
  MDBRow,
} from "mdb-react-ui-kit";

function Home() {
  return (
    <div>
      <div class="bg-image">
        <img
          src={KaliBladon}
          className="w-100"
          alt="kali Bladon"
          style={{maxHeight: "60vh",objectFit: "cover"}}
        />
        <div className="mask" style={{backgroundColor: "hsla(0, 0%, 0%, 0.7)"}}>
          <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <h1 className="text-white mb-0">Pariwisata Kendal</h1>
            <p className="lead text-white">Disini kami menyediakan informasi mengenai tempat wisata yang berada di kabupaten kendal</p>
          </div>
        </div>
      </div>
    <MDBContainer className="py-5">
        <MDBCol className="pb-4 px-5 border-bottom text-center">
        </MDBCol>
      <MDBRow className="gx-lg-5">
        <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
          <div>
            <MDBRipple
              className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
              rippleTag="div"
              rippleColor="light"
            >
              <img src={OmaheOpa} className='img-fluid' alt='Omahe Opa WaterPark'/>
              <a href="/omaheopa">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBRow className="mb-3">
              <MDBCol col="6">
                <a href="!" className="text-info">
                  <MDBIcon fas icon="plane" className="me-1" />
                  Travels
                </a>
              </MDBCol>
            </MDBRow>
            <a href="/omaheopa" className="text-dark">
              <h5>Omahe Opa Waterpark</h5>
              <p>
              Ada tempat wisata baru tepatnya di Jalan Patean – Boja, namanya adalah Omahe Opa Waterpark Taman Donorojo.
              </p>
            </a>
          </div>
        </MDBCol>
        <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
          <div>
            <MDBRipple
              className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
              rippleTag="div"
              rippleColor="light"
            >
              <img
                src={RiverWalk}
                className="img-fluid"
                alt='River Wakj'
                />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBRow className="mb-3">
              <MDBCol col="6">
                <a href="!" className="text-info">
                  <MDBIcon fas icon="plane" className="me-1" />
                  Travels
                </a>
              </MDBCol>
            </MDBRow>
            <a href="/riverwalk" className="text-dark">
              <h5>River Walk Boja</h5>
              <p>
              River Walk Boja merupakan tempat wisata teranyar yang dimiliki Kabupaten Kendal, Jawa Tengah. Objek wisata modern ini menghadirkan wahana dan wisata alam yang bertemakan air dan resto.
              </p>
            </a>
          </div>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-4 mb-lg-0">
          <div>
            <a href="/pantaingebum">
            <MDBRipple
              className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
              rippleTag="div"
              rippleColor="light"
            >
              <img
                src={PantaiNgebum}
                className="img-fluid"
                alt="Wisata Kali Bladon"
              />
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
            </MDBRipple>
            <MDBRow className="mb-3">
              <MDBCol col="6">
                  <MDBIcon fas icon="plane" className="me-1" />
                  Travels
              </MDBCol>
            </MDBRow>
            <a href="#!" className="text-dark">
              <h5>Pantai Ngebum</h5>
              <p>
              Wisata Pantai Ngebum di Kaliwungu Kendal Jawa Tengah adalah tempat wisata yang ramai dengan wisatawan pada hari biasa maupun hari liburan. 
              </p>
            </a>
            </a>
          </div>
        </MDBCol>
      </MDBRow>
      <hr />
      <a href="/hutanpinus">
      <Card className="mb-4" style={{ height: "20vh" }}>
        <div className="row g-0">
          <div className="col-md-2">
            <Card.Img
              src={HutanPinus}
              alt="Hutan Pinus Nglimut"
              className="img-fluid rounded-start"
              style={{ height: "20vh", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-10">
            <Card.Body style={{color: "black"}}>
              <Card.Title><b>Hutan Pinus Nglimut</b></Card.Title>
              <Card.Text>
                Hutan Pinus Nglimut merupakan tempat wisata yang terletak di Nglimut, Gonoharjo. Disini menyediakan pemandangan hutan pinus yang indah dan juga udaranya yang sejuk
              </Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>
      </a>
      <a href="/curugsewu">
      <Card className="mb-4" style={{ height: "20vh" }}>
        <div className="row g-0">
          <div className="col-md-2">
            <Card.Img
              src={CurugSewu}
              alt="CurugSewu"
              className="img-fluid rounded-start"
              style={{ height: "20vh", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-10">
            <Card.Body style={{color: "black"}}>
              <Card.Title><b>Curug Sewu</b></Card.Title>
              <Card.Text>
                Curug Sewu merupakan tempat wisata yang menyediakan keindahan alam curug Sewu dan sejuknya air Curug Sewu
              </Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>
      </a>
    </MDBContainer>
    </div>
  );
}

export default Home;