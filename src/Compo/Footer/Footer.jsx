import React, { useContext } from 'react'
import Logo from '../../backend/img/logo.svg';
import { NavLink } from "react-router-dom";
import { SiteData } from "../../App";

const Footer = () => {
    const getYear = new Date().getFullYear();

    const SiteDataInfo = useContext(SiteData);
    return (
        <>
            <footer className="border-top pt-4">
                <div className="container-fluid px-lg-5">
                    <div className="row">
                        <div className="col-lg-3 text-center text-sm-start">
                            <NavLink to="/">
                                <img src={Logo} alt="" className="img-fluid mb-2" style={{ maxHeight: "76px" }} />
                            </NavLink>
                            <p>{SiteDataInfo.outPutArray.footer_text}</p>
                        </div>
                        <div className="col-lg-5 col-6">
                            <div className=" row row-cols-1 row-cols-md-2 fw-bold">

                                <div className="col mb-2">
                                    <NavLink to="ourservices">{SiteDataInfo.outPutArray.header_menu_1}</NavLink>
                                </div>
                                <div className="col mb-2">
                                    <NavLink to="logistics">{SiteDataInfo.outPutArray.header_menu_4}</NavLink>

                                </div>
                                <div className="col mb-2">
                                    <NavLink to="preciousmetals">{SiteDataInfo.outPutArray.header_menu_2}</NavLink>
                                </div>
                                <div className="col mb-2">
                                    <NavLink to="art">{SiteDataInfo.outPutArray.header_menu_6}</NavLink>
                                </div>
                                <div className="col mb-2">
                                    <NavLink to="safedepositbox">{SiteDataInfo.outPutArray.header_menu_3}</NavLink>
                                </div>
                                <div className="col mb-2">
                                    <NavLink to="diamonds">{SiteDataInfo.outPutArray.header_menu_5}</NavLink>
                                </div>
                                <div className="col mb-2">
                                    <NavLink to="ourservices">{SiteDataInfo.outPutArray.header_menu_10}</NavLink>
                                </div>
                                <div className="col mb-2 text-uppercase">
                                    <NavLink to="">{SiteDataInfo.outPutArray.header_menu_14}</NavLink>
                                </div>
                                <div className="col mb-2">
                                    <NavLink to="gtc">{SiteDataInfo.outPutArray.header_menu_12}</NavLink>
                                </div>
                                <div className="col mb-2">
                                    <NavLink to="contactus">CONTACT US</NavLink>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-6">
                            <div className="row row-cols-1 row-cols-md-2 fw-bold">

                                <div className="col mb-3">
                                    <div className="text-uppercase text-black-50">{SiteDataInfo.outPutArray.contact_address}</div>
                                    <div>{SiteDataInfo.outPutArray.footer_address}</div>
                                </div>
                                <div className="col mb-3">
                                    <div className="text-uppercase text-black-50">telephone</div>
                                    <a href="tel:+4233926101">{SiteDataInfo.outPutArray.footer_tel}</a>
                                </div>
                                <div className="col mb-3">
                                    <div className="text-uppercase text-black-50">fax</div>
                                    <a href="fax:+4233926101">{SiteDataInfo.outPutArray.footer_fax}</a>
                                </div>
                                <div className="col">
                                    <div className="text-uppercase text-black-50">Email</div>
                                    <a href="mailto:info@ozl.li">{SiteDataInfo.outPutArray.footer_mail}</a>
                                </div>

                            </div>
                            <nav className="social-icon">
                                <a title="Facebook" href="https://ozl.li/"><i className="fa-brands fa-facebook-f"></i></a>
                                <a title="Twitter" href="https://ozl.li/"><i className="fa-brands fa-twitter"></i></a>
                                <a title="Linkedin" href="https://ozl.li/"><i className="fa-brands fa-linkedin-in"></i></a>
                                <a title="Instagram" href="https://ozl.li/"><i className="fa-brands fa-instagram"></i></a>
                                <a title="Youtube" href="https://ozl.li/"><i className="fa-brands fa-youtube"></i></a>
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