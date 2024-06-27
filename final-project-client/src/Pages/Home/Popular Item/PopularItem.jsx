import SectionTitle from "../../../Components/Section Title/SectionTitle";
import useMenuHook from "../../../Hooks/useMenuHook";
import MenuItemCard from "../../Shared/Menu Item Card/MenuItemCard";

const PopularItem = () => {
  const [menu] = useMenuHook();
  const popular = menu.filter((i) => i.category === "popular");

  return (
    <section className="mb-12">
      <SectionTitle
        heading={"From Our Menue"}
        subHeading={"Popular Item"}
      ></SectionTitle>
      <div className="md:grid md:grid-cols-2 gap-10">
        {popular.map((i) => (
          <MenuItemCard key={i._id} item={i}></MenuItemCard>
        ))}
      </div>
      <button className="btn btn-outline border-0 border-b-4">
        View Full Menu
      </button>
    </section>
  );
};

export default PopularItem;
