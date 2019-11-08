import React from "react";
import "./home3.css";

function Home3() {
  return (
    <div className="home3-class">
      <div className="home3-container-class">
        {/* <img src="/images/first.jpg"></img> */}
        <div style={{ textAlign: "center", color: "white" }}>
          <h1
            style={{ fontSize: "200%", textAlign: "left", fontWeight: "bold" }}
          >
            Things to check <br></br> before we start
          </h1>
          <br></br>
          <p style={{ fontSize: "20px", textAlign: "left" }}>
            &#10004;&emsp;You have full rights to the music.
          </p>
          <p style={{ fontSize: "20px", textAlign: "left" }}>
            &#10004;&emsp;The music can be used on any platform worldwide.
          </p>
          <p style={{ fontSize: "20px", textAlign: "left" }}>
            {" "}
            {/* 10004 is v check mark , emsp is 4 spaces*/}
            &#10004;&emsp;Your press kit is complete with photos, bio and great
            music.
          </p>
          <br></br>
          <button>
            <span>Start Now</span>
          </button>
        </div>
        <div className="filler-class"></div>
        <div className="filler-class"></div>
      </div>
    </div>
  );
}

export default Home3;
