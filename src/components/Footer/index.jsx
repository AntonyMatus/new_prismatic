/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Footer = ({ classText }) => {
  return (
    <footer className={`${classText ? classText : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="item md-mb50">
              <div className="title">
                <h5>Información de contacto</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Ubicación</h6>
                    <p></p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email</h6>
                    <p>hola@prismatic.mx</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Whatsapp</h6>
                    <p>999 988 77 66</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="item">
              <div className="logo">
                <img src="/assets/img/Recurso 3.svg" alt="" />
              </div>
              <div className="social">
                <Link href="#">
                  <a>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <i className="fab fa-instagram"></i>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </Link>
              </div>
              <div className="copy-right">
                <p>
                    Prismatic 2022 - Desarrollado por búho Solutions
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
