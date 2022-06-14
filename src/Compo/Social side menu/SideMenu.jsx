import React from 'react'
import { NavLink } from "react-router-dom";

const SideMenu = () => {
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
            <a title="Shop Now" data-bs-toggle="tooltip" data-bs-placement="right" href="https://www.rheingold-edelmetall.com/" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-cart-shopping"></i></a>
            <a title="Call us" data-bs-toggle="tooltip" data-bs-placement="right" href="tel:004233926101" ><i className="fa-solid fa-phone"></i></a>
            <NavLink title="Visit us" data-bs-toggle="tooltip" data-bs-placement="right" to="contactus" onClick={ScrollToContactSection} ><i className="fa-solid fa-location-dot"></i></NavLink>
            <NavLink title="Contact us" data-bs-toggle="tooltip" data-bs-placement="right" to="contactus" onClick={ScrollToContactSection} ><i className="fa-solid fa-envelope"></i></NavLink>
        </nav>
    </aside>
    {/* <!-- / Sidebar Social Menu --> */}
    
    </>
  )
}

export default SideMenu;