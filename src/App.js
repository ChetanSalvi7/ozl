import React from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import ContactUs from './Compo/Contact/ContactUs';
import Footer from './Compo/Footer/Footer';
import Gtc from './Compo/GTC/Gtc';
import Logistics from './Compo/Logistics/Logistics';
import Home from './Compo/main page/Home.jsx';
import Navbar from './Compo/Navbar/Navbar';
import OurServicesFullPage from './Compo/OurServicesFullPage/OurServicesFullPage';
import OurPartners from './Compo/Partner/OurPartners';
import PreciousMetals from './Compo/Precious metals/PreciousMetals';
import SafeDepositBox from './Compo/Safe box/SafeDepositBox';



const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
        <Route path="/ourservicefullpage" element={<OurServicesFullPage />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/logistics" element={<Logistics />} />
        <Route path="/gtc" element={<Gtc />} />
        <Route path="/safedepositbox" element={<SafeDepositBox />} />
        <Route path="/preciousmetals" element={<PreciousMetals />} />
    </Routes>
    <OurPartners />
    <Footer />
    </>
  )
}

export default App;