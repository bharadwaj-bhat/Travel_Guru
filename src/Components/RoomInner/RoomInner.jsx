import { BreadCrum } from "./BreadCrum";
import styles from "../../Styles/RoomsInner.module.css";
import Divider from "@material-ui/core/Divider";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../redux/RoomInner/actions";
import { DetailsCard } from "./DetailsCard";

export const RoomInner = () => {
  return (
    <div className={styles.roomsLayoutWrapper}>
      <div className={styles.roomsLayout}>
        <BreadCrum />
        <Divider />
        <DetailsCard />
      </div>
    </div>
  );
};
