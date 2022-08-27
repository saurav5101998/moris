import React from 'react'
import logo from "../Header/logo.png"
import "./FooterNew.css";
import { FaArrowUp, FaLongArrowAltRight } from "react-icons/fa"
import {BiCalendarAlt} from "react-icons/bi"
import masterCard from "./master-card-icon.png";
import { ImFacebook } from 'react-icons/im'
// import "./HeaderNew.css"
import {FaTwitter,FaPinterestP} from "react-icons/fa"
import {ImLinkedin2} from "react-icons/im"
import {CgProfile} from "react-icons/cg"

function FooterNew() {
    return (
        <footer style={{background:"#400049"}}>

            <div className='UpperFooter'>
                <img src={logo} alt="logo" />
                <div className='CicleDiv'>
                    <div className='LogoRoundCircle'>
                        <ImFacebook className='FacebookLogoround' />
                    </div>
                    <div className='LogoRoundCircle'>
                            <FaTwitter className='FacebookLogoround' />
                    </div>
                    <div className='LogoRoundCircle'>
                            <ImLinkedin2 className='FacebookLogoround' />
                    </div>
                    <div className='LogoRoundCircle'>
                        <FaPinterestP className='FacebookLogoround' />
                    </div>
                    <div className='LogoRoundCircle'>
                        <CgProfile className='FacebookLogoround' />
                    </div>
                </div>

            </div>
            <div className='LowerDiv2Level'>
                <div className='InsideLowerDiv2Level'>
                        <p className='HeadlingUnderLowerDiv'>Company</p>
                        <div className='insideLowerDivCompany'>
                            <FaArrowUp className='ArrowHandlerForFooter' />
                            <p>Contact</p>
                        </div>
                        <div className='insideLowerDivCompany'>
                            <FaArrowUp className='ArrowHandlerForFooter' />
                            <p>Support</p>
                        </div>
                        <div className='insideLowerDivCompany'>
                            <FaArrowUp className='ArrowHandlerForFooter' />
                            <p>Latest Blog</p>
                        </div>
                        <div className='insideLowerDivCompany'>
                            <FaArrowUp className='ArrowHandlerForFooter' />
                            <p>Pricing</p>
                        </div>
                        <div className='insideLowerDivCompany'>
                            <FaArrowUp className='ArrowHandlerForFooter' />
                            <p>Privacy Policy</p>
                        </div>
                        <div className='insideLowerDivCompany'>
                            <FaArrowUp className='ArrowHandlerForFooter' />
                            <p>     Book Celebrities</p>
                        </div>
                </div>

                <div className='InsideLowerDiv2Level'>
                <p className='HeadlingUnderLowerDiv'>Solutions</p>
                        <div className='insideLowerDivCompany'>
                            <FaArrowUp className='ArrowHandlerForFooter' />
                            <p>PR Marketing</p>
                        </div>
                        <div className='insideLowerDivCompany'>
                            <FaArrowUp className='ArrowHandlerForFooter' />
                            <p>Influencers Marketing</p>
                        </div>
                        <div className='insideLowerDivCompany'>
                            <FaArrowUp className='ArrowHandlerForFooter' />
                            <p>Social Media Management</p>
                        </div>
                        <div className='insideLowerDivCompany'>
                            <FaArrowUp className='ArrowHandlerForFooter' />
                            <p>Digital Marketing</p>
                        </div>
                        <div className='insideLowerDivCompany'>
                            <FaArrowUp className='ArrowHandlerForFooter' />
                            <p>SEO Marketing</p>
                        </div>
                        <div className='insideLowerDivCompany'>
                            <FaArrowUp  className='ArrowHandlerForFooter' />
                            <p>Lead Genration</p>
                        </div>
                </div>

                <div className='InsideLowerDiv2Level'>
                <p className='HeadlingUnderLowerDiv'>Recent Articles</p>
                        <div className='insideLowerDivCompany'>
                            {/* <FaArrowUp /> */}
                            <p>Twice profit than before there is <br />
                                wasn’t ever got in business</p>
                        </div>
                        <div className='insideLowerDivCompany'>
                            <BiCalendarAlt  className='CalenderForBusiness' />
                            <div className='DateFilterForCalender'>July 19, 2018</div>
                        </div>
                        <div className='insideLowerDivCompany'>
                            {/* <FaArrowUp /> */}
                            <p>Twice profit than before there is <br />
                               wasn’t ever got in business</p>
                        </div>
                        <div className='insideLowerDivCompany'>
                            <BiCalendarAlt className='CalenderForBusiness' />
                            <div className='DateFilterForCalender'>July 19, 2018</div>
                        </div>
                        {/* <div className='insideLowerDivCompany'>
                            <FaArrowUp />
                            <p>SEO Marketing</p>
                        </div>
                        <div className='insideLowerDivCompany'>
                            <FaArrowUp />
                            <p>Lead Genration</p>
                        </div> */}
                </div>

                <div className='InsideLowerDiv2Level'>
                        <p className='HeadlingUnderLowerDiv'>Grow your Brand</p>
                        <div className='contactUsDiv'>
                            <input type="text" placeholder='Name' className='InputForPraposal'/>
                            <input type="email" placeholder='Email' className='InputForPraposal' />
                            <input type="number" placeholder='Phone' className='InputForPraposal' />
                            <button className='ButtonForPraposal'>GET YOUR PROPOSAL <FaLongArrowAltRight style={{fontSize:"12px"}} /></button>
                        </div>
                </div>

            </div>

            <div className='UpperDivInsideLevel2Footer'>
            <div className='DivInsideLevel2Footer'>
                <p>
                Partnership:
                </p>
                <img src="https://testv13.demowebsitelinks.com/moris/images/silma-market.png" alt='image1' className='ImageFlter' />
                <img src="https://testv13.demowebsitelinks.com/moris/images/moris-talent.png" alt="image2" className='ImageFlter2' />
                <img src="https://testv13.demowebsitelinks.com/moris/images/book-moris.png" alt="image3" className='ImageFlter3' />
                <img src="https://testv13.demowebsitelinks.com/moris/images/moris-gigs.png" alt="image4" className='ImageFlter4' />
                <div className='VisaCardDiv'>
                <img src="https://testv13.demowebsitelinks.com/moris/images/visa-icon.png" alt="Visacard" className='Visacard' />
                <img src={masterCard} alt="Visacard" className='Visacard' />
                <img src="https://testv13.demowebsitelinks.com/moris/images/maestro-icon.png" alt="Visacard" className='Visacard' />
                <img src="https://testv13.demowebsitelinks.com/moris/images/paypal-icon.png" alt="Visacard" className='Visacard' />

            </div>
            </div>
            {/* <p>Copyrights By MorisPR - 2021. All Rights Reserved.</p> */}
            </div>
                        <div className='CopyRightDiv'>
                        <p>Copyrights By MorisPR - 2021. All Rights Reserved.</p>
                        </div>
            {/* </div> */}

        </footer>
    )
}

export default FooterNew
