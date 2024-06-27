import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Roots = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("register")

  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}

      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>

      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Roots;
