import React from "react";
import { useEffect } from "react";
import "./Home.css";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  useEffect(() => {
    document
      .querySelector("meta[name='theme-color']")
      .setAttribute("content", "#fff");
  }, []);
  return (
    <div className="homePage">
      {/* Header */}
      <header>
        <input type="text" placeholder="Search for Tiner" />
        <img src="/filter.svg" alt="" />
      </header>

      {/* Main div that holds the cards */}
      <div className="main">
        <Card />
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default Home;
