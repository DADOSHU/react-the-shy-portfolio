import GotoTop from "../components/btnGoToTop/BtnGoToTop";
import Navbar from "../components/navbar/Navbar";
import Header from "./../components/header/Header";
import Projects from "./../components/projects-section/Projects";
import Contacts from "./Contacts";
import Skills from "./Skills";

const Main = () => {
    return (
        <>
            <Navbar />
            <Header />
		    <Projects />
            <Skills />
            <Contacts />
            <GotoTop />
        </>
    );
}
 
export default Main;