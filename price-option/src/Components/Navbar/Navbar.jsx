import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const route = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];
  return (
    <nav className="text-black bg-yellow-400 p-4">
      <div onClick={() => setOpen(!open)} className="md:hidden">
        {open === true ? (
          <HiMenuAlt1 className="text-2xl " />
        ) : (
          <IoMdClose className="text-2xl" />
        )}
      </div>
      <ul className={`md:flex duration-1000 absolute md:static  
      ${open? "top-16" : "-top-60"} bg-purple-600 px-6`}>
        {route.map((i) => (
          <Link route={i} key={i.id}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
