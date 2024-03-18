import React from "react";
import { useNavigate } from "react-router-dom";
import userData from "./Signup";
import AgentProfile from "./AgentProfile";
import StudentProfile from "./StudentProfile";

function Profile() {
  const navigate = useNavigate();
  const handleUserProfile = () => {
    if (userData.payload.userType === "AGENT") {
      navigate(<AgentProfile />);
    }
    navigate(<StudentProfile />);
  };
  
  return 
}

export default Profile;
