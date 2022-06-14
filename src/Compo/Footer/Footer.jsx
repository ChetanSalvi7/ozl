import React, { useContext } from 'react'
import Logo from '../../backend/img/logo.svg';
import { NavLink } from "react-router-dom";
import { SiteData } from "../../App";

const Footer = () => {
    const getYear = new Date().getFullYear();

    const SiteDataInfo = useContext(SiteData);

    const LinkBox = [{ id: '1', jumpTo: 'ourservices', title1: `${SiteDataInfo.outPutArray.header_menu_1}` },
    { id: '2', jumpTo: 'logistics', title1: `${SiteDataInfo.outPutArray.header_menu_4}` },
    { id: '3', jumpTo: 'preciousmetals', title1: `${SiteDataInfo.outPutArray.header_menu_2}` },
    { id: '4', jumpTo: 'art', title1: `${SiteDataInfo.outPutArray.header_menu_6}` },
    { id: '5', jumpTo: 'safedepositbox', title1: `${SiteDataInfo.outPutArray.header_menu_3}` },
    { id: '6', jumpTo: 'diamonds', title1: `${SiteDataInfo.outPutArray.header_menu_5}` },
    { id: '7', jumpTo: 'ourservices', title1: `${SiteDataInfo.outPutArray.header_menu_10}` },
    { id: '8', jumpTo: '', title1: `${SiteDataInfo.outPutArray.header_menu_14}` },
    { id: '9', jumpTo: 'gtc', title1: `${SiteDataInfo.outPutArray.header_menu_12}` },
    { id: '10', jumpTo: 'contactus', title1: 'CONTACT US' }];
    return (
        <>
            <footer className="border-top pt-4">
                <div className="container-fluid px-lg-5">
                    <div className="row">
                        <div className="col-lg-3 text-center text-sm-start">
                            <NavLink to="/">
                                <img src={Logo} alt="logo" className="img-fluid mb-2" style={{ maxHeight: "76px" }} />
                            </NavLink>
                            <p>{SiteDataInfo.outPutArray.footer_text}</p>
                        </div>
                        <div className="col-lg-5 col-6">
                            <div className=" row row-cols-1 row-cols-md-2 fw-bold">
                                {React.Children.toArray(LinkBox.map((dataShow) => {
                                    return (
                                        <>
                                            <div className="col mb-2" key={dataShow.id}>
                                                <NavLink to={dataShow.jumpTo}>{dataShow.title1}</NavLink>
                                            </div>
                                        </>
                                    )
                                })
                                )}
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