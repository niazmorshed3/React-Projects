import { useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadData = useLoaderData();
  const [users, setUsers] = useState(loadData);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Deleted Successfully");
          const remaining = users.filter((i) => i._id !== id);
          setUsers(remaining);
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl">Total Data {users.length} </h2>
      {users.map((i) => (
        <p key={i._id}>
          {i.name} : {i.email} : {i._id} {" "}
          <NavLink to={`/update/${i._id}`}><button type="submit">Update</button></NavLink>
          <button onClick={() => handleDelete(i._id)}>X</button>{" "}
        </p>
      ))}
    </div>
  );
};

export default Users;
