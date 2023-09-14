import { useState } from "react";
import Form from "./form/index";
import Maps from "./maps";

const FormUser = () => {
  const [nextStep, setNextStep] = useState(false);

  if (!nextStep) return <Form setNextStep={setNextStep} />;
  else return <Maps />;
};

export default FormUser;
