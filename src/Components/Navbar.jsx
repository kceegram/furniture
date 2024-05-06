
'use client'

import React from 'react'
import './Navbar.css'
import { useState } from 'react';

import { IoMailUnreadOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbCaretDownFilled } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { IoSunnySharp } from "react-icons/io5";



import Image from 'next/image';
import logo from './Images/logo.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Navbar = () => {

    AOS.init();

    const [showSideBar, setShowSideBar] = useState(false)

    const handleShowSideBar = () => {
        setShowSideBar(true)
    }


    const handleHideSideBar = () => {
        setShowSideBar(false)
    }

  return (
    <div>
        <div className='myNavBar'>

            <div className='topNav'>
              <p>Welcome to our Organic store</p>

                <ul>
                    <li><IoMailUnreadOutline />groshop@gmail.com</li>
                    <li><MdOutlineLocationOn />Washington, New York City</li>
                    <li>English <TbCaretDownFilled /></li>
                    <li>$USDC <TbCaretDownFilled /></li>
                    <li>Dark <IoMdMoon /></li>
                </ul>
            </div>

        


            <div className='bottomNav'>
                <div className='bottomNavImg'>
                  <Image src={logo} alt='' width={150} />
                </div>
                <div className='bottomNavRight'>
                    <div className='singleDiv1'>
                        <li>Browse Category <IoIosArrowDown /></li>
                    </div>
                     <ul>
                        <li>Home <IoIosArrowDown /></li>    
                        <li className='blogDrop2'>Product <IoIosArrowDown /></li>
                        <li className='blogDrop3'>Blog <IoIosArrowDown /></li>
                        <li>Pages <IoIosArrowDown /></li>
                     </ul>

                    <div className='bottomNavIcons'>
                        <p><FiSearch /></p>
                        <p><IoPersonOutline /></p>
                        <p><HiOutlineShoppingBag /></p>
                    </div>

                    <div className='bottomNavContact'>
                        <p className='menu' onClick={handleShowSideBar}><CgMenuGridO /></p>
                    </div>   
                </div>
                 
                <p className='menu2' onClick={handleShowSideBar}><CgMenuGridO /></p>
            </div>
        </div>


        {showSideBar === false ? ('') : (

            <div className='sideBar'>
                <div className='closeDiv'>
                    <Image src={logo} alt='' />
                    <p onClick={handleHideSideBar}><IoMdClose /></p>
                </div>

                <div className='aboutDiv'  >
                    <h2 className='myh2'>About Us</h2>
                    <p className='myP' data-aos="fade-up" data-aos-duration="2000">
                        Explain to you how all this 
                        mistaken<br /> denouncing pleasure 
                        and praising pain was <br /> born and 
                        we will give you a complete <br />
                        account of the system, and 
                        expound the<br /> actual teachings.
                    </p>
                    <p className='myP' data-aos="fade-up" data-aos-duration="2000">
                        Mistaken denouncing pleasure and 
                        praising<br /> pain was born and we will 
                        give you<br /> complete account of the 
                        system expound.
                    </p>

                    <div data-aos="fade-up" data-aos-duration="2000">
                        <button>About Us</button>
                        <h3>Contact Info</h3>
                    </div>

                    <div className='contactDiv' data-aos="fade-up" data-aos-duration="3000">
                        <p>Chicago 12, Melborne City, USA</p>
                        <p className='contactP'>+8801682648101</p>
                        <p className='contactP'>info@example.com</p>
                    </div>

                    <div className='iconDiv'>
                        <p><FaFacebook /></p>
                        <p><FaInstagram /></p>
                        <p><FaLinkedinIn /></p>
                        <p><FaTwitter /></p>
                        <p><FaYoutube /></p>
                        
                    </div>
                </div>
            </div>
        ) }

        
    </div>

  )
}

export default Navbar