import React from 'react';
import aboutImg from '../../assets/images/about.jpeg';
import aboutCardImg from '../../assets/images/about-card.png';
import {Link} from 'react-router-dom';

const About = () => {
  return <section>
    <div className="container">
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
            
            {/* =====about img===== */}
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 ">
                <img src={aboutImg} alt='' />
                <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%]  
                lg:right-[22%]">
                    <img src={aboutCardImg} alt='' />
                </div>
            </div>

            {/* ====== about content========= */}
            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
              <h2 className='heading'>Proud to be One of the Nation's Best</h2>

              <p className='text_para text-justify'>At Mentor Cruise, we're on a mission to connect aspiring 
              professionals with experienced mentors who can provide guidance, share knowledge, and inspire growth. 
              Our platform is a hub for mentorship across a variety of fields, offering an opportunity to learn, 
              network, and achieve your goals.</p>

              <p className='text_para mt-[30px] text-justify'>Join our thriving community and embark on a journey of personal and professional development. 
              We're here to help you navigate the path to success.</p>
              
              <Link to='/'>
              <button className="btn">Learn More</button>
              </Link>
            </div>
        </div>
    </div>
  </section>
}

export default About