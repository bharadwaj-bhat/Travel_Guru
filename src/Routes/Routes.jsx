import { Route, Switch } from "react-router-dom";
import { LandingPage } from "../Components/LandingPage/LandingPage";
import { LoginPage } from "../Components/LoginPage/LoginPage";

export const Routes = () => {
  return <>
    <Switch>
      <Route exact path="/"><LandingPage/></Route>
      <Route path="/login"><LoginPage/></Route>
  </Switch>
  </>;
};
