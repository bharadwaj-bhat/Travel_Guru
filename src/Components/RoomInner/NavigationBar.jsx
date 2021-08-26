import styles from "../../Styles/RoomsInner.module.css";

export const NavigationBar = () => {
  return (
    <div className={styles.navigationBar}>
      <p> PHOTOS </p>
      <p> ROOMS </p>
      <p> REVIEWS </p>
      <p> MAP </p>
      <p> AMENITIES </p>
      <p> HOTEL POLICIES </p>
    </div>
  );
};
