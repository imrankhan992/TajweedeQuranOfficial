import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import learnQuran from './LearnQuran';
const LearnQuran = () => {
  return (
    <div className='px-16 text-center'>
         <div className='mb-6'><h1 className="text-4xl font-bold text-[#014B5E] py-2">Start Learning Quran</h1>
              <span  className="mb-7 font-bold text-xl  text-black">
              Contact now for a free trial lesson for you or your kid.
              </span></div>
      <Swiper
        slidesPerView={1}
        spaceBetween={3}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 8,
          },
        }}
        modules={[Pagination,Autoplay]}
        
        
      >
      
        {
            learnQuran.map((item) => {
                return (
                    <SwiperSlide key={item.id}>
                        <div className=" p-4  shadow-lg min-h-[430px]  !rounded-3xl border-2 border-[#032E3C] cursor-pointer hover:bg-[#C28336] active:scale-95 duration-150 active:transition-transform  hover:duration-1000 hover:transition-colors">
                            <img src={import.meta.env.BASE_URL+"/"+item?.image} width={60} height={60} alt="" />
                            <h1 className=" font-semibold text-xl">{item.title}</h1>
                            <p className="text-sm underline text-center text-[#032E3C]">{item.subtitle}</p>
                            <p className="text-sm  text-center">{item.description}</p>
                        </div>
                    </SwiperSlide>
                )
            })
        }
      </Swiper>
    </div>
  )
}

export default LearnQuran
