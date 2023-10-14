import React from 'react'
import {Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import userAvatar from '../../assets/images/user-avatar.png'
import userAvatar1 from '../../assets/images/user-avatar1.png'
import userAvatar2 from '../../assets/images/user-avatar2.png'
import userAvatar3 from '../../assets/images/user-avatar3.png'
import userAvatar4 from '../../assets/images/user-avatar4.png'
import { HiStar}  from'react-icons/hi';

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
        <Swiper 
        modules= {[Pagination]} 
        spaceBetween={30} 
        slidesPerView={1} 
        pagination={{clickable:true}}
        breakpoints={{
            640: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }}
        >
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={userAvatar1} alt=""/>
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                Hanan Ramzan
                            </h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                        "Thanks to Mentor Cruise, I found an amazing mentor who truly cares about my growth. 
                        The guidance I received has been invaluable, and I'm more confident in my career."
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={userAvatar} alt=''/>
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                Mohamed Asam 
                            </h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                        "Mentor Cruise has been a game-changer. My mentor's insights and 
                        support have propelled my career forward. Highly recommended!"
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={userAvatar2} alt=''/>
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                Tuan Faied
                            </h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                        "Mentor Cruise made mentorship easy. My mentor was a perfect match, 
                        and I'm now more skilled and confident in my field."
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={userAvatar3} alt=''/>
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                Rusham Riyas 
                            </h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                        "Mentor Cruise has been a game-changer. My mentor's insights and 
                        support have propelled my career forward. Highly recommended!"
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={userAvatar4} alt=''/>
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                Mohamed Aafrith
                            </h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                        "Mentor Cruise made mentorship easy. My mentor was a perfect match, 
                        and I'm now more skilled and confident in my field."
                    </p>
                </div>
            </SwiperSlide>
            
        </Swiper>
    </div>
  );
};

export default Testimonial;