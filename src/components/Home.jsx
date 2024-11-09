import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Swiper, SwiperSlide } from "swiper/react";
import {HashLoader} from "react-spinners"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import OurVision from "./OurVision";
import LearnQuran from "./LearnQuran.jsx";
import ServiceOffer from "./ServiceOffer";
import StudentsReviews from "./StudentsReviews";
import Footer from "./Footer";
import HowToEnroll from "./HowToEnroll";
import FeedbackVideos from "./FeedBackVideos";
import { Trail } from "./Trail";
import WhatsAppButton from "./WhatsAppButton";
import ChatIcon from "./ChatIcon";
import ReasonPeopleChoseUs from "./ReasonPeopleChoseUs";
import ContactUs from "./ContactUs";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for when the page has fully loaded
    window.addEventListener('load', () => {
      setLoading(false);
    });
    return () => window.removeEventListener('load', () => setLoading(false));
  }, []);
  return (
   <>
   {
    loading ?(<div className="max-h-screen min-h-screen w-full flex items-center justify-center flex-col"><HashLoader color="#014B5E"/> Loading...</div>):(<>
    
    <div className="relative w-full" id="home">
      <WhatsAppButton/>
      <ChatIcon/>
      <Header />

     
       <div className="w-full h-full relative mb-16">
       <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          autoplay={
            {delay: 5000,
            disableOnInteraction: false,}
          }
          modules={[Navigation, Pagination,Autoplay]}
        >
          <SwiperSlide>
            {" "}
            <img loading="lazy" src={import.meta.env.BASE_URL + "/Images/Carousals/heropage.png"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img loading="lazy" src={import.meta.env.BASE_URL + "/Images/Carousals/heropage1.png"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img loading="lazy"  src={import.meta.env.BASE_URL + "/Images/Carousals/heropage2.jpg"} alt="" />
          </SwiperSlide>
        </Swiper>
     
      </div>
      {/* <img loading="lazy" src={import.meta.env.BASE_URL+"/Images/Carousals/sous-slider.png"}  alt="" /> */}
      
      <OurVision />
      <LearnQuran />
      <HowToEnroll />
      <ServiceOffer />
      <ReasonPeopleChoseUs/>
      <FeedbackVideos />
      <StudentsReviews />
      <ContactUs/>
      <Footer />
    </div>
    </>)
   }
   </>
  );
};

export default Home;
