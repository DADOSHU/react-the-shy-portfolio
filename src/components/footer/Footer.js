import github from "./../../img/icons/github.svg"
import linkedin from "./../../img/icons/linkedin.svg"
import instagram from "./../../img/icons/instagram.svg"
import "./style.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="https://github.com/dadoshu" target="_blank" rel="noreferrer noopener"><img src={github} alt="github" /></a></li>
                        <li className="social__item"><a href="https://www.linkedin.com/in/daviddovzhanskiy/" target="_blank" rel="noreferrer noopener"><img src={linkedin} alt="linkedin" /></a></li>
                        <li className="social__item"><a href="https://www.instagram.com/daviddovzhanskiy/" target="_blank" rel="noreferrer noopener"><img src={instagram} alt="instagram" /></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2023 David Dovzhanskiy</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;