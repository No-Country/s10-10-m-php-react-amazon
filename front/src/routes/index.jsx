import Login from "../views/login";
import { Router, Route } from "wouter";
import BasicNavbar from "../components/BasicNavbar";
import SignUp from "../views/signUp";
import StartPage from "../views/startPage";
import Maps from "../views/maps";
const AppRouter = () => {
  return (
    <Router>
      <BasicNavbar />
      <Route path="/" component={StartPage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path='/maps' component={Maps} />
    </Router>
  );
};
export default AppRouter;