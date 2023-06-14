import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import image1 from "../../../assets/image1.jpg"
import image2 from "../../../assets/image2.jpg"
import image3 from "../../../assets/image3.jpg"
import image4 from "../../../assets/image4.jpg"
import image5 from "../../../assets/image5.jpg"
import image7 from "../../../assets/image7.jpg"

const Banner = () => {
   return (
      <Swiper
         spaceBetween={30}
         centeredSlides={true}
         autoplay={{
            delay: 2500,
            disableOnInteraction: false,
         }}
         pagination={{
            clickable: true,
         }}
         navigation={true}
         modules={[Autoplay, Pagination, Navigation]}
         className="mySwiper"
      >
         <SwiperSlide><img src={image1} alt="" className="min-w-full h-[600px]" /></SwiperSlide>
         <SwiperSlide><img src={image2} alt="" className="min-w-full h-[600px]" /></SwiperSlide>
         <SwiperSlide><img src={image3} alt="" className="min-w-full h-[600px]" /></SwiperSlide>
         <SwiperSlide><img src={image4} alt="" className="min-w-full h-[600px]" /></SwiperSlide>
         <SwiperSlide><img src={image5} alt="" className="min-w-full h-[600px]" /></SwiperSlide>
         <SwiperSlide><img src={image7} alt="" className="min-w-full h-[600px]" /></SwiperSlide>
      </Swiper>
   );
};

export default Banner;