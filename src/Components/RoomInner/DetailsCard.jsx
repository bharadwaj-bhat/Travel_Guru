import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../redux/RoomInner/actions";
import { Carousel, CarouselComp } from "./Carousel";
import { NameHeader } from "./NameHeader";
import { NavigationBar } from "./NavigationBar";

export const DetailsCard = () => {
  const data = useSelector((state) => state.room.data);
  const loading = useSelector((state) => state.room.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
    console.log(data);
  }, []);

  return (
    <div>
      {loading && <h1> ...loading </h1>}
      <NameHeader />
      <NavigationBar />
      <CarouselComp />
    </div>
  );
};
