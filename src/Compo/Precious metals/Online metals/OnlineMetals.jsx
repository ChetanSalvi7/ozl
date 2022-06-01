import React from 'react'
import GoldBar from '../../../backend/img/precious-metal/gold-bar.png';
import GoldCoin from '../../../backend/img/precious-metal/gold-coin.png';
import SilverBar from '../../../backend/img/precious-metal/silver-bar.png';
import SilverCoin from '../../../backend/img/precious-metal/silver-coin.png';
import PlatinBar from '../../../backend/img/precious-metal/platin-bar.png';
import PalladiumBar from '../../../backend/img/precious-metal/palladium-bar.png';
import NumisCoin from '../../../backend/img/precious-metal/numis-coin.png';

const OnlineMetals = () => {
    
    const OnlineData1 =[{textname: 'Gold bars',metallogo: `${GoldBar}`},
    {textname: 'Gold Coins',metallogo: `${GoldCoin}`},
    {textname: 'Silver bars',metallogo: `${SilverBar}`},
    {textname: 'Silver Coins',metallogo: `${SilverCoin}`},]

    const OnlineData2 = [{textname: 'Platinum bars',metallogo: `${PlatinBar}`},
    {textname: 'Palladium bars',metallogo: `${PalladiumBar}`},
    {textname: 'Numismatic coins',metallogo: `${NumisCoin}`}];

  return (
    <>
        <section className="py-3 py-lg-5">
    <div className="container px-lg-5">
        <h3 className="h2 text-center fw-bold mb-3 mb-lg-5">Buying precious metals online</h3>
        <div className="row">
            {OnlineData1.map((showData)=>{
                return(
                    <>
                        <div className="col-md-3 col-6">
                          <a href="">
                            <div className="metal-coin-box">
                                <div className="avatar p-lg-3 bg-primary-light">
                                    <img src={showData.metallogo} className="img-fluid" alt="..."/>
                                </div>
                            </div>
                            <p className="fw-bold pt-3 text-center">{showData.textname}</p>
                            </a>
                         </div>
                    </>
                )
            })}
            
        </div>

        <div className="row justify-content-center py-md-4">
            {OnlineData2.map((showData)=>{
                return(
                    <>
                        <div className="col-md-3 col-6">
                            <a href="">
                                <div className="metal-coin-box">
                             <div className="avatar p-lg-3 bg-primary-light">
                                    <img src={showData.metallogo} className="img-fluid" alt="..."/>
                                </div>
                            </div>
                            <p className="fw-bold pt-3 text-center">{showData.textname}</p>
                            </a>
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

export default OnlineMetals