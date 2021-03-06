import { Route, Switch } from "react-router-dom";
import { Testing } from "../Components/aTest/Testing";
import BookingLastPage from "../Components/BookingLastPage/BookingLastPage";
import HotelFilterPage from "../Components/HotelFilterPage/HotelFilterPage";
import { LandingPage } from "../Components/LandingPage/LandingPage";
import { LoginPage } from "../Components/LoginPage/LoginPage";
import { RegisterPage } from "../Components/RegisterPage/RegisterPage";
import { RoomInner } from "../Components/RoomInner/RoomInner";

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/rooms/:id">
          <RoomInner />
        </Route>
        <Route path="/hotel-search">
          <HotelFilterPage />
        </Route>
        <Route path="/tests">
          <Testing />
        </Route>
        <Route path="/payments">
          <BookingLastPage />
        </Route>
      </Switch>
    </div>
  );
};
