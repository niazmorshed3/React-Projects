import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="space-y-6">
      <ht className="text-3xl">All Categories</ht>
      {categories.map((i) => (
        <NavLink to={`/category/${i.id}`} className="block ml-4 text-xl font-semibold" key={i.id}>
          {i.name}
        </NavLink>
      ))}
    </div>
  );
};

export default LeftSideNav;
