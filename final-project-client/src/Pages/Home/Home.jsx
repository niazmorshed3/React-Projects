import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import FeaturedPost from "./Featured/FeaturedPost";
import PopularItem from "./Popular Item/PopularItem";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Category></Category>
      <PopularItem></PopularItem>
      <FeaturedPost></FeaturedPost>
      <Testimonials></Testimonials>
    </>
  );
};

export default Home;
