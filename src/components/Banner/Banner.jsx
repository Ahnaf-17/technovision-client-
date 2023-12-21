/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import img1 from '../../assets/banner.jpg'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute flex rounded-xl items-center left-0   top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full ">
                    <div className='text-white space-y-7 w-1/2 pl-12' 
                    data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    // data-aos-offset="500"
                    data-aos-duration="1000"
                    >
                        <h2 className='text-4xl font-bold'>Revolutionize Your Productivity With Us</h2>
                        <p>Effortless Task Management Made Simple</p>
                        <div className=''>
                            <Link to='/dashboard'>
                            <button className="btn btn-outline bg-cyan-800 text-white border-none mr-5">Let's Explore</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default Banner;