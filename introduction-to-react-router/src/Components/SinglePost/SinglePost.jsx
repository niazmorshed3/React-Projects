import { Link, Navigate, useNavigate } from "react-router-dom";
import "./SinglePost.css";

const SinglePost = ({ posterData }) => {
  const { id, title } = posterData;
  
  const navigate = useNavigate();
  const handleShowDetail = () => {
    navigate(`/post/${id}`);
  };
  const singlePosterVitorerStyle = {
    border: "2px solid purple",
    padding: "10px",
    borderRadius: "20px",
  };
  return (
    <div className="button" style={singlePosterVitorerStyle}>
      <h3>Post er Id : {id} </h3>
      <h4> {title} </h4>
      <Link to={`/post/${id}`}>
        <button>Click To See Details</button>
      </Link>
      <button onClick={handleShowDetail}>Click With Handler</button>
    </div>
  );
};

export default SinglePost;
