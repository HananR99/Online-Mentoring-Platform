import React from 'react';
import heroImg01 from '../assets/images/01.jpg';
import Img2 from '../assets/images/01.png';
import icon01 from '../assets/images/icon01.png';
import icon03 from '../assets/images/icon03.png';
import featureImg from '../assets/images/feature-img.jpg';
import videoIcon from '../assets/images/video-Icon.png';
import avatarIcon from '../assets/images/avatar-icon.png';
import faqImage from '../assets/images/faq-img.png';
import {Link} from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs';
import About from '../components/About/About';
import ServiceList from '../components/Services/ServiceList';
import MentorList from '../components/Mentors/MentorList';
import FaqList from '../components/Faq/FaqList';
import Testimonial from '../components/Testimonial/Testimonial';

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
            <Link to='/mentors'>
            <button className='btn'>Find Mentors</button>
            </Link>
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

    {/* -----Services Section------------ */}
      <section>
        <div className="container">
          <div className="xl:w-[870px] mx-auto">
            <h2 className='heading text-center'>Our Mentoring Services</h2>
            <p className='text_para text-center'>
            We provides personalized mentorship services to empower your growth. 
            Our experienced mentors offer one-on-one guidance to help you excel in your field.
            We offer tailored mentorship services designed to help you excel in your chosen field. 
            Connect with skilled mentors who provide one-on-one guidance, share valuable insights, 
            and empower your personal and professional growth. Find the mentorship you need to reach 
            your full potential.
            <p>

            </p>
            
            <Link to='/services'>
                  <button className='btn'> Learn More </button>
            </Link>
            </p>
          </div>
        
          {/* <ServiceList /> */}
        </div>
      </section>
    {/* -----Services Section end--------- */}

    {/* ---------Feature Section------------- */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">

            {/* =======feature content========*/}
              <div className='xl:w-[670px]'>
                <h2 className='heading'>
                  Get Online Mentoring <br /> anytime. 
                </h2>
                <ul className="pl-4">
                  <li className="text_para">
                    1. Schedule the Appointment Directly.
                  </li>
                  <li className="text_para">
                    2. Search for your mentor here, and contact there office.
                  </li>
                  <li className="text_para">
                    3. View our mentors who are accepting new mentees, use the online scheduling 
                       tool to select an appointment.
                  </li>
                </ul>
                <Link to='/'>
                  <button className="btn"> Learn More </button>
                </Link>
              </div>

              {/* =====feature img========== */}
              <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg"mt-0'>
                <img src={featureImg} className='w-3/4' alt='' />

                <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-
                [100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[6px] lg:gap-3">
                      <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor 
                      font-[600]'>
                        Sat, 21
                      </p>
                      <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor 
                      font-[400]'>
                        09:00 AM
                      </p>
                    </div>
                    <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center
                    bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                      <img src={videoIcon} alt=''/>
                    </span>
                  </div>

                  <div className="w-[65x] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px]
                  text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4
                  rounded-full">
                    Consultation
                  </div>

                  <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                    <img src={avatarIcon} alt=''/>
                    <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] 
                    text-headingColor'>
                      Iyana Admasu
                    </h4>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    {/* ---------Feature Section end------------- */}

    {/* =========our great mentors=============== */}
    <section>
      <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className='heading text-center'>Our great mentors</h2>
            <p className='text_para text-center'>
            Meet our exceptional mentors, accomplished professionals eager to guide and inspire your journey
            </p>
          </div>
            
          <MentorList/>
      </div>
    </section>
    {/* =========our great mentors end=============== */}

    {/* =========FAQ section=============== */}
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-0">
          <div className='w-1/2 hidden md:block'>
            <img src={faqImage} alt=''/>
            </div>

            <div className="w-full md:w-1/2">
              <h2 className='heading'>
                Most questions by our beloved mentees
              </h2>
              <FaqList/>
            </div>
        </div>
      </div>
    </section>
    {/* =========FAQ section end=============== */}

    {/* ----------testimonial---------- */}
      <section>
        <div className="container">
        <div className="xl:w-[470px] mx-auto">
            <h2 className='heading text-center'>What our Mentees say</h2>
            <p className='text_para text-center'>
            Discover the impact of mentorship through the words of our mentees. 
            Read their inspiring stories of growth, skill development, and career success.
            </p>
          </div>
          <div>
            <Testimonial/>
          </div>
        </div>
      </section>
    {/* ----------testimonial end---------- */}
  </>
  ); 
};

export default Home;