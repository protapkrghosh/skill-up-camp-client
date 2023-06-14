import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import image1 from "../../../assets/image1.webp"
import image2 from "../../../assets/image2.webp"
import image3 from "../../../assets/image3.jpg"
import image4 from "../../../assets/image4.webp"
import image5 from "../../../assets/image5.jpeg"
import image6 from "../../../assets/image6.webp"

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
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#474747] to-[rgba(21, 21, 21, 0)]">
               <div className="text-white md:ml-16 md:w-1/2 px-5 space-y-6">
                  <h2 className="md:text-4xl text-3xl font-semibold">To have another language is to possess a second soul.</h2>
                  <div>
                     <button className="btn bg-[#00b4d8] hover:bg-[#06a5c5] border-none mr-5">Sign Up Now</button>
                     <button className="btn glass">Learn More</button>
                  </div>
               </div>
            </div>
         </SwiperSlide>

         <SwiperSlide>
            <img src={image2} alt="" className="min-w-full h-[600px]" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#474747] to-[rgba(21, 21, 21, 0)]">
               <div className="text-white md:ml-16 md:w-1/2 px-5 space-y-6">
                  <h2 className="md:text-4xl text-3xl font-semibold">Every student matters, every moment counts.</h2>
                  <div>
                     <button className="btn bg-[#00b4d8] hover:bg-[#06a5c5] border-none mr-5">Sign Up Now</button>
                     <button className="btn glass">Learn More</button>
                  </div>
               </div>
            </div>
         </SwiperSlide>

         <SwiperSlide>
            <img src={image3} alt="" className="min-w-full h-[600px]" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#474747] to-[rgba(21, 21, 21, 0)]">
               <div className="text-white md:ml-16 md:w-1/2 px-5 space-y-6">
                  <h2 className="md:text-4xl text-3xl font-semibold">Teaching Turning Todays Learners Into Tomorrows Leaders</h2>
                  <div>
                     <button className="btn bg-[#00b4d8] hover:bg-[#06a5c5] border-none mr-5">Sign Up Now</button>
                     <button className="btn glass">Learn More</button>
                  </div>
               </div>
            </div>
         </SwiperSlide>

         <SwiperSlide>
            <img src={image4} alt="" className="min-w-full h-[600px]" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#474747] to-[rgba(21, 21, 21, 0)]">
               <div className="text-white md:ml-16 md:w-1/2 px-5 space-y-6">
                  <h2 className="md:text-4xl text-3xl font-semibold">Putting Children First. Preparing Children For Success In Life</h2>
                  <div>
                     <button className="btn bg-[#00b4d8] hover:bg-[#06a5c5] border-none mr-5">Sign Up Now</button>
                     <button className="btn glass">Learn More</button>
                  </div>
               </div>
            </div>
         </SwiperSlide>

         <SwiperSlide>
            <img src={image5} alt="" className="min-w-full h-[600px]" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#474747] to-[rgba(21, 21, 21, 0)]">
               <div className="text-white md:ml-16 md:w-1/2 px-5 space-y-6">
                  <h2 className="md:text-4xl text-3xl font-semibold">Foreign language learning can be defined as learning of a nonnative language</h2>
                  <div>
                     <button className="btn bg-[#00b4d8] hover:bg-[#06a5c5] border-none mr-5">Sign Up Now</button>
                     <button className="btn glass">Learn More</button>
                  </div>
               </div>
            </div>
         </SwiperSlide>
         
         <SwiperSlide>
            <img src={image6} alt="" className="min-w-full h-[600px]" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#474747] to-[rgba(21, 21, 21, 0)]">
               <div className="text-white md:ml-16 md:w-1/2 px-5 space-y-6">
                  <h2 className="md:text-4xl text-3xl font-semibold">language outside of the environment where it is commonly spoken.</h2>
                  <div>
                     <button className="btn bg-[#00b4d8] hover:bg-[#06a5c5] border-none mr-5">Sign Up Now</button>
                     <button className="btn glass">Learn More</button>
                  </div>
               </div>
            </div>
         </SwiperSlide>
      </Swiper>
   );
};

export default Banner;