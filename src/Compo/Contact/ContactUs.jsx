import React from 'react'
import MapLogo from '../../backend/img/contact/map.svg';
import EuropeLogo from '../../backend/img/contact/map-europe.svg';
import ContactForm from './ContactForm';

const ContactUs = () => {
  return (
    <>
    <section className="pt-3 pt-lg-5" id="contactUs">
    <div className="container-xxl px-lg-5">

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2714.889211668021!2d9.516532315054413!3d47.120842629401004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b33e895b9e62b%3A0xbaa78ef52c319ee9!2sOZL%20Offenes%20Zolllager%20in%20Liechtenstein%20AG!5e0!3m2!1sen!2sin!4v1653906899736!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        <div className="row my-md-5 my-3">
            <div className="col-md-7">
                <div className="row">
                    <div className="col-md-6 col-6">
                        <img src={MapLogo} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-6 col-6">
                        <img src={EuropeLogo} alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
            <ContactForm/>
        </div>
        <div className="row justify-content-center pt-lg-3">
            <h4 className="h4 text-center fw-bold">TRISUNA LAGERHAUS AG</h4>
            <div className="col-md-9 py-md-4 py-2">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="contact-box h-100 border p-3 text-center">
                            <h6><strong>Address</strong></h6>
                            <p className="mb-0">Schliessa 16 9495 Triesen</p>
                            <p className="mb-0">Liechtenstein</p>
                        </div>
                    </div>
                    <div className="col-md-4  my-sm-0 my-4">
                        <div className="contact-box h-100 border p-3 text-center">
                            <h6><strong>Phone</strong></h6>
                            <p className="mb-0"><a href="tel:+4233845120">Tel: +423 384 51 20</a></p>
                            <p className="mb-0">Fax: +423 384 51 21</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="contact-box h-100 border p-3 text-center">
                            <h6><strong>Email</strong></h6>
                            <p><a href="mailto:info@ozl.li">info@ozl.li</a></p>
                        </div>
                    </div>
                    <p className="py-4 mb-0 text-center"><a href="http://www.trisuna-lagerhaus.li/">www.trisuna-lagerhaus.li</a></p>
                    <div className="col-md-5">
                        <div className="contact-box h-100 border p-3 text-center">
                            <h6><strong>Our opening hours</strong></h6>
                            <p>Monday to Friday 08.30-12.00 and 13.30-17.00</p>
                        </div>
                    </div>
                    <p className="py-4 mb-0 text-center">By appointment only</p>
                </div>
            </div>
        </div>

    </div>
</section>
    </>
  )
}

export default ContactUs