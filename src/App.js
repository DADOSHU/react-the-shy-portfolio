import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Main from "./pages/Main";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";
import Details from "./pages/Details";
import ScrollToTop from "./utils/scrollToTop";
import "./styles/main.css";

function App() {
  return (
	<div className="App" id="main">
		<Router>
			<ScrollToTop />

			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route path="/details/:id" element={<Details />} />
			</Routes>

			<Footer />
		</Router>
	</div>
  );
}

export default App;
