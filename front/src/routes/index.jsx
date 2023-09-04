import { Router, Route } from "wouter";
import BasicNavbar from "../components/BasicNavbar";
import Home from "../views/home";
import LoginUser from "../views/auth/authUser/loginUser";
import SignUpUser from "../views/auth/authUser/signUpUser";
import RecoverPass from "../views/auth/authUser/loginUser/recoverPass";
import SignUpShop from "../views/auth/authShop/signUpShop"
import LoginShop from "../views/auth/authShop/loginShop";
import Dashboard from "../views/dashboard";
import ItemDetailContainer from "../components/itemDetailContainer";

const AppRouter = () => {
  return (
    <Router>
      <BasicNavbar />
      <Route path="/" component={Home} />
      <Route path="/auth/user/signup" component={SignUpUser} />
      <Route path="/auth/user/login" component={LoginUser} />
      <Route path="/recover-pass" component={RecoverPass} />
      <Route path="/auth/shop/signup" component={SignUpShop} />
      <Route path="/auth/shop/login" component={LoginShop} />
      <Route path="/dashboard" component={Dashboard}/>
      <Route path='/detail/:id' component={ItemDetailContainer}/>
    </Router>
  );
};
export default AppRouter;