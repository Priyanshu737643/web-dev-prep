import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul className="ulDesign">
        <NavLink className={"itemDesign"} to={"/"}>
          Home
        </NavLink>
        <NavLink className={"itemDesign"} to={"/contact"}>
          Contact
        </NavLink>
        <NavLink className={"itemDesign"} to={"/about"}>
          About
        </NavLink>
        <NavLink className={"itemDesign"} to={"/products"}>
          Products
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
