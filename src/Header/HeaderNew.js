import React from 'react'
import { ImFacebook } from 'react-icons/im'
import "./HeaderNew.css"
import {FaTwitter,FaPinterestP} from "react-icons/fa"
import {ImLinkedin2} from "react-icons/im"
import {CgProfile} from "react-icons/cg"
// import {IoIosArrowDown} from "react-icons/io"
import logo from "./logo.png"
import IoIosArrowDown from "./IoIosArrowDown.png";
import { HiOutlineMenu } from "react-icons/hi";
import reactMenuIcon from "./reactMenuIcon.webp"

function HeaderNew() {
    return (
        <header className='HeaderUpper'>
            <div>
                <div className='Header1Level'>
                    <nav className="NavClass">
                        <a>Celebrity Directory</a>
                        <a>...</a>
                        <a>Enroll as Celeb</a>
                    </nav>
                    <nav className="NavClass">
                       <ImFacebook  className='IconsUnderNavClass'/>
                       <FaTwitter className='IconsUnderNavClass' />
                       <ImLinkedin2 className='IconsUnderNavClass' />
                       <FaPinterestP className='IconsUnderNavClass' />
                       <CgProfile className='IconsUnderNavClass' />
                      
                       <p>Sign in</p>
                       <p>...</p>
                       <p>Register</p>
                       <button className='managerLoginButton'>Manager Login</button>

                        </nav>
                </div>
                <span className='Header2LevelNew'>
                    <div className='Header2Level'>
                    <div className='LogoInsideHeader2Level'>
                        <img src={logo} alt="logo" style={{height:"41px", width:"140px"}}/>
                    </div>
                    <div style={{display:"flex", marginLeft:"30px", marginTop:"auto", marginBottom:'auto'}} >
                    <div className='insideHeader2Level'>
                        <p>MORIS PR</p>
                        <img src={IoIosArrowDown} style={{height:"15px", marginTop:"3px"}}  />
                    </div>
                    <div className='insideHeader2Level'>
                    <p>DIGITAL MARKETING</p>
                        <img src={IoIosArrowDown} style={{height:"15px", marginTop:"3px"}}  />
                    </div>
                    <div className='insideHeader2Level'>
                    <p>UX & INTERACTIVE</p>
                        <img src={IoIosArrowDown} style={{height:"15px", marginTop:"3px"}}  />
                    </div>
                    <div className='insideHeader2Level'>
                    <p>ECOMMERCE</p>
                        <img src={IoIosArrowDown} style={{height:"15px", marginTop:"3px"}}  />
                    </div>
                    <div className='insideHeader2Level'>
                    <p>CELEBRITY & INFLUENCEER</p>
                        <img src={IoIosArrowDown} style={{height:"15px", marginTop:"3px"}}  />
                    </div>
                    <div className='insideHeader2Level'>
                    <p>WHO WE ARE</p>
                        <img src={IoIosArrowDown} style={{height:"15px", marginTop:"3px"}}  />
                    </div>
                    </div>
                    
                    </div>
                    <div className='redBagroundForRockert'>
                    <a>GET A <br />
                        PROPOSAL</a>
                    <img src="https://testv13.demowebsitelinks.com/moris/images/rocket-icon.png" alt=""  className='Rocket'/>
                    <img src="https://testv13.demowebsitelinks.com/moris/images/cloud-patteren.png" alt="" className='CloudUnderRedBaground' />
                    </div>
                    <div style={{height:"100%", display:"flex", margin:"auto 10px"}}>
                        <img src="https://testv13.demowebsitelinks.com/moris/images/search-icon.png" alt="searchicon" className='SearchIcon' />
                        {/* <HiOutlineMenu className='MenuIconEdit' /> */}
                        <img src={reactMenuIcon} alt="menuIcon" style={{height:"30px", width:"30px", marginLeft:"10px"}} className="reactMenuIcon" />
                    </div>
                </span>
            </div>
        </header>
    )
}

export default HeaderNew
