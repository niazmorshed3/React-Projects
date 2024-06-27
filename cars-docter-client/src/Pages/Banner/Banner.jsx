import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import banner1 from '../../assets/images/banner/1.jpg'
import banner2 from '../../assets/images/banner/2.jpg'
import banner3 from '../../assets/images/banner/3.jpg'
import banner4 from '../../assets/images/banner/4.jpg'
import banner5 from '../../assets/images/banner/5.jpg'




const Banner = () => {
  return (
    <div>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <section className="banner1">
            <img src={banner1} alt="" />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="banner2">
            <img src={banner2} alt="" />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="banner3">
            <img src={banner3} alt="" />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="banner4">
            <img src={banner4} alt="" />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="banner5">
            <img src={banner5} alt="" />
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
