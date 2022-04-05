import { Link } from "react-router-dom";

const Header = () => {
    return(
       <ul className="menu">
           <li className="menu-item">
               <Link to="/">Home</Link>
           </li>
           <li className="menu-item">
                <Link to="/about">About</Link>
           </li>
           <li className="menu-item">
                <Link to="/contact">Contact Us</Link>
           </li>
       </ul>
    )
}

export default Header;