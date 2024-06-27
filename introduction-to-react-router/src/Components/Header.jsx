import { Outlet, useLoaderData, useLocation, useNavigation } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer/Footer";

const Header = () => {
  const nevigation = useNavigation();
  const location = useLocation();
  console.log(location)
  return (
    <div>
      <Nav></Nav>
      <h3>Hello Guys i am in Home Components</h3>
      {nevigation === "loading" ? <p>Loading....</p> : <Outlet></Outlet>}
      <Footer></Footer>
    </div>
  );
};

export default Header;
