import React,{ useContext } from 'react'
import ContactForm from './ContactForm';
import SliderImage from '../main page/SliderImage';

import { SiteData } from '../../App';


const EuropeLogo = 'https://ozl.li/public/assets/frontend/img/contact/map-europe.svg';
const MapLogo = 'https://ozl.li/public/assets/frontend/img/contact/map.svg';


const ContactUs = () => {
    const SiteDataInfo = useContext(SiteData)
    return (
        <>
        <SliderImage/>
            <section className="pt-3 pt-lg-5" id="contactUs">
                <div className="container-xxl px-lg-5">
                    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2714.889211668021!2d9.516532315054413!3d47.120842629401004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b33e895b9e62b%3A0xbaa78ef52c319ee9!2sOZL%20Offenes%20Zolllager%20in%20Liechtenstein%20AG!5e0!3m2!1sen!2sin!4v1653906899736!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                    <div className="row my-md-5 my-3">
                        <div className="col-md-7">
                            <div className="row">
                                <div className="col-md-6 col-6">
                                    <img src={EuropeLogo} alt="" className="img-fluid" />
                                </div>
                                <div className="col-md-6 col-6">
                                    <img src={MapLogo } alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                        <ContactForm />
                    </div>
                    <div className="row justify-content-center pt-lg-3">
                        <h4 className="h4 text-center fw-bold">TRISUNA LAGERHAUS AG</h4>
                        <div className="col-md-9 py-md-4 py-2">
                            <div className="row justify-content-center">
                                <div className="col-md-4">
                                    <div className="contact-box h-100 border p-3 text-center">
                                        <h6><strong>{SiteDataInfo.outPutArray.contact_address}</strong></h6>
                                        <p className="mb-0">{SiteDataInfo.outPutArray.footer_address}</p>
                                        
                                    </div>
                                </div>
                                <div className="col-md-4  my-sm-0 my-4">
                                    <div className="contact-box h-100 border p-3 text-center">
                                        <h6><strong>{SiteDataInfo.outPutArray.contact_phone}</strong></h6>
                                        <p className="mb-0"><a href="tel:+4233845120">Tel: {SiteDataInfo.outPutArray.footer_tel}</a></p>
                                        <p className="mb-0">Fax: {SiteDataInfo.outPutArray.footer_fax}</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="contact-box h-100 border p-3 text-center">
                                        <h6><strong>{SiteDataInfo.outPutArray.contact_email}</strong></h6>
                                        <p><a href="mailto:info@ozl.li">{SiteDataInfo.outPutArray.footer_mail}</a></p>
                                    </div>
                                </div>
                                <p className="py-4 mb-0 text-center"><a href="http://www.trisuna-lagerhaus.li/">www.trisuna-lagerhaus.li</a></p>
                                <div className="col-md-5">
                                    <div className="contact-box h-100 border p-3 text-center">
                                        <h6><strong>{SiteDataInfo.outPutArray.contact_opening_hours}</strong></h6>
                                        <p>{SiteDataInfo.outPutArray.contact_monday} 08.30-12.00 and 13.30-17.00</p>
                                    </div>
                                </div>
                                <p className="py-4 mb-0 text-center">{SiteDataInfo.outPutArray.contact_appointment}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
           
        </>
    )
}

export default ContactUs