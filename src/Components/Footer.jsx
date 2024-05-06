'use client'

import React from 'react'
import './Footer.css'
import { useState } from 'react';
import { LiaCopyrightSolid } from "react-icons/lia";
import Image from 'next/image';
import logo from './Images/logo.png'
import payment1 from './Images/payment-img-1.png'
import payment2 from './Images/payment-img-2.png'
import payment3 from './Images/payment-img-3.png'
import payment4 from './Images/payment-img-4.png'




const Footer = () => {
  return (
       <div>
          <div className='myFooter'>
            <div className='topFooter'>
              <div className='topFooterSub'>
               <h3>Category</h3>
               <ul>
                <li>About Us </li>
                <li>Delivery Info</li>
                <li>Privacy policy</li>
                <li>Brands</li>
                <li>Contact Us</li>
                <li>Returns</li>
                <li>Site Map</li>
               </ul>
             </div>

             <div className='topFooterSub'>
               <h3>Quick Links</h3>
               <ul>
                <li>Store Location</li>
                <li>Order History</li>
                <li>Wish List</li>
                <li>NewsLetter</li>
                <li>Specials</li>
                <li>Gift Certificate</li>
                <li>Affilate</li>
               </ul>
             </div>

             <div className='topFooterSub'>
               <h3>Contact Us</h3>
               <ul>
                <li>About Us </li>
                <li>Delivery Info</li>
                <li>Privacy policy</li>
                <li>Brands</li>
                <li>Contact Us</li>
                <li>Returns</li>
                <li>Site Map</li>
               </ul>
             </div>

             <div className='topFooterSub'>
               <h3>Support</h3>
               <ul>
                <li>Store Location</li>
                <li>Order History</li>
                <li>Wish List</li>
                <li>NewsLetter</li>
                <li>Specials</li>
                <li>Gift Certificate</li>
                <li>Affilate</li>
               </ul>
              </div>
            </div>

            <div className='bottomFooter'>
              <div className='bottomFooterSub'>
                 <p><LiaCopyrightSolid />All rights reserved Made by <span className='specialP'>ThemeTags</span></p>
                 <Image src={logo} alt='' width={130} />
                 <div className='paymentImg'>
                   <Image src={payment1} alt='' width={70} />
                   <Image src={payment2} alt='' width={70} />
                   <Image src={payment3} alt='' width={70} />
                   <Image src={payment4} alt='' width={70} />
                 </div>
              </div>
            </div>
             
             
          </div>
       </div>
  )
}

export default Footer
