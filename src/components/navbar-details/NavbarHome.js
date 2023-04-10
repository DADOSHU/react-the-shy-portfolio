import {NavLink} from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import "./style.css";

const NavbarHome = () => {
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">

                    <NavLink to="/" className="logo">
                        <strong>The Shy</strong> portfolio
                    </NavLink>
                    
                    <BtnDarkMode />

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/" className="nav-list__link nav-list__link--active">
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/" className="nav-list__link nav-list__link--active">
                                Skills
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/" className="nav-list__link nav-list__link--active">
                                Contacts
                            </NavLink>
                        </li>    
                    </ul> 
                    
                </div>
            </div>
        </nav>
    );
}
 
export default NavbarHome;