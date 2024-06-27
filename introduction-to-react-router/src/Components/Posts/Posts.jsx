import { useLoaderData } from "react-router-dom";
import SinglePost from "../SinglePost/SinglePost";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h2>Posts : {posts.length} </h2>
      <div className="displayofuser">
        {posts.map((i) => (
          <SinglePost key={i.id} posterData={i}></SinglePost>
        ))}
      </div>
    </div>
  );
};

export default Posts;
