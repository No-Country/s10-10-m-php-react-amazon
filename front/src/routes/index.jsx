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
import PaymentOption from "../components/paymentMethod/paymentOption";
import CreditCard from "../components/paymentMethod/creditCard";
import MapProfile from "../views/profile/components/MapProfile";
import ActivePacks from "../views/profile/components/ActivePacks";
import SelledPacks from "../views/profile/components/SelledPacks";
import { CardProfile } from "../components/CardProfile";
import Purchases from "../views/profile/PersonProfile/components/purchases";
import EditProfile from "../views/profile/components/EditProfile";
import FormUser from "../views/auth/authUser/signUpUser/formUser";
import ConfirmedPayment from "../components/paymentMethod/creditCard/ConfirmedPayment";
import errorPayment from "../components/paymentMethod/creditCard/errorPayment";
import PurchaseById from "../views/profile/PersonProfile/purchases/cardPurchases/purchaseDetail";
import { Modal } from "../components/BasicNavbar/modal/Modal";
import ModalConfirmPickup from "../views/profile/PersonProfile/purchases/cardPurchases/purchaseDetail/modalConfirmPickup";

const AppRouter = () => {
  return (
    <Router>
      <BasicNavbar />
      <Route path="/detail" component={ItemDetailContainer} />
      <Route path="/" component={Home} />
      <Route path="/user/profile/purchases" component={Purchases} />
      <Route path="/user/profile/purchases/confirm" component={ModalConfirmPickup} />
      <Route path="/user/profile/purchases/detail:id" component={PurchaseById} />
      <Route path="/payment" component={PaymentOption} />
      <Route path="/payment/creditCard" component={CreditCard} />
      <Route path="/payment/creditCard/ConfirmedPayment" component={ConfirmedPayment} />
      <Route path="/payment/creditCard/errorPayment" component={errorPayment} />
      <Route path="/auth/user/signup" component={SignUpUser} />
      <Route path="/auth/user/login" component={LoginUser} />
      <Route path="/auth/user/login/payment" component={FormUser} />
      <Route path="/auth/shop/signup" component={SignUpShop} />
      <Route path="/auth/shop/signup/store-manager" component={StoreManager} />
      <Route path="/auth/shop/signup/store-signup" component={StoreSignUp} />
      <Route path="/auth/shop/login" component={LoginShop} />
      <Route path="/recover-pass" component={RecoverPass} />
      <Route path="/detail/:id" component={ItemDetailContainer} />
      <Route path="/detail/profile/:id" component={CardProfile} />
      <Route path="/page-not-found" component={Error404} />
      <Route path="/user/profile" component={UserProfile} />
      <Route path="/logout" component={Logout} />
      <Route path="/dashboard/:category" component={Dashboard} />
      <Route path="/user/profile/map" component={MapProfile} />
      <Route path="/user/profile/activepacks" component={ActivePacks} />
      <Route path="/user/profile/selledpacks" component={SelledPacks} />
      <Route path="/user/profile/edit" component={EditProfile} />
    </Router>
  );
};
export default AppRouter;
