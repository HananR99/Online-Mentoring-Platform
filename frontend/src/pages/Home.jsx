import React from 'react';
import heroImg01 from '../assets/images/01.jpg';
import Img2 from '../assets/images/01.png';
import icon01 from '../assets/images/icon01.png';
import icon03 from '../assets/images/icon03.png';
import {Link} from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs';
import About from '../components/About/About';


const Home = () => {
  return(
   <>
  
  {/* =====hero section ======== */}
  
  <section className="hero_section pt-[60px] 2xl:h-[800px]">
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

        {/* =====hero content======= */}
        <div>
          <div className="lg:w-[570px]">
            <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px]
            md:leading-[70px]'>
              Mentor Cruise is the #1 destination for Career Advice and Guidance.
            </h1>
            <p className='text_para'>
            A community of peers, mentors and coaches that will help you land a dream career. 
            You never pay a dime. The only cost is to help people behind you.
            </p>
            <button className='btn'>Check Your Slots</button>
          </div>

            {/* ========hero counter========= */}
            <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5
            lg:gap-[30px]'>
              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                text-headingColor'>
                  30+
                </h2>
                <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                <p className='text_para'>Years of Experience</p>
              </div>

              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                text-headingColor'>
                  100+
                </h2>
                <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                <p className='text_para'>Experienced Mentors</p>
              </div>

              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                text-headingColor'>
                  100%
                </h2>
                <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                <p className='text_para'>Mentee Satisfaction</p>
              </div>

            </div>
        </div>
        {/* =====hero content======= */}


        <div className="flex gap-[30px] justify-end">
            <div>
              <img className='w-full' src={heroImg01} alt=" "/>
            </div>
            <div className='mt-[30px]'>
              <img src={Img2} alt='' className='w-full mb-[30px]' />
            </div>
        </div>

      </div>
    </div>
  </section>
  {/* =====hero section end ======== */}

    <section>
      <div className="container">
        <div className='lg:w-[470px] mx-auto'>
          <h2 className='heading text-center'>
            Get Ready for the Future, Today
          </h2>
          <p className='text_para text-center'>
            Mentor Cruise gives and guide you through information, tools and support to 
            figure out the skills you need today that will get you the path you wish in the future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[5] lg:gap-[30px] mt-[30px] lg:mt-
        [55px]">

          <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center '>
              <img src={icon01} alt=''/>
            </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Find a Mentor
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Unlock Your Potential with Guidance. 
                  Connect with experienced professionals and open doors to new opportunities.
                </p>
                <Link to='/mentors' className='w-[44px] h-[44px] rounded-full border border-solid border-
                [#181A1E} mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor 
                hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5 '/>
                </Link>
              </div>

          </div>

          <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center '>
              <img src={icon03} alt=''/>
            </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Schedule an Appointment
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Unlock Your Potential with Guidance. 
                  Connect with experienced professionals and open doors to new opportunities.
                </p>
                <Link to='/mentors' className='w-[44px] h-[44px] rounded-full border border-solid border-
                [#181A1E} mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor 
                hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5 '/>
                </Link>
              </div>

          </div>

        </div>

      </div>
    </section>

    <About/>
  </>
  ); 
};

export default Home;