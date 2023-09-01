import { useState } from "react";
import SignUpStartPage from "./startPage";
import FormUser from "./formUser";
const SignUpUser = () => {
    const [choice, setChoice] = useState() 

    if (!choice) return (<SignUpStartPage setChoice={setChoice}/>)
    else if (choice=="email") return (<FormUser/>)

};

export default SignUpUser;
