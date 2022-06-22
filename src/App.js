import axios from 'axios';
import React, { useEffect, useState, createContext } from 'react'
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
import Onboarding from './Compo/Onboard/Onboarding';
import OurServices from './Compo/OurServicesFullPage/OurServices';
import OurPartners from './Compo/Partner/OurPartners';
import PreciousMetals from './Compo/Precious metals/PreciousMetals';
import SafeDepositBox from './Compo/Safe box/SafeDepositBox';
import SideMenu from './Compo/Social side menu/SideMenu';


const SiteData = createContext();

const App = () => {
  const [data, setData] = useState('');

  const UrlFatch = 'https://ozl.v-protect.eu/ozl/'


  const getDataApi = async () => {
    try {
      const response = await axios.get(UrlFatch);
      var aa1 = JSON.stringify(response.data).replace(/-/gi, '_');
      var aa2 = JSON.parse(aa1);
      console.log(aa2);
      setData(aa2);
    } catch (error) {
      console.warn(error);
    }
  }


  useEffect(() => {
    getDataApi();
    // lodingshow();
    // stoploding();
  }, []);

  // let timeout;

  
  // function stoploding() {
  //   timeout = setTimeout(loadingstopshow, 1500);
  // }
  // const lodingshow = () =>{
  //     document.querySelector("body").style.visibility = "hidden";
  //     document.querySelector(".loader").style.visibility = "visible";
  //   }
  // const loadingstopshow =() =>
  //   {
  //     document.querySelector(".loader").style.display = "none";
  //     document.querySelector("body").style.visibility = "visible";
  //   }

    document.onreadystatechange = function () {
      if (data !== "") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".loader").style.visibility = "visible";
      } else {
        document.querySelector(".loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
        
      }
    };
  



  return (
    <>
    {/* <div className="loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div> */}
      {data && <SiteData.Provider value={data}>
        <Navbar />
        <AutoScrollToTop>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/ourservices" element={<OurServices />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/logistics" element={<Logistics />} />
            <Route path="/gtc" element={<Gtc />} />
            <Route path="/art" element={<Art />} />
            <Route path="/safedepositbox" element={<SafeDepositBox />} />
            <Route path="/preciousmetals" element={<PreciousMetals />} />
            <Route path="/diamonds" element={<Diamonds />} />
            <Route path="/loginclient" element={<LoginClient />} />
            <Route path="/onboarding" element={<Onboarding />} />
          </Routes>
        </AutoScrollToTop>
        <OurPartners />
        <SideMenu />
        <BackToTop />
        <Footer />
      </SiteData.Provider>}
    </>
  )
}

export default App;
export { SiteData }