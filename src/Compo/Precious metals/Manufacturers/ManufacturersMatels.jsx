import React from 'react'
import ManufactureLogo1 from '../../storage/precious-metal-tradings/1654172249.jpg';
import ManufactureLogo2 from '../../storage/precious-metal-tradings/1654172264.jpg';
import ManufactureLogo3 from '../../storage/precious-metal-tradings/1654172278.jpg';
import ManufactureLogo4 from '../../storage/precious-metal-tradings/1654172288.jpg';

const ManufacturersMatels = () => {

    const Manufacture = [{logodata: `${ManufactureLogo1}`},
    {logodata: `${ManufactureLogo2}`},
    {logodata: `${ManufactureLogo3}`},
    {logodata: `${ManufactureLogo4}`},];
  return (
    <>
    <section  className="pb-3 pb-lg-5">
    <div className="container-xxl px-lg-5 text-center">
        <div className="row">
            <div className="col-mdd-12">
                <a className="bg-primary btn btn-primary fs-5 p-lg-4 text-start text-white w-100 metal-btn" type="button">
                    Bars available from the following manufacturers
                </a>
            </div>
        </div>
        <div className="row our-partner my-md-5 my-3">
            {Manufacture.map((showData)=>{
                return(
                    <>
                        <div className="col-md-3 col-6">
                            <div className="partner-box">
                                <div className="partner-box-item">
                                    <img src={showData.logodata} alt="logo"
                                        className=""/>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
            
            
        </div>
    </div>
</section>
    
    </>
  )
}

export default ManufacturersMatels;