import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookMarks] = useState([]);
  const [readingtime, setReadingTime] = useState(0);
  const handleAddToBookMark = (i) => {
    const newBookMarks = [...bookmarks, i];
    setBookMarks(newBookMarks);
  };
  const handleMarkAsRead = (id,i) => {
    // setReadingTime (readingtime+i)
    const newReadingTime = readingtime + i;
    setReadingTime(newReadingTime);
    // Remove the read blog from Bookmark
    const remainingBookMarks = bookmarks.filter(bookmark=>bookmark.id !== id)
    setBookMarks(remainingBookMarks)
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs
          handleAddToBookMark={handleAddToBookMark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingtime={readingtime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
