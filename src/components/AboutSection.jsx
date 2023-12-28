import React from 'react'
import about1 from '../images/about1.png'
import './AboutSection.css'

export default function AboutSection() {
  return (
    <div className='container-fluid about-main'>
        <div className='container'>
            <div className="row align-items-center">
                <div className="hero-img col-lg-6 col-md-5 col-sm-12">
                    <img src={about1} alt="" />
                </div>
                <div className="hero-content col-lg-6 col-md-5 col-sm-12">
                    <h2 className='hero-text-main'>
                        Learn New Skills To Go Ahead For Your <span className='changeable-text'>Career</span>
                    </h2>
                    <p className='my-4 hero-para'>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply.</p>

                    <div className="feature-box d-flex gap-3 flex-column flex-md-row flex-lg-row">
                        <div className="feature-icon">
                            <i className="fa-solid fa-medal"></i>
                        </div>
                        <div className="feature-content">
                            <h3 className="feat-head">Our Vision</h3>
                            <p className="feat-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maxime officiis quisquam libero suscipit nihil omnis minima ducimus laboriosam sequi!</p>
                        </div>
                    </div>
                    <div className="feature-box d-flex gap-3 flex-column flex-md-row flex-lg-row">
                        <div className="feature-icon">
                            <i className="fa-solid fa-feather"></i>
                        </div>
                        <div className="feature-content">
                            <h3 className="feat-head">Our Mission</h3>
                            <p className="feat-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maxime officiis quisquam libero suscipit nihil omnis minima ducimus laboriosam sequi!</p>
                        </div>
                    </div>


                </div>

                


            </div>
            
        </div>
    </div>
  )
}
