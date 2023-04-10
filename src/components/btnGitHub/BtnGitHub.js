import gitHubBlack from "./../../img/icons/github-black.svg"
import "./style.css"

const BtnGitHub = ({link}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer noopener" className="btn-outline">
            <img src={gitHubBlack} alt="github" />
            <p>GitHub repo</p>
        </a>
    );
}
 
export default BtnGitHub;