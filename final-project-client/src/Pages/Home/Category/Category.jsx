import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/assets/home/slide1.jpg";
import slide2 from "../../../assets/assets/home/slide2.jpg";
import slide3 from "../../../assets/assets/home/slide3.jpg";
import slide4 from "../../../assets/assets/home/slide4.jpg";
import slide5 from "../../../assets/assets/home/slide5.jpg";
import SectionTitle from "../../../Components/Section Title/SectionTitle";

const Category = () => {
  return (
    <>
      <section>
        <SectionTitle 
        subHeading={'From 10 Am to 10 Pm'}
        heading={'Order Online'}
         ></SectionTitle>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-24"
        >
          <SwiperSlide>
            <div className="flex justify-center">
              <img src={slide1} alt="" />
            </div>
            <h2 className="  text-4xl uppercase  -mt-16 text-center text-white">
              Salad
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <img src={slide2} alt="" />
            </div>
            <h2 className="text-4xl text-center uppercase -mt-16 text-white">
              Pizza
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <img src={slide3} alt="" />
            </div>
            <h2 className="text-4xl text-center uppercase -mt-16 text-white">
              Soup
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <img src={slide4} alt="" />
            </div>
            <h2 className="text-4xl text-center uppercase -mt-16 text-white">
              Dessert
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <img src={slide5} alt="" />
            </div>
            <h2 className="text-4xl text-center uppercase -mt-16 text-white">
              Mixed Salad
            </h2>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Category;
