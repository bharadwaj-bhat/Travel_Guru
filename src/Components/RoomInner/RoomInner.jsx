import { BreadCrum } from "./BreadCrum";
import styles from "../../Styles/RoomsInner.module.css";
import Divider from "@material-ui/core/Divider";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DetailsCard } from "./DetailsCard";
import { useParams } from "react-router-dom";
import { idState } from "../../redux/DatesData/actionTypes";

export const RoomInner = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(idState(id));
  }, [dispatch,id]);

  return (
    <div className={styles.roomsLayoutWrapper}>
      <div className={styles.roomsLayout}>
        <BreadCrum />
        <Divider />
        <DetailsCard id={id} />
      </div>
    </div>
  );
};
