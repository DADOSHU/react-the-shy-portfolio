import {useParams} from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import NavbarHome from "../components/navbar-details/NavbarHome";
import {projects} from "../helpers/projectsList";

const Details = () => {
    const {id} =  useParams();
    const project = projects[id];

    return (
        <>
            <NavbarHome />

            <main className="section">
                <div className="container">
                    <div className="project-details">
                        <h1 className="title-1 title-indent">{project.title}</h1>
                        <img src={project.img} alt={project.title} className="project-details__img" />
                        <div className="project-details__desc">
                            <p>{project.skills}</p>
                        </div>
                        {project.gitHubLink && (
                            <BtnGitHub link={project.gitHubLink}/>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}
 
export default Details;