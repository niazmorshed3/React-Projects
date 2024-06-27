import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const SinglePostErDetails = () => {
  const singleposterdata = useLoaderData();
  const {postId} = useParams();
  console.log(postId)
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const { id, title, body } = singleposterdata;
  return (
    <div>
      <h2>The Details Of Id No : {id} </h2>
      <p> {title} </p>
      <p>{body}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default SinglePostErDetails;
