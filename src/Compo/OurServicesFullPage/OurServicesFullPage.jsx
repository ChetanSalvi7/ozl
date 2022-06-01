import React from 'react'

const OurServicesFullPage = () => {

    const RentalData = [{Pname: 'Determination and verification of the contracting party (client)',className1: 'bi bi-check-circle-fill fs-5 text-success',className2: 'bi bi-check-circle-fill fs-5 text-success'},
    {Pname: 'Determination of the beneficial owner',className1: 'bi bi-check-circle-fill fs-5 text-success',className2: 'bi bi-check-circle-fill fs-5 text-success'},
    {Pname: 'Logging access',className1: 'bi bi-check-circle-fill fs-5 text-success',className2: 'bi bi-x-circle-fill fs-5 text-danger'},
    {Pname: 'Suspicion report according to Art. 17 SPG',className1: 'bi bi-check-circle-fill fs-5 text-success',className2: 'bi bi-check-circle-fill fs-5 text-success'},
    {Pname: 'Preparation of business profile (Source of funds & background of assets)',className1: 'bi bi-x-circle-fill fs-5 text-danger',className2: 'bi bi-check-circle-fill fs-5 text-success'},
    {Pname: 'Keeping and updating of inventory list.',className1: 'bi bi-x-circle-fill fs-5 text-danger',className2: 'bi bi-check-circle-fill fs-5 text-success'}]

  return (
    <>
        <section className="py-3 py-lg-5" id="ourServicenav">
    <div className="container px-lg-5">
        <h3 className="h2 text-center fw-bold mb-3 mb-lg-5">Our Services</h3>
        <div className="row align-items-start">
            <div className="col-md-2 nav flex-sm-column nav-pills pe-0 mb-4 mb-sm-0" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#custody" type="button" role="tab" aria-controls="custody" aria-selected="true">Custody in a fully regulated environment</button>
                <button className="nav-link" data-bs-toggle="pill" data-bs-target="#allrisk" type="button" role="tab" aria-controls="allrisk" aria-selected="false">All risk insurance</button>
                <button className="nav-link" data-bs-toggle="pill" data-bs-target="#bankable" type="button" role="tab" aria-controls="bankable" aria-selected="false">Bankable reconciliation</button>
                <button className="nav-link" data-bs-toggle="pill" data-bs-target="#segregated" type="button" role="tab" aria-controls="segregated" aria-selected="false">Segregated storage & customs bond vault</button>
                <button className="nav-link" data-bs-toggle="pill" data-bs-target="#assetprotection" type="button" role="tab" aria-controls="assetprotection" aria-selected="false">Asset protection</button>
                <button className="nav-link" data-bs-toggle="pill" data-bs-target="#fees" type="button" role="tab" aria-controls="fees" aria-selected="false">Fees</button>
                <button className="nav-link" data-bs-toggle="pill" data-bs-target="#conratats" type="button" role="tab" aria-controls="contracts" aria-selected="false">Contracts</button>
            </div>
            <div className="col-md-10 tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active ps-md-5 py-md-4 py-3" id="custody" role="tabpanel">
                    <p>Liechtenstein has committed itself again to a high standard of compliance with international and european requirements in the area of fighting money laundering and terrorist financing.</p>
                    <p>Due to the implementation of the 5th Money Laundering Directive (Directive (EU) 2018/843), the custody of precious metals in Liechtenstein is fully ruled by the Liechtenstein Law on Professional Due Diligence to Fight Money Laundering, Organized crime and Terrorist Financing (Art. 3 para. 1 let. V SPG). This means that all documents and information on the contracting party, the beneficial owners and the origin of funds must be documented - i.e. all information that a bank also requires from its clients.</p>
                    <p>This represents the key value, as your assets will remain "bankable" and can be freely transferred within the financial system at any time.</p>
                    <p><strong>Requirements</strong></p>
                    <p>The following due diligence requirements (custodian) are necessary for all business relationships.</p>

                    <table className="contenttable">
                        <thead>
                            <tr>
                                <th></th>
                                <th className="text-center px-5 pb-3"><strong>Rental</strong></th>
                                <th className="text-center px-3 pb-3"><strong>Custody</strong></th>
                            </tr>
                        </thead>
                        <tbody>
                            {RentalData.map((dataShow)=>{
                                return(
                                    <>
                                        <tr>
                                            <td>
                                                <p>{dataShow.Pname}</p>
                                            </td>
                                            <td className="text-center"><i className={dataShow.className1}></i></td>
                                            <td className="text-center"><i className={dataShow.className2}></i></td>
                                        </tr>
                                    </>
                                )
                            })}
                            
                        </tbody>
                    </table>
                    <p>In both cases, the following points must be observed. </p>
                    <ul>
                        <li>The contracting partner must be identified by documenting personal data and passport copies, in the case of a legal entity by means of an extract from the commercial register.</li>
                        <li>All beneficial owners must be documented with their personal data and passport copies.</li>
                        <li>All accesses in the area of renting and all deposits and removals from storage must be documented.</li>
                    </ul>
                    <p><strong>Supervisory authorityThe Financial Market Authority Liechtenstein (FMA) is entrusted with monitoring of the due diligence provisions and will review the due diligence files regularly.</strong></p>
                    <p>The Financial Market Authority Liechtenstein (FMA) is entrusted with monitoring of the due diligence provisions and will review the due diligence files regularly.</p>
                    <p><strong>For further question please contact us.</strong></p>
                    <a href="https://www.ozl.li/fileadmin//user_upload/OZL_Regulierung_EN.pdf" className="btn btn-lg btn-primary px-5 py-3 text-white" role="button">PDF</a>
                </div>
                <div className="tab-pane fade ps-md-5 py-md-4 py-3" id="allrisk" role="tabpanel">
                    <p><strong>Security</strong></p>
                    <p>A specially designed security system, designed and executed by Swiss experts, guarantees the highest security standards in the whole building according to strictly defined procedures.</p>
                    <p><strong>Insurance</strong></p>
                    <p>All stored precious metals and assets are additionally fully insured by OZL Offenes Zolllager in Liechtenstein AG by an all-risk insurance.</p>
                    <p>Insurance coverage is provided for the following events :</p>
                    <ul>
                        <li>burglary</li>
                        <li>robbery</li>
                        <li>damage by natural forces</li>
                        <li>loss</li>
                        <li>damage</li>
                        <li>embezzlement</li>
                    </ul>
                    <p><strong>Embezzlement</strong></p>
                    <p>In addition to the basic risks, there is full insurance against the risk of embezzlement. All employees of OZL AG are subject to the strictest security processes, are regularly screened and are part of the insurance concept.</p>
                    <p><strong>For further question please contact us.</strong></p>
                    <a href="https://www.ozl.li/fileadmin//user_upload/OZL_Versicherung_EN.pdf" className="btn btn-lg btn-primary px-5 py-3 text-white" role="button">PDF</a>
                </div>
                <div className="tab-pane fade ps-md-5 py-md-4 py-3" id="bankable" role="tabpanel">
                    <p><strong>Stock accounting system</strong></p>
                    <p>Besides the physical storage in our high security warehouse, accurate stock accounting is the most important factor to guarantee professionalism and transparency. Each precious metal item is entered accordingly with serial number, weight and seal number and acknowledged to the client with a storage confirmation.</p>
                    <p>Our stock accounting system enables a day-by-day representation of our clients' precious metal positions.</p>
                    <p><strong>Data Processing & Valor</strong></p>
                    <p>In addition, we also offer data exports up to individual interfaces, especially for institutional investors and banks, in order to make the administration as efficient as possible.</p>
                    <p><strong>For further question please contact us.</strong></p>
                    <div className="d-flex align-items-center">
                        <a href="https://www.ozl.li/fileadmin//user_upload/OZL_Reporte_EN.pdf" className="btn btn-lg btn-primary px-5 py-3 text-white me-3" role="button">FACTSHEET REPORT (PDF)</a>
                        <a href="https://www.ozl.li/fileadmin//user_upload/Stock_Report.pdf" className="btn btn-lg btn-primary px-5 py-3 text-white" role="button">STOCK REPORT (PDF)</a>
                    </div>
                </div>
                <div className="tab-pane fade ps-md-5 py-md-4 py-3" id="segregated" role="tabpanel">
                    <p>OZL Offnes Zolllager in Liechtenstein AG offers the possibility of individual safekeeping of precious metals in domestic storage at several certified locations in the Principality of Liechtenstein. In addition, there is also the possibility of safekeeping in the bonded warehouse (often also referred to as duty-free warehouse). This enables the storage of precious metals (silver, platinum, palladium) free of VAT.</p>
                    <p><strong>Individual custody</strong></p>
                    <p>Your physical precious metals are kept completely separate from other customers' holdings and stored within our own designated storage facility.</p>
                    <p>This ensures for 100% that our clients only receive back the precious metals that they originally handed out to us for safekeeping.</p>
                    <p>The clients stock list includes the assignment of the bar numbers, or in the case of coins, the seal number of the sealed storage boxes.</p>
                    <p><strong>For further questions please contact us.</strong></p>
                    <a href="https://www.ozl.li/fileadmin//user_upload/OZL_Einzelverwahrung_EN.pdf" className="btn btn-lg btn-primary px-5 py-3 text-white" role="button">PDF</a>
                </div>
                <div className="tab-pane fade ps-md-5 py-md-4 py-3" id="assetprotection" role="tabpanel">
                    <p>Protecting own property from unauthorized access by third party is a fundamental right for everyone.</p>
                    <p><strong>Liechtenstein offers a couple of unbeatable factors:</strong></p>
                    <ul>
                        <li>One country, two economic areas (customs and currency union Switzerland / EEA agreement</li>
                        <li>Political stability (no acts of war for more than 200 years / founded in 1719</li>
                        <li>no national dept</li>
                        <li>no emergency law</li>
                        <li>no recognition of foreign judgments</li>
                    </ul>
                </div>
                <div className="tab-pane fade ps-md-5 py-md-4 py-3" id="fees" role="tabpanel">
                    <div className="d-flex align-items-center">
                        <a href="https://www.ozl.li/fileadmin//user_upload/OZL_Preisliste_01072021_EN_neu.pdf" className="btn btn-lg btn-primary px-5 py-3 text-white me-3" role="button">ALLOCATED CUSTODY PRECIOUS METALS (PDF)</a>
                        <a href="https://www.ozl.li/fileadmin//user_upload/OZL_Preisliste_EV__DE_-Diamanten_EN.pdf" className="btn btn-lg btn-primary px-5 py-3 text-white me-3" role="button">ALLOCATED CUSTODY DIAMONDS (PDF)</a>
                        <a href="https://www.ozl.li/fileadmin//user_upload/Preisliste_2021_EN__neu.pdf" className="btn btn-lg btn-primary px-5 py-3 text-white" role="button">SAFE DEPOSIT BOXES AND VAULTS (PDF)</a>
                    </div>
                </div>
                <div className="tab-pane fade ps-md-5 py-md-4 py-3" id="conratats" role="tabpanel">
                    <div className="d-flex align-items-center">
                        <a href="https://www.ozl.li/fileadmin//user_upload/Verwahrvertrag_OZL_de_en.pdf" className="btn btn-lg btn-primary px-5 py-3 text-white me-3" role="button">CUSTODY AGREEMENT (PDF)</a>
                        <a href="https://www.ozl.li/fileadmin//user_upload/Mietvertrag_OZL_de_en.pdf" className="btn btn-lg btn-primary px-5 py-3 text-white" role="button">RENTAL AGREEMENT (PDF)</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default OurServicesFullPage;