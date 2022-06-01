import React from 'react'
import './App.css'
import BecomeCustomer from './Compo/BecomeCustomer/BecomeCustomer';
import Footer from './Compo/Footer/Footer';
import Logistics from './Compo/Logistics/Logistics';
import Home from './Compo/main page/Home.jsx';
import Navbar from './Compo/Navbar/Navbar';
import OurServices from './Compo/OurServices/OurServices';
import OurPartners from './Compo/Partner/OurPartners';



const App = () => {
  return (
    <>
    {/* <Navbar />
    <Home />
    <OurServices />
    <BecomeCustomer />
    <OurPartners />
    <Footer /> */}
    <Logistics />
    </>
  )
}

export default App;