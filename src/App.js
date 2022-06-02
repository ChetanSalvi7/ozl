import React from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import Art from './Compo/Art/Art';
import AutoScrollToTop from './Compo/Auto scroll top/AutoScrollTop';
import BackToTop from './Compo/Back to top/BackToTop';
import ContactUs from './Compo/Contact/ContactUs';
import Diamonds from './Compo/Diamond/Diamonds';
import Footer from './Compo/Footer/Footer';
import Gtc from './Compo/GTC/Gtc';
import LoginClient from './Compo/Login-client/Login-Client';
import Logistics from './Compo/Logistics/Logistics';
import Home from './Compo/main page/Home.jsx';
import Navbar from './Compo/Navbar/Navbar';
import OurServices from './Compo/OurServicesFullPage/OurServices';
import OurPartners from './Compo/Partner/OurPartners';
import PreciousMetals from './Compo/Precious metals/PreciousMetals';
import SafeDepositBox from './Compo/Safe box/SafeDepositBox';
import SideMenu from './Compo/Social side menu/SideMenu';



const App = () => {
  return (
    <>
    
    <Navbar />
    <AutoScrollToTop>
    <Routes>
    <Route path="/" element={<Home />} />
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/logistics" element={<Logistics />} />
        <Route path="/gtc" element={<Gtc />} />
        <Route path="/art" element={<Art />} />
        <Route path="/safedepositbox" element={<SafeDepositBox />} />
        <Route path="/preciousmetals" element={<PreciousMetals />} />
        <Route path="/diamonds" element={<Diamonds />} />
        <Route path="/loginclient" element={<LoginClient />} />
    </Routes>
    </AutoScrollToTop>
    <OurPartners />
    <SideMenu />
    <BackToTop />
    <Footer />
    </>
  )
}

export default App;