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
         <SwiperSlide>
            <img src={image1} alt="" className="min-w-full h-[600px]" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
               <div className="text-white md:ml-16 md:w-1/2 px-5 space-y-6">
                  <h2 className="md:text-6xl text-3xl font-semibold">Affordable Price For Car Servicing</h2>
                  <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                  <div>
                     <button className="btn bg-[#00b4d8] hover:bg-[#06a5c5] mr-5">Discover More</button>
                     <button className="btn glass">Latest Project</button>
                  </div>
               </div>
            </div>
         </SwiperSlide>

         <SwiperSlide><img src={image2} alt="" className="min-w-full h-[600px]" /></SwiperSlide>
         <SwiperSlide><img src={image3} alt="" className="min-w-full h-[600px]" /></SwiperSlide>
         <SwiperSlide><img src={image4} alt="" className="min-w-full h-[600px]" /></SwiperSlide>
         <SwiperSlide><img src={image5} alt="" className="min-w-full h-[600px]" /></SwiperSlide>
         <SwiperSlide><img src={image7} alt="" className="min-w-full h-[600px]" /></SwiperSlide>
      </Swiper>
   );
};

export default Banner;