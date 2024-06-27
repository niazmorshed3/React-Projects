import Cover from "../../Shared/Cover/Cover";
import coverImg from "../../../assets/assets/shop/order.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenuHook from "../../../Hooks/useMenuHook";
import OrderFoodTab from "../Order Food Tab/OrderFoodTab";
import { useParams } from "react-router-dom";

const OrderFood = () => {

  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenuHook();

  const dessert = menu.filter((i) => i.category === "dessert");
  const soup = menu.filter((i) => i.category === "soup");
  const salad = menu.filter((i) => i.category === "salad");
  const pizza = menu.filter((i) => i.category === "pizza");
  const drinks = menu.filter((i) => i.category === "drinks");

  return (
    <div>
      <Cover img={coverImg} tittle={"Order Food"}></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab> Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderFoodTab items={salad}></OrderFoodTab>
        </TabPanel>
        <TabPanel>
          <OrderFoodTab items={pizza}></OrderFoodTab>
        </TabPanel>
        <TabPanel>
          <OrderFoodTab items={soup}></OrderFoodTab>
        </TabPanel>
        <TabPanel>
          <OrderFoodTab items={dessert}></OrderFoodTab>
        </TabPanel>
        <TabPanel>
          <OrderFoodTab items={drinks}></OrderFoodTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderFood;
