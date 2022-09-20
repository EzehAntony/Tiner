import React from "react";
import { useEffect } from "react";
import "./Start.css";
import { useNavigate } from "react-router-dom";
import { ClapSpinner } from "react-spinners-kit";

function Start() {
  const navigate = useNavigate();
  useEffect(() => {
    document
      .querySelector("meta[name='theme-color']")
      .setAttribute("content", "#F62355");

    setTimeout(() => {
      navigate("/home");
    }, 2000);
  }, []);
  return (
    <div className="startPage">
      <img src="/logo.png" alt="" />
      <ClapSpinner size={25} frontColor={"white"} />
    </div>
  );
}

export default Start;
