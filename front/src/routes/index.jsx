import { Router, Route } from "wouter";
import BasicNavbar from "../components/BasicNavbar";
import Home from "../views/home";
import LoginUser from "../views/auth/authUser/loginUser";
import SignUpUser from "../views/auth/authUser/signUpUser";
import RecoverPass from "../views/auth/authUser/loginUser/recoverPass";
const AppRouter = () => {
  return (
    <Router>
      <BasicNavbar />
      <Route path="/" component={Home} />
      <Route path="/auth/user/signup" component={SignUpUser} />
      <Route path="/auth/user/login" component={LoginUser} />
      <Route path="/recover-pass" component={RecoverPass} />
    </Router>
  );
};
export default AppRouter;
