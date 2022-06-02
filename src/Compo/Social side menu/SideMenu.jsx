import React from 'react'

const SideMenu = () => {
  return (
    <>
    {/* <!-- Sidebar Social Menu --> */}
    <aside className="sticky-contact-bar">
        <nav>
            <a title="Shop Now" data-bs-toggle="tooltip" data-bs-placement="right" href="http://" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-cart-shopping"></i></a>
            <a title="Call us" data-bs-toggle="tooltip" data-bs-placement="right" href="http://" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-phone"></i></a>
            <a title="Visit us" data-bs-toggle="tooltip" data-bs-placement="right" href="http://" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-location-dot"></i></a>
            <a title="Contact us" data-bs-toggle="tooltip" data-bs-placement="right" href="http://" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-envelope"></i></a>
        </nav>
    </aside>
    {/* <!-- / Sidebar Social Menu --> */}
    
    </>
  )
}

export default SideMenu;