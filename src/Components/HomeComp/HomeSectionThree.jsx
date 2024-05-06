"use client"
import React from 'react'
import './HomeSectionThree.css'
import Image from 'next/image'
import { dataFive } from '../module'
import bannerImage1 from '../Images/product-banner-img-6.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";
import bannerImage2 from '../Images/product-banner-img-7.png'
import blogImage1 from '../Images/blog-post-1.png'
import blogImage2 from '../Images/blog-post-2.png'
import blogImage3 from '../Images/blog-post-3.png'
import { FaTags } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";

const HomeSectionThree = () => {
  return (
    <div className='bannerThreeSection'>
        <h2>Featured Brand Products</h2>
        <h4>
            Collaboratively pursue proactive vortals 
            whereas granular best practices Collaboratively 
            promote<br /> functional markets through 
            process-centric users.
        </h4>


        <div className='bannerThreeDiv'>
            

              <div className='leftBanner'>

                {dataFive.slice(0, 3).map((data, index)=>(
                    <div className='eachLeftBanner' key={index}>
                        <div>
                            <Image src={data.image} alt='' className='myBannImage'/>
                        </div>

                        <div>
                        {data.rating === 5 && (

                            <div className='starDiv'>
                                <p><TiStarFullOutline /></p>
                                <p><TiStarFullOutline /></p>
                                <p><TiStarFullOutline /></p>
                                <p><TiStarFullOutline /></p>
                                <p><TiStarFullOutline /></p>
                            </div>
                        )}

                        {data.rating === 3 && (

                            <div className='starDiv'>
                                <p><TiStarFullOutline /></p>
                                <p><TiStarFullOutline /></p>
                                <p><TiStarFullOutline /></p>
                                <p><TiStarFullOutline /></p> 
                                <p><TiStarFullOutline /></p>
                  
                            </div>
                        )}

                        {data.rating === 4 && (

                            <div className='starDiv'>
                               <p><TiStarFullOutline /></p>
                               <p><TiStarFullOutline /></p>
                               <p><TiStarFullOutline /></p>
                               <p><TiStarFullOutline /></p>
                               <p><TiStarFullOutline /></p>
                            </div>
                        )}

                            <h3>{data.category}</h3>
                            <h4><span>{data.price}</span>{data.discountPrice}</h4>
                            <button>Shop Now <FaLongArrowAltRight /></button>
  
                        </div>
                    </div>
                ))}
            </div>


            <div className='middleBanner'>
                <Image src={bannerImage1} alt='' className='middleBannerImage'/>

               <div className='middleBannerDiv'>
                 <h4>UP TO<span className='spanMBD'>65% OFF</span></h4>
                 <h2>Furniture</h2>
                 <button>Shop Now< FaLongArrowAltRight /> </button>
              </div>
    
            </div>


            <div className='rightBanner'>
            {dataFive.slice(3, 6).map((data, index)=>(
                    <div className='eachLeftBanner' key={index}>
                        <div>
                            <Image src={data.image} alt='' className='myBannImage'/>
                        </div>

                        <div>
                        {data.rating === 5 && (

                            <div className='starDiv'>
                                <p><TiStarFullOutline /></p>
                                <p><TiStarFullOutline /></p>
                                <p><TiStarFullOutline /></p>
                                <p><TiStarFullOutline /></p>
                                <p><TiStarFullOutline /></p>
                            </div>
                        )}

                        {data.rating === 3 && (

                            <div className='starDiv'>
                                <p><TiStarFullOutline /></p>
                                <p><TiStarFullOutline /></p>
                                <p><TiStarFullOutline /></p>
                                <p><TiStarFullOutline /></p> 
                                <p><TiStarFullOutline /></p>

                            </div>
                        )}

                        {data.rating === 4 && (

                            <div className='starDiv'>
                               <p><TiStarFullOutline /></p>
                               <p><TiStarFullOutline /></p>
                               <p><TiStarFullOutline /></p>
                               <p><TiStarFullOutline /></p>
                               <p><TiStarFullOutline /></p>
                            </div>
                        )}                            
                            <h3>{data.category}</h3>
                            <h4><span>{data.price}</span>{data.discountPrice}</h4>
                            <button>Shop Now <FaLongArrowAltRight /></button>
                        </div>
                    </div>
                ))}
            </div>

        </div>

        <div className='bannerDivSix'>
          <Image src={ bannerImage2 } alt='' className='bannerImage2'/>

          <div className='bannerDivSixText'>
            <h2>Subscribe Our Newsletter to<br /> <span className='spanBDST'> Get Latest Update & News</span></h2>
            <div className='bannerDivSixSubText'>
              <input type="text" placeholder="Enter Email Address" />
              <button>Subscribe Now</button>
            </div>
          </div>
        </div>

        <div className='bannerDivSeven'>
          <h2>Browse Recent Post</h2>
          <h4>
            Interactively product distinctive paradigms whereas one-to-one intellectual capital.<br />
            resource sucking services.
          </h4>

        </div>

        <div className='bannerDivSeven2'>
            <div className='bannerDivSeveni'>
              <Image src={blogImage1} alt='' className='blogImage1'/>  
              <ul className='bannerDivSevenLi1'>
                <li>< FaTags /> Organic Vegetable</li>
                <li>< MdAccessTime /> May 24, 2022</li>
              </ul>
              <h3>Holiday Home Delivery We have<br /> Recently Ordered</h3>
              <p>Holisticly exploit equity invested growth<br /> strategies whereas enterpris</p> 
              <button>Explore More <FaLongArrowAltRight /> </button>
            </div>

            <div className='bannerDivSevenii'>
              <Image src={blogImage2} alt='' className='blogImage2'/>  
              <ul className='bannerDivSevenLi2'>
                <li>< FaTags /> Organic Vegetable</li>
                <li>< MdAccessTime /> May 24, 2022</li>
              </ul>
              <h3>Holiday Home Delivery We have<br /> Recently Ordered</h3>
              <p>Holisticly exploit equity invested growth<br /> strategies whereas enterpris</p> 
              <button>Explore More <FaLongArrowAltRight /> </button>
            </div>

            <div className='bannerDivSeveniii'>
              <Image src={blogImage3} alt='' className='blogImage3'/>  
              <ul className='bannerDivSevenLi3'>
                <li>< FaTags /> Organic Vegetable</li>
                <li>< MdAccessTime /> May 24, 2022</li>
              </ul>
              <h3>Holiday Home Delivery We have<br /> Recently Ordered</h3>
              <p>Holisticly exploit equity invested growth<br /> strategies whereas enterpris</p> 
              <button>Explore More <FaLongArrowAltRight /> </button>
            </div>
          </div>
        
    </div>
  )
}

export default HomeSectionThree