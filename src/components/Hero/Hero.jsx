import React from 'react'
import Header from '../Header/Header'
import hero_iamge from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"

import './Hero.css'

const Hero = () => {
  return (
    <div className='Hero'>
        <div className='left-h'>
                <Header/>
                <div className='the-best-ad'>
                    <div></div>
                        <span>
                            Explore our story!!!
                        </span>
                </div>
                <div className='hero-text'>
                    <div>
                        <span className='stroke-text'>Discover </span>
                        <span>Possibilities</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you shaped and build your mental state.
                        </span> 
                    </div>
                </div>
                {/* Figures and stats*/}

                <div className='figures'>
                    <div>
                        <span>
                        +140
                        </span>
                        <span>
                        Experts
                        </span>
                    </div>
                    <div>
                        <span>
                        +1000
                        </span>
                        <span>
                        Trusted Members
                        </span>
                    </div>
                    <div>
                        <span>
                        +50
                        </span>
                        <span>
                        Programs Consoles
                        </span>
                    </div>
                </div>
                {/* buttons */}
                <div className='hero-buttons'>
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
               </div>
        </div>
        <div className='right-h'>
                <button className='btn'>Join Now</button>   
                <span></span><span></span>
        </div>
    </div>
  )
}

export default Hero