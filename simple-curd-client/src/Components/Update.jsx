import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedData = useLoaderData();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const mail = form.email.value;
    const user = { name, mail };
    console.log(user);
    fetch(`http://localhost:5000/users/${loadedData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("User Updated Successfully");
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl">Updated Information Of - {loadedData.name} </h2>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={loadedData?.name} id="" />

        <br />
        <input
          type="email"
          name="email"
          defaultValue={loadedData?.mail}
          id=""
        />
        <br />
        <input type="submit" value="Update User" />
      </form>
    </div>
  );
};

export default Update;
