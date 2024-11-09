import React from "react";
import Header from "./Header";
import { Swiper, SwiperSlide } from "swiper/react";

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
  return (
    <div className="relative w-full" id="home">
      <WhatsAppButton/>
      <ChatIcon/>
      <Header />

      <div>
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
            <img src={import.meta.env.BASE_URL + "/Images/Carousals/heropage.png"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={import.meta.env.BASE_URL + "/Images/Carousals/heropage1.png"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={import.meta.env.BASE_URL + "/Images/Carousals/heropage2.jpg"} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <img src={import.meta.env.BASE_URL+"/Images/Carousals/sous-slider.png"} alt="" />
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
  );
};

export default Home;
