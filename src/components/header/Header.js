import resume from "./../../img/cv/resume.png"
import "./style.css"

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>David</em></strong><br />
                    a frontend developer
                </h1>
                <div className="header__text">
                    <p>passion for learning and creating.</p>
                </div>
                <a href={resume} download="" className="btn">Download CV</a>
            </div>
        </header>
    );
}
 
export default Header;