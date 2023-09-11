import { Router, Route } from "wouter";
import BasicNavbar from "../components/BasicNavbar";
import Home from "../views/home";
import LoginUser from "../views/auth/authUser/loginUser";
import SignUpUser from "../views/auth/authUser/signUpUser";
import RecoverPass from "../views/auth/authUser/loginUser/recoverPass";
import SignUpShop from "../views/auth/authShop/signUpShop";
import LoginShop from "../views/auth/authShop/loginShop";
import Dashboard from "../views/dashboard";
import ItemDetailContainer from "../components/itemDetailContainer";
import Error404 from "../views/404";
import UserProfile from "../views/profile";
import Logout from "../views/logout";
import StoreManager from "../views/auth/authShop/signUpShop/formShop/storeManager";
import StoreSignUp from "../views/auth/authShop/signUpShop/formShop/storeSignUp";

const AppRouter = () => {
  return (
    <Router>
      <BasicNavbar />
      <Route path="/detail" component={ItemDetailContainer} />
      <Route path="/" component={Home} />
      <Route path="/auth/user/signup" component={SignUpUser} />
      <Route path="/auth/user/login" component={LoginUser} />
      <Route path="/auth/shop/signup" component={SignUpShop} />
      <Route path="/auth/shop/signup/store-manager" component={StoreManager} />
      <Route path="/auth/shop/signup/store-signup" component={StoreSignUp} />
      <Route path="/auth/shop/login" component={LoginShop} />
      <Route path="/recover-pass" component={RecoverPass} />
      <Route path="/detail/:id" component={ItemDetailContainer} />
      <Route path="/page-not-found" component={Error404} />
      <Route path="/user/profile" component={UserProfile} />
      <Route path="/logout" component={Logout} />
      <Route path="/dashboard/:category" component={Dashboard} />
    </Router>
  );
};
export default AppRouter;
