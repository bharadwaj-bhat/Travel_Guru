import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../redux/RoomInner/actions";
import { Carousel, CarouselComp } from "./Carousel";
import { NameHeader } from "./NameHeader";
import { NavigationBar } from "./NavigationBar";
import Loader from "react-loader-spinner";

export const DetailsCard = ({ id }) => {
  const data = useSelector((state) => state.room.data);
  const loading = useSelector((state) => state.room.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData(id));
  }, []);

  if (loading) {
    return (
      <div
        style={{
          margin: "150px auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "200px",
        }}
      >
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
        <>
          <NameHeader data={data} />
          <NavigationBar />
          <CarouselComp data={data} />
        </>
      )}
    </div>
  );
};
