import React from 'react'
import GoldBar from '../../storage/precious-metal-tradings/1654169560.png';
import GoldCoin from '../../storage/precious-metal-tradings/1654171352.png';
import SilverBar from '../../storage/precious-metal-tradings/1654171505.png';
import SilverCoin from '../../storage/precious-metal-tradings/1654171649.png';
import PlatinBar from '../../storage/precious-metal-tradings/1654171775.png';
import PalladiumBar from '../../storage/precious-metal-tradings/1654171869.png';
import NumisCoin from '../../storage/precious-metal-tradings/1654171912.png';

const OnlineMetals = () => {
    
    const OnlineData1 =[{id:2, textname: 'Gold bars',metallogo: `${GoldBar}`},
    {id:3,textname: 'Gold Coins',metallogo: `${GoldCoin}`},
    {id:4,textname: 'Silver bars',metallogo: `${SilverBar}`},
    {id:5,textname: 'Silver Coins',metallogo: `${SilverCoin}`},
    {id:6,textname: 'Platinum bars',metallogo: `${PlatinBar}`},
    {id:7,textname: 'Palladium bars',metallogo: `${PalladiumBar}`},
    {id:8,textname: 'Numismatic coins',metallogo: `${NumisCoin}`}]

   

  return (
    <>
        <section className="py-3 py-lg-5">
    <div className="container px-lg-5">
        <h3 className="h2 text-center fw-bold mb-3 mb-lg-5">Buying precious metals online</h3>
        <div className="row ">
            {React.Children.toArray( OnlineData1.map((showData)=>{
                return(
                    <>
                        <div className="col-md-3 py-2 col-6" key={showData.id}>
                          <a href="">
                            <div className="metal-coin-box">
                                <div className="avatar p-lg-3 bg-primary-light" >
                                    <img src={showData.metallogo} className="img-fluid" alt="..."/>
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