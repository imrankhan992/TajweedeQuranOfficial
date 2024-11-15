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
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [loading]);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation happens only once
    });
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
            <img loading="lazy" src={ "/Images/Carousals/heropage.png"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img loading="lazy" src={ "/Images/Carousals/heropage1.png"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img loading="lazy"  src={ "/Images/Carousals/heropage2.jpg"} alt="" />
          </SwiperSlide>
        </Swiper>
     
      </div>
      {/* <img loading="lazy" src={"/Images/Carousals/sous-slider.png"}  alt="" /> */}
      
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











