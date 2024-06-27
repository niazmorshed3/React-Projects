import { NavLink } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItemCard from "../../Shared/Menu Item Card/MenuItemCard";

const MenuCategory = ({ items, coverImg, tittle }) => {
  return (
    <div className="pt-8">
      {tittle && <Cover img={coverImg} tittle={tittle}></Cover>}
      <div className="md:grid md:grid-cols-2 gap-10 mt-16">
        {items.map((i) => (
          <MenuItemCard key={i._id} item={i}></MenuItemCard>
        ))}
      </div>
      <NavLink to={`/orderfood/${tittle}`}>
        <button className="btn btn-outline border-0 border-b-4">
          Order Now
        </button>
      </NavLink>
    </div>
  );
};

export default MenuCategory;
