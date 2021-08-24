import styles from "./App.module.css";
import { BestSelling } from "./Components/LandingPage/BestSelling";
import { NavBar } from "./Components/LandingPage/NavBar";
import { TrendingDestinations } from "./Components/LandingPage/TrendingDestinations";
import { Routes } from "./Routes/Routes";

function App() {
	return (
		<div className={styles.App}>
			{/* <NavBar /> */}
			<BestSelling />
			<TrendingDestinations />
		</div>
	);
}

export default App;
