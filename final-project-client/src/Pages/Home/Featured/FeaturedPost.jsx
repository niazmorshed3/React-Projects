import SectionTitle from "../../../Components/Section Title/SectionTitle";
import image from "../../../assets/assets/home/featured.jpg";
import './featuredPost.css'

const FeaturedPost = () => {
  return (
    <div className="fetured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        heading={"Featured Item"}
        subHeading={"Chek it Out"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36">
        <div>
          <img src={image} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug,20,2024</p>
          <p className="uppercase">Where can i find it</p>
          <p>
            Indulge in culinary delights with our featured posts, where each dish
            tells a unique story. Discover mouth-watering recipes, expert
            cooking tips, and the latest food trends. Whether you are a seasoned
            chef or a home cook, there id s something delicious for everyone. Dive
            in and satisfy your foodie cravings today!
          </p>
          <button className="btn btn-outline border-0 border-b-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
