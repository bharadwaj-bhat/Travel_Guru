import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import SearchIcon from "@material-ui/icons/Search";
import styles from "../../Styles/RoomsInner.module.css";
import { Link } from "react-router-dom";

export const BreadCrum = () => {
  return (
    <div className={styles.BreadCrumWrapper}>
      <Link
        to="/"
        style={{ textDecoration: "none", color: "rgb(136, 135, 135)" }}
      >
        <div className={styles.BreadCrum}>
          <ArrowBackIosIcon size="small" />
          <p className={styles.BreadCrumUnderLine}> Back to Search Results </p>
        </div>
      </Link>

      <div className={styles.BreadCrumSearchBtn}>
        <SearchIcon />
        <p> Modify Search </p>
      </div>
    </div>
  );
};
