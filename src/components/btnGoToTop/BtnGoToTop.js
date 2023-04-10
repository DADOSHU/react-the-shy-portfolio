import arrow from "./../../img/icons/arrow.svg";
import "./style.css";


export default function GotoTop() {
	window.onscroll = () => {
		scrollFunction();
	};

	const scrollTopFunction = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const scrollFunction = () => {
		var mybutton = document.getElementById('btn-top');
		if (
			document.body.scrollTop > 760 ||
			document.documentElement.scrollTop > 760
		) {
			if (mybutton) {
				mybutton.style.display = 'block';
			}
		} else {
			if (mybutton) {
				mybutton.style.display = 'none';
			}
		}
	};

	return (
		<div>
            <button className="btn-top" id="btn-top" onClick={scrollTopFunction}>
                <img src={arrow} alt="Light mode" className="btn-top__icon" />
            </button>
		</div>
	);
}