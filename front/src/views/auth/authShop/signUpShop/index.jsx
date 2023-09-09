import React, { useState } from 'react'
import FormShop from './formShop/index'
import Maps from '../../authUser/signUpUser/formUser/maps'

const SignUpShop = () => {
    const [nextStep, setNextStep] = useState(false);

    if (!nextStep) return <FormShop setNextStep={setNextStep} />;
    else return <Maps />;
  };
  

export default SignUpShop
