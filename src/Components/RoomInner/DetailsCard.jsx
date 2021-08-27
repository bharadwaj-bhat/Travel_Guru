import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../redux/RoomInner/actions";
import { Carousel, CarouselComp } from "./Carousel";
import { NameHeader } from "./NameHeader";
import { NavigationBar } from "./NavigationBar";

export const DetailsCard = () => {
  const data = useSelector((state) => state.room.data[0]);
  const loading = useSelector((state) => state.room.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  if (loading) {
    return <h1> Loading...</h1>;
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
