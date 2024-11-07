import React from "react";
import Header from "./Header";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper/modules";
import OurVision from "./OurVision";
import LearnQuran from "./LearnQuran.jsx";
import ServiceOffer from "./ServiceOffer";
import StudentsReviews from "./StudentsReviews";
import Footer from "./Footer";
import HowToEnroll from "./HowToEnroll";
import FeedbackVideos from "./FeedBackVideos";
import { Trail } from "./Trail";

const Home = () => {
  return (
    <div className="relative w-full" id="home">
      <Header />

      <div>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          autoplay={true}
          modules={[Navigation, Pagination]}
        >
          <SwiperSlide>
            {" "}
            <img src="/Images/Carousals/carousal1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
        </Swiper>
      </div>
      <img src="/Images/Carousals/sous-slider.png" alt="" />
      <OurVision />
      <LearnQuran />
      <HowToEnroll />
      <ServiceOffer />
      <FeedbackVideos />
      <StudentsReviews />
      
      <Footer />
    </div>
  );
};

export default Home;
