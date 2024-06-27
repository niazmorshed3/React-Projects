import { useLoaderData } from "react-router-dom";

const SinglePhone = () => {
  const singlePhone = useLoaderData();
  console.log(singlePhone);

  return (
    <div>
      <h2>{singlePhone.name}</h2>
      <img src={singlePhone.image} alt="" />
    </div>
  );
};

export default SinglePhone;
