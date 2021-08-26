import { Route, Switch } from "react-router-dom";
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
        <Route path="/roomsDemo">
          <RoomInner />
        </Route>
        <Route path="/hotel-search">
          <HotelFilterPage />
        </Route>
      </Switch>
    </div>
  );
};
