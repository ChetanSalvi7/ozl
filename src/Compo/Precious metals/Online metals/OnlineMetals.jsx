import React from 'react'

const ImageUrl ='https://ozl.v-protect.eu/ozl/storage/precious-metal-tradings/'
const ImageBox = [{
    GoldBar: '1654169560.png',
    GoldCoin: '1654171352.png',
    SilverBar: '1654171505.png',
    SilverCoin: '1654171649.png',
    PlatinBar: '1654171775.png',
    PalladiumBar: '1654171869.png',
    NumisCoin: '1654171912.png',
}];

const OnlineMetals = () => {

    const OnlineData1 = [{ id: 2, textname: 'Gold bars', metallogo: `${ImageUrl+ImageBox[0].GoldBar}`,link:'https://www.rheingold-edelmetall.com/en/gold/goldbarren' },
    { id: 3, textname: 'Gold Coins', metallogo: `${ImageUrl+ImageBox[0].GoldCoin}`,link:'https://www.rheingold-edelmetall.com/en/gold/goldmunzen' },
    { id: 4, textname: 'Silver bars', metallogo: `${ImageUrl+ImageBox[0].SilverBar}`,link:'https://www.rheingold-edelmetall.com/en/silber/silberbarren' },
    { id: 5, textname: 'Silver Coins', metallogo: `${ImageUrl+ImageBox[0].SilverCoin}` ,link:'https://www.rheingold-edelmetall.com/en/silber/silbermunzen'},
    { id: 6, textname: 'Platinum bars', metallogo: `${ImageUrl+ImageBox[0].PlatinBar}`,link:'https://www.rheingold-edelmetall.com/en/platin/platinbarren' },
    { id: 7, textname: 'Palladium bars', metallogo: `${ImageUrl+ImageBox[0].PalladiumBar}` ,link:'https://www.rheingold-edelmetall.com/en/palladium/palladiumbarren'},
    { id: 8, textname: 'Numismatic coins', metallogo: `${ImageUrl+ImageBox[0].NumisCoin}`,link:'https://www.rheingold-edelmetall.com/en/numismatik' }]



    return (
        <>
            <section className="py-3 py-lg-5">
                <div className="container px-lg-5">
                    <h3 className="h2 text-center fw-bold mb-3 mb-lg-5">Buying precious metals online</h3>
                    <div className="row ">
                        {React.Children.toArray(OnlineData1.map((showData) => {
                            return (
                                <>
                                    <div className="col-md-3 py-2 col-6" key={showData.id}>
                                        <a href={showData.link} target='_blank'>
                                            <div className="metal-coin-box">
                                                <div className="avatar p-lg-3 bg-primary-light" >
                                                    <img src={showData.metallogo} className="img-fluid" alt="logo" />
                                                </div>
                                            </div>
                                            <p className="fw-bold pt-3 text-center">{showData.textname}</p>
                                        </a>
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

export default OnlineMetals