import React,{useContext} from 'react'
import ReactTooltip from "react-tooltip";
import { NavLink } from "react-router-dom";
import { SiteData } from "../../App";

const SideMenu = () => {
  const SiteDataInfo = useContext(SiteData);
  let timeout;
  const ScrollToContactSection = () => {
    timeout = setTimeout(SlideToContact, 300);
  };
const SlideToContact = () =>{
 window.scrollTo({
  top:900,
  behavior: 'smooth'
 })
}

  return (
    <>
    {/* <!-- Sidebar Social Menu --> */}
    <aside className="sticky-contact-bar">
        <nav>
            <a data-tip  data-for="Shop_now" href="https://www.rheingold-edelmetall.com/" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-cart-shopping"></i></a>
            <ReactTooltip id="Shop_now"  place="right" effect="solid">{SiteDataInfo.outPutArray.mobile_shop_now}</ReactTooltip>
            <a data-tip data-for="Call_us" href="tel:004233926101" ><i className="fa-solid fa-phone"></i></a>
            <ReactTooltip id="Call_us" place="right" effect="solid">{SiteDataInfo.outPutArray.mobile_call_us}</ReactTooltip>
            <NavLink  data-tip data-for="Visit_us" to="contactus" onClick={ScrollToContactSection} ><i className="fa-solid fa-location-dot"></i></NavLink>
            <ReactTooltip id="Visit_us" place="right" effect="solid">{SiteDataInfo.outPutArray.mobile_visit_us}</ReactTooltip>
            <NavLink data-tip data-for="Contact_us" to="contactus" onClick={ScrollToContactSection} ><i className="fa-solid fa-envelope"></i></NavLink>
            <ReactTooltip id="Contact_us" place="right" effect="solid">{SiteDataInfo.outPutArray.contact_title}</ReactTooltip>
        </nav>
    </aside>
    {/* <!-- / Sidebar Social Menu --> */}
    
    </>
  )
}

export default SideMenu;