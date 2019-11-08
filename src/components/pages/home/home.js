import React from "react";
import "./home.css";
import Header from "./header";

function Home() {
  return (
    <div className="home-class">
      <Header></Header>
      <div className="home-container-class">
        {/* <img src="/images/first.jpg"></img> */}
        <div style={{ textAlign: "center", color: "white"}}>
          <h1 style={{ fontSize: "200%" , textAlign: "left",fontWeight:"bold" }}>
            We want your <br></br> inspiring music
          </h1>
          <p style={{ fontSize: "70%" , textAlign: "left"}}>
            Get your music into films, videos & TV all <br /> around the world.
            Join the Artlist family.
          </p>
          <br></br>
          <button>
            <span>↓</span>
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Home;
