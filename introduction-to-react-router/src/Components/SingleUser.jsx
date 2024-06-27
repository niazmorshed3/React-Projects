// import { ReactPropTypes } from "react";
import { Link } from "react-router-dom";

const SingleUser = ({ rawdata }) => {
  const { name, id, email, phone } = rawdata;
  const vitorerStyle = {
    border: "2px solid purple",
    padding: "10px",
    borderRadius: "20px",
  };
  return (
    <div style={vitorerStyle}>
      <h3>Name: {name} </h3>
      <p>ID : {id} </p>
      <p>Email : {email} </p>
      <p>Phone Number : {phone} </p>
      <Link to={`/user/${id}`}>Show Detail</Link>
      <Link to={`/user/${id}`}><button>Click Me</button></Link>
    </div>
  );
};

export default SingleUser;
