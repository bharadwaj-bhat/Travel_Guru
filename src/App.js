
import styles from './App.module.css';
import { NavBar } from './Components/LandingPage/NavBar';
import { Routes } from './Routes/Routes';

function App() {
  return (
    <div className={styles.App}>
      <NavBar/>
      <Routes/>
    </div> 
  );
}

export default App;
