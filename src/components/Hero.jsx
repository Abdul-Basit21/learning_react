import React from 'react'
import heroImg from "../images/promo.png";
import './Hero.css';

export default function Hero() {
  return (
    <>
        <div className='container-fluid hero-main'>
            <div className='container d-flex align-items-center justify-content-between'>
                <div className="hero-content">
                    <h2 className='hero-text-main'>
                        The Smarter<br /> Way to Learn<br /> <span className='changeable-text'>Anything</span>
                    </h2>
                    <p className='my-4 hero-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, iusto labore laudantium aliquam doloribus minima quos aut eveniet facere est soluta, natus praesentium numquam reiciendis. Architecto incidunt rem laborum ea?</p>
                </div>
                <div className="hero-img">
                    <img src={heroImg} alt="" />
                </div>
            </div>
        </div>
    </>    

  )
}
