import React from 'react'

const ImageUrl = 'https://ozl.v-protect.eu/ozl/storage/precious-metal-tradings/'

const ImageBox = [{
    ManufactureLogo1: '1654172249.jpg',
    ManufactureLogo2: '1654172264.jpg',
    ManufactureLogo3: '1654172278.jpg',
    ManufactureLogo4: '1654172288.jpg'}];

const ManufacturersMatels = () => {

    const Manufacture = [
        { id: 2, logodata: `${ImageUrl + ImageBox[0].ManufactureLogo1}` },
        { id: 3, logodata: `${ImageUrl + ImageBox[0].ManufactureLogo2}` },
        { id: 4, logodata: `${ImageUrl + ImageBox[0].ManufactureLogo3}` },
        { id: 5, logodata: `${ImageUrl + ImageBox[0].ManufactureLogo4}` }];
    return (
        <>
            <section className="pb-3 pb-lg-5">
                <div className="container-xxl px-lg-5 text-center">
                    <div className="row">
                        <div className="col-mdd-12">
                            <a className="bg-primary btn btn-primary fs-5 p-lg-4 text-start text-white w-100 metal-btn" href='https://www.rheingold-edelmetall.com/' target='_blank' type="button">
                                Bars available from the following manufacturers
                            </a>
                        </div>
                    </div>
                    <div className="row our-partner my-md-5 my-3">
                        {React.Children.toArray(Manufacture.map((showData) => {
                            return (
                                <>
                                    <div className="col-md-3 col-6" key={showData.id}>
                                        <div className="partner-box">
                                            <div className="partner-box-item">
                                                <img src={showData.logodata} alt="logo"
                                                    className="" />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }))}


                    </div>
                </div>
            </section>

        </>
    )
}

export default ManufacturersMatels;