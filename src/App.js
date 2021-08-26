import styles from "./App.module.css";
import { NavBar } from "./Components/LandingPage/NavBar";
import { Routes } from "./Routes/Routes";
import FooterBottom from "./Components/LandingPage/FooterBottom";

function App() {
	return (
		<div className={styles.App}>
			<NavBar />
			<Routes />
			<FooterBottom />
		</div>
	);
}

export default App;
