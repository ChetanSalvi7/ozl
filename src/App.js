import React from 'react'
import './App.css'
import BecomeCustomer from './Compo/BecomeCustomer/BecomeCustomer';
import ContactUs from './Compo/Contact/ContactUs';
import Footer from './Compo/Footer/Footer';
import Gtc from './Compo/GTC/Gtc';
import Logistics from './Compo/Logistics/Logistics';
import Home from './Compo/main page/Home.jsx';
import Navbar from './Compo/Navbar/Navbar';
import OurServices from './Compo/OurServices/OurServices';
import OurServicesFullPage from './Compo/OurServicesFullPage/OurServicesFullPage';
import OurPartners from './Compo/Partner/OurPartners';
import PreciousMetals from './Compo/Precious metals/PreciousMetals';
import SafeDepositBox from './Compo/Safe box/SafeDepositBox';



const App = () => {
  return (
    <>
    {/* <Navbar />
    <Home />
    <OurServices />
    <BecomeCustomer />
    <OurPartners />
    <Footer />
    <Logistics />
    <OurServicesFullPage />
    <PreciousMetals />
    <SafeDepositBox />
    <ContactUs /> */}
    <Gtc />
    </>
  )
}

export default App;