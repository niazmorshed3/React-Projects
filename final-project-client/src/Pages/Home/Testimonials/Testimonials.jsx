import SectionTitle from "../../../Components/Section Title/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);

  return (
    <div className="my-20">
      <SectionTitle
        subHeading={"What our Client Says"}
        heading={"Testimonials"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {review.map((i) => (
          <SwiperSlide key={i._id}>
            <div className="my-16 mx-24 flex flex-col items-center">
              <Rating style={{ maxWidth: 180 }} value={i.rating} readOnly />
              <p className="py-8">{i.details}</p>
              <h3 className="text-2xl text-orange-500 ">{i.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
