import axios from 'axios';
import React, { useEffect, useState, createContext, Suspense, lazy } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import Error from './Compo/Error';
const Art = lazy(()=>import('./Compo/Art/Art'));
const AutoScrollToTop = lazy(()=>import('./Compo/Auto scroll top/AutoScrollTop')); 
const BackToTop = lazy(()=>import('./Compo/Back to top/BackToTop')); 
const ContactUs = lazy(()=>import('./Compo/Contact/ContactUs')); 
const Diamonds = lazy(()=>import('./Compo/Diamond/Diamonds')); 
const Footer = lazy(()=>import('./Compo/Footer/Footer')); 
const Gtc = lazy(()=>import('./Compo/GTC/Gtc')); 
const LoginClient = lazy(()=>import('./Compo/Login-client/Login-Client')); 
const Logistics = lazy(()=>import('./Compo/Logistics/Logistics')); 
const Home  = lazy(()=>import('./Compo/main page/Home.jsx')); 
const Navbar = lazy(()=>import('./Compo/Navbar/Navbar')); 
const Onboarding = lazy(()=>import('./Compo/Onboard/Onboarding')); 
const OurServices = lazy(()=>import('./Compo/OurServicesFullPage/OurServices')); 
const OurPartners = lazy(()=>import('./Compo/Partner/OurPartners')); 
const PreciousMetals = lazy(()=>import('./Compo/Precious metals/PreciousMetals')); 
const SafeDepositBox = lazy(()=>import('./Compo/Safe box/SafeDepositBox')); 
const SideMenu = lazy(()=>import('./Compo/Social side menu/SideMenu')); 


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

  // document.onreadystatechange = function () {
  //   if (data !== "") {
  //     document.querySelector("body").style.visibility = "hidden";
  //     document.querySelector(".loader").style.visibility = "visible";
  //   } else {
  //     document.querySelector(".loader").style.display = "none";
  //     document.querySelector("body").style.visibility = "visible";

  //   }
  // };




  return (
    <>

      {data && <SiteData.Provider value={data}>
        <Suspense fallback={
          <div className="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>}>
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
              <Route component={Error} />
            </Routes>
          </AutoScrollToTop>
          <OurPartners />
          <SideMenu />
          <BackToTop />
          <Footer />
        </Suspense>
      </SiteData.Provider>}
    </>
  )
}

export default App;
export { SiteData }