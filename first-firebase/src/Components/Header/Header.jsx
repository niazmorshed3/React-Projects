import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/login" >LogIn</NavLink>
        </div>
    );
};

export default Header;