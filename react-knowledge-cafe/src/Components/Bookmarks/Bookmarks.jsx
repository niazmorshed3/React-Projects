import PropTypes from "prop-types";
import Bookmark from "../BookMark/Bookmark";


const Bookmarks = ({ bookmarks,readingtime }) => {
  return (
    <div className="md: w-1/3 bg-gray-300 ml-4 mt-2 p-4 rounded-lg">
        <div>
            <h3 className="text-4xl">Reading Time : {readingtime} </h3>
        </div>
      <h2 className="text-3xl text-center">BookMarked Blogs : {bookmarks.length} </h2>
      {
        bookmarks.map ((i,idx) => <Bookmark bookmark = {i} key={idx}></Bookmark>)
      }
    </div>
  );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.array,
    readingtime : PropTypes.number
};
export default Bookmarks;
