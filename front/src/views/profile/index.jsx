import { Spinner } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { navigate } from "wouter/use-location";
import { getUserById } from "../../api/userApi";
import BusinessProfile from "./BusinessProfile";
import PersonProfile from "./PersonProfile";

const UserProfile = () => {
  const user = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getUserById(user.id, user.token)
      .then((response) => {
        if (response.status == 200) {
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        navigate("/");
      });
  });

  if (isLoading)  
    return (
      <div className="flex justify-center w-full items-center h-screen">
        <Spinner />        
      </div>
    );
  else if (user.type == "person")
    return (
      <div className="flex justify-center w-full">
        <PersonProfile user={user} />
      </div>
    );
  else if (user.type == "business")
    return (
      <div className="flex justify-center w-full">
        <BusinessProfile user={user} />
      </div>
    );
};

export default UserProfile;
