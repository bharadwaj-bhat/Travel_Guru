import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../redux/RoomInner/actions";
import { CarouselComp } from "./Carousel";
import styles from "../../Styles/RoomsInner.module.css";
import { NameHeader } from "./NameHeader";
import { NavigationBar } from "./NavigationBar";
import Loader from "react-loader-spinner";
import React from "react";
import { v4 as uuid } from "uuid";
export const DetailsCard = ({ id }) => {
  const data = useSelector((state) => state.room.data);
  const loading = useSelector((state) => state.room.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData(id));
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className={styles.DetailsCardDivWrapperOne}>
        <Loader
          type="Circles"
          color="#F47932"
          height={100}
          width={100}
          timeout={4000} //3 secs
        />
        <p>Loading... thanks for waiting</p>
      </div>
    );
  }

  return (
    <div>
      {data && (
        <React.Fragment key={uuid()}>
          <NameHeader data={data} />
          <NavigationBar />
          <CarouselComp data={data} />
        </React.Fragment>
      )}
    </div>
  );
};
