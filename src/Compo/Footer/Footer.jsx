import React from 'react'
import Logo from '../../backend/img/logo.svg';
import { NavLink } from "react-router-dom";

const Footer = () => {
    const getYear = new Date().getFullYear();
  return (
    <>
    <footer className="border-top pt-4">
        <div className="container-fluid px-lg-5">
            <div className="row">
                <div className="col-lg-3">
                    <NavLink to="/">
                        <img src={Logo} alt="" className="img-fluid mb-2" style={{maxHeight: "76px"}}/>
                    </NavLink>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                </div>
                <div className="col-lg-5">
                    <div className="row">
                        <div className="row row-cols-md-2 fw-bold">
                            <div className="col mb-2">
                                <NavLink to="/">CUSTOMS WAREHOUSE</NavLink>
                            </div>
                            <div className="col mb-2">
                                <NavLink to="preciousmetals">PRECIOUS METALS TRADING</NavLink>
                            </div>
                            <div className="col mb-2">
                                <NavLink to="safedepositbox">SAFE DEPOSIT BOXES & VAULTS</NavLink>
                            </div>
                            <div className="col mb-2">
                                <NavLink to="logistics">LOGISTICS</NavLink>
                            </div>
                            <div className="col mb-2">
                                <NavLink to="diamonds">DIAMONDS</NavLink>
                            </div>
                            <div className="col mb-2">
                                <NavLink to="art">ART</NavLink>
                            </div>
                            <div className="col mb-2">
                                <NavLink to="">Regulation / FMA</NavLink>
                            </div>
                            <div className="col mb-2">
                                <NavLink to="">Impressions</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="row">
                        <div className="row row-cols-md-2 fw-bold">
                            <div className="col mb-3">
                                <div className="text-uppercase text-black-50">Address:</div>
                                <div>Schliessa 16, 9495 Triesen, Liechtenstein</div>
                            </div>
                            <div className="col mb-3">
                                <div className="text-uppercase text-black-50">telephone:</div>
                                <a href="tel:+4233926101">+423 392 61 01</a>
                            </div>
                            <div className="col mb-3">
                                <div className="text-uppercase text-black-50">fax:</div>
                                <a href="fax:+4233926101">+423 392 61 03</a>
                            </div>
                            <div className="col">
                                <div className="text-uppercase text-black-50">e-mail:</div>
                                <a href="mailto:info@ozl.li">info@ozl.li</a>
                            </div>
                        </div>
                    </div>
                    <nav className="social-icon">
                        <a title="Facebook" href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        <a title="Twitter" href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a title="Linkedin" href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a title="Instagram" href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a title="Youtube" href="#"><i className="fa-brands fa-youtube"></i></a>
                    </nav>
                </div>
            </div>
        </div>
        <div className="bg-primary text-white fw-bold p-2 text-center">
            OZL Offenes Zolllager in Liechtenstein AG © {getYear}
        </div>
    </footer>
    </>
  )
}

export default Footer