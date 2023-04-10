import Project from "../project-card/Project"
import {projects} from "../../helpers/projectsList";
import "./style.css"

const Projects = () => {
    return (
        <main className="section" id="projects">
			<div className="container">
				<h2 className="title-1">Projects</h2>
				<ul className="projects">

					{projects.map((project) => {
						return (
							<Project key={project.id} title={project.title} img={project.img} index={project.id} />
						)
					})}

				</ul>
			</div>
		</main>
    );
}
 
export default Projects;