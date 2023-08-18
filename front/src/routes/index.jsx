import Login from "../views/login";
import { Router, Route } from "wouter";
import Navbar from "../components/Navbar";
import SignUp from "../views/signUp";


const AppRouter = () => {
    return (
      <Router>
        <Navbar />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Router>
    );
  };
  export default AppRouter;
