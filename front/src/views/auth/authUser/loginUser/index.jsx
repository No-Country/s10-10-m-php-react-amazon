import LoginStartPage from "./startPage";
import FormUser from "./formUser";
import { useState } from "react";

const LoginUser = () => {
  const [choice, setChoice] = useState();

  if (!choice) return <LoginStartPage setChoice={setChoice} />;
  else if (choice == "email") return <FormUser />;
};

export default LoginUser;
