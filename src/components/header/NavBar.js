import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import MenuDropdown from "./Dropdown";
import categorias from "../../categorias.json"

export const NavBar = ({ marca, links }) => {
  return (
    <header>
      <NavLink id="marca" to="/">
        {marca}
      </NavLink>


      <div id="linksNavBar">
       
        {links.map((link) => {
          return (
            <nav>
              <NavLink key={link.id} className="link" to={link.href}>
                {link.nombre}
              </NavLink>
            </nav>
          );
        })}
      </div>

      <MenuDropdown categorias={categorias}></MenuDropdown>

      <NavLink id="cartWidget" to={"/cart"}>
        <CartWidget />
      </NavLink>
    </header>
  );
};

export default NavBar;
