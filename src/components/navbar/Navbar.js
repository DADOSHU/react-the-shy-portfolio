import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import "./style.css";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">

                    <a href="#main" className="logo">
                        <strong>The Shy</strong> portfolio
                    </a>
                    
                    <BtnDarkMode />
                    
                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <a href="#projects" className="nav-list__link nav-list__link--active">
                                Projects
                            </a>
                        </li>
                        <li className="nav-list__item">
                            <a href="#skills" className="nav-list__link nav-list__link--active">
                                Skills
                            </a>
                        </li>
                        <li className="nav-list__item">
                            <a href="#contacts" className="nav-list__link nav-list__link--active">
                                Contacts
                            </a>
                        </li>   
                    </ul> 

                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;