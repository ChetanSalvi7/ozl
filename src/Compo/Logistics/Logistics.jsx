import React from 'react'
import LogisticsLogo1 from '../../backend/img/logistic/01.jpg'
import LogisticsLogo2 from '../../backend/img/logistic/02.jpg'
import LogisticsLogo3 from '../../backend/img/logistic/03.jpg'
import LogisticsLogo4 from '../../backend/img/logistic/04.jpg'
import LogisticsLogo5 from '../../backend/img/logistic/05.jpg'
import LogisticsLogo6 from '../../backend/img/logistic/06.jpg'

import InternationSecurity from '../../backend/img/logistic/Internation-Security.svg'
import WorldwideCustomCreation from '../../backend/img/logistic/Worldwide_custom_creation.svg'
import Insurance from '../../backend/img/logistic/Insurance.svg'
import SecurityLocations from '../../backend/img/logistic/Security-Locations.svg'
import Logistics1 from '../../backend/img/logistic/Logistics.svg'
import Partners from '../../backend/img/logistic/Partners.svg'
import TrailorMadeTransport from '../../backend/img/logistic/Trailor-made_Transport.svg'

const Logistics = () => {

    const Data1 =[{name:'International security transportats',Logo: `${InternationSecurity}`},
        {name:'Worldwide customs clearance',Logo: `${WorldwideCustomCreation}`},
        {name:'Door to Door insurance coverage',Logo: `${Insurance}`},
        {name:'High Security Standards',Logo: `${SecurityLocations}`},
        {name:'Global professional logistics',Logo: `${Logistics1}`},
        {name:'Handling by renowned partners',Logo: `${Partners}`},
        {name:'Multiple high security locations',Logo: `${SecurityLocations}`},
        {name:'Tailor-made special transports',Logo: `${TrailorMadeTransport}`}];

    const Data2 = [{dataname: 'Optimum solutions via renowned partners',images: `${LogisticsLogo1}`},
        {dataname: 'Optimum solutions via renowned partners',images: `${LogisticsLogo2}`},
        {dataname: 'Optimum solutions via renowned partners',images: `${LogisticsLogo3}`},
        {dataname: 'Optimum solutions via renowned partners',images: `${LogisticsLogo4}`},
        {dataname: 'Optimum solutions via renowned partners',images: `${LogisticsLogo5}`},
        {dataname: 'Optimum solutions via renowned partners',images: `${LogisticsLogo6}`}];

  return (
    <>
    <section class="py-3 py-lg-5">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-7">
                <div class="card mb-3 mb-lg-5">
                    <div class="card-body border border-2 border-primary text-center">
                        <h3 class="h2 text-center fw-bold mb-3">Update COVID-19</h3>
                        <p>The travel restriction due to the current COVID-19 situation does not apply to international security logistics. Worldwide security transports can be organized and carried out to and from Liechtenstein.</p>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body border border-2 border-primary text-center">
                        <h3 class="h2 text-center fw-bold mb-3">Logistics</h3>
                        <p>Our internal logistics specialists take care of the entire logistics process chain, from collection to customs clearance. From our customs warehouse, we can transport valuables to national or international destinations. Multiple locations worldwide enable you to achieve optimal diversification when it comes to storing your valuables. Working with renowned partners enables us to guarantee a professional service in terms of security, handling, insurance and time management during the transportation of valuables.</p>
                        <p>We offer regular routes from Triesen to Zurich, Frankfurt, London, Hong Kong, Singapore and New York, for example.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-3 mt-lg-5">
            {Data1.map((showData1)=>{
                return(
                    <>
                    <div class="col-6 col-md-3 mb-3 d-flex">
                        <div class="card text-center flex-fill style-1">
                            <div class="card-body">
                                <img src={showData1.Logo} alt="logo" class="img-fluid mb-4"/>
                                <h5 class="h5">{showData1.name}</h5>
                            </div>
                        </div>
                    </div>
                    </>
                )
            })}
        </div>

        <div class="img-grid mt-3 mt-lg-5">
            {Data2.map((showData2)=>{
                return(
                    <>
                        <div class="img-box">
                            <img src={showData2.images} alt="logo" class="img-fluid"/>
                            <div class="img-detail">
                                <h5 class="h4">{showData2.dataname}</h5>
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

export default Logistics;