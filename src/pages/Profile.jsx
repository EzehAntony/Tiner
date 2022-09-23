import React, { useEffect } from "react";
import "./Profile.css";
import { useLocation } from "react-router-dom";

function Profile() {
  const location = useLocation();

  return <div className="profilePage">Profile</div>;
}

export default Profile;
