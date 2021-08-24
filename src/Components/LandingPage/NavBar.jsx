import Tippy from "@tippyjs/react";
import styles from "../../App.module.css"


export const NavBar = () => {
  return (
    <div>
      <div className={styles.NavBar}>
        <img
          src="https://www.travelguru.com/travelguru/resources/beetle/images/tg/travelguru-homestay-logo-199x52.png"
          alt="logo"
        />
        <button className={styles.NavButton}> Become a Host </button>
        <Tippy content="testing" placement="bottom">
          <p> Help </p>
        </Tippy>
        <p> Offers </p>
        <p> My Accounts </p>
      </div>
    </div>
  );
};
