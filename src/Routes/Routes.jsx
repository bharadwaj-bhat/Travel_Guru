import { Route, Switch } from "react-router-dom";
import { LandingPage } from "../Components/LandingPage/LandingPage";
import { LoginPage } from "../Components/LoginPage/LoginPage";
import { RegisterPage } from "../Components/RegisterPage/RegisterPage";

export const Routes = () => {
  return <>
    <Switch>
      <Route exact path="/"><LandingPage/></Route>
      <Route path="/login"><LoginPage/></Route>
      <Route path="/register"><RegisterPage/></Route>
  </Switch>
  </>;
};
