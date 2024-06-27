import Cover from "../Shared/Cover/Cover";
import menuImg from "../../../src/assets/assets/menu/banner3.jpg";
import useMenuHook from "../../Hooks/useMenuHook";
import SectionTitle from "../../Components/Section Title/SectionTitle";
import MenuCategory from "./Menu Category/MenuCategory";
import dessertImg from "../../../src/assets/assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../src/assets/assets/menu/pizza-bg.jpg";
import SaladImg from "../../../src/assets/assets/menu/salad-bg.jpg";
import SoupImg from "../../../src/assets/assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenuHook();
  const dessert = menu.filter((i) => i.category === "dessert");
  const soup = menu.filter((i) => i.category === "soup");
  const salad = menu.filter((i) => i.category === "salad");
  const pizza = menu.filter((i) => i.category === "pizza");
  const offered = menu.filter((i) => i.category === "offered");

  return (
    <div>
      <Cover img={menuImg} tittle={"Our Menu"}></Cover>
      {/* Main Cover */}
      <SectionTitle
        subHeading={"Don't Miss"}
        heading={"Today's Offer"}
      ></SectionTitle>
      {/* Offered Menu Items */}
      <MenuCategory items={offered}></MenuCategory>


      {/* Dessert Item */}
      <MenuCategory items={dessert} tittle={"dessert"} coverImg={dessertImg}></MenuCategory>


      {/* Pizza Item */}
      <MenuCategory items={pizza} tittle={"pizza"} coverImg={pizzaImg}></MenuCategory>


      {/* Salad Item */}
      <MenuCategory items={salad} tittle={"salad"} coverImg={SaladImg}></MenuCategory>


      {/* Soup Item */}
      <MenuCategory items={soup} tittle={"soup"} coverImg={SoupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
