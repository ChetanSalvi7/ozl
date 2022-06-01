import React from 'react'
import Rheingold from '../../backend/img/precious-metal/rheingold-logo.png'
import ManufacturersMatels from './Manufacturers/ManufacturersMatels'
import OnlineMetals from './Online metals/OnlineMetals'

const PreciousMetals = () => {
    return (
        <>
            <section className="py-3 py-lg-5">
                <div className="container-xxl px-lg-5 text-center">
                    <p className="mb-3">Our partner for precious metals</p>
                    <img src={Rheingold} alt="" className="img-fluid"/>
                </div>
            </section>
            <OnlineMetals />
            <ManufacturersMatels />
        </>
    )
}

export default PreciousMetals