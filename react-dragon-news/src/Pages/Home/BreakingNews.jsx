import Marquee from "react-fast-marquee";
const BreakingNews = () => {
  return (
    <div className="p-4">
      <button  className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  pt-2">
        Breaking News
        <Marquee pauseOnHover={true}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </button>
    </div>
  );
};

export default BreakingNews;
