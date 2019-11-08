import React from "react";
import "./homeAd.css";
import PersonCard from "../../cards/personCard";
import PersonCardBootstrap from "../../cards/personCardBootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import AdvertFooterCard from '../../cards/advertFooterCard';

function HomeAd(props) {
  return (
    <div>
              <div style={{height:"100px",width:"100%",background:"#202020"}}></div> {/*gap used to compensate between backgrounds*/}
      <h1
        style={{
          fontSize: "180%",
          textAlign: "center",
          fontWeight: "bold",
          background:"#202020",
          marginBottom:"0",
          color:"white"
        }}
      >
        Join leading artists around the world
      </h1>
      <div style={{height:"50px",width:"100%",background:"#202020"}}></div> {/*gap used to compensate between backgrounds*/}
      <div className="home-ad-class">
        <div className="home-ad-container-class">
          <div style={{ textAlign: "center", color: "white" }}>
            <div className="home-ad-cards-class">
              <PersonCardBootstrap
                imageUrl={"images/newArtist1.jpg"}
                occupation={"Musicians"}
                name={"Geva Alon"}
                jobTitle={"Rock-folk artist"}
              ></PersonCardBootstrap>
              <PersonCardBootstrap
                imageUrl={"images/newArtist2.jpg"}
                occupation={"Producers"}
                name={"Kick Lee"}
                jobTitle={"Composer-Producer"}
              ></PersonCardBootstrap>
              <PersonCardBootstrap
                imageUrl={"images/newArtist3.jpg"}
                occupation={"Composers"}
                name={"Vlad Morleo"}
                jobTitle={"Classical piano composer"}
              ></PersonCardBootstrap>
              <PersonCardBootstrap
                imageUrl={"images/newArtist4.jpg"}
                occupation={"Agents"}
                name={"Davis Absotte"}
                jobTitle={"Agent"}
              ></PersonCardBootstrap>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <h1
              style={{
                fontSize: "200%",
                textAlign: "center",
                fontWeight: "900"
              }}
            >
              Keep doing your thing
            </h1>
            <br></br>
            <div>
            <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",flexDirection:"row"}}>
                <AdvertFooterCard title={"Keep your rights"} description={"I'ts your music and you keep all the"}></AdvertFooterCard>
                <AdvertFooterCard title={"Revenue"} description={"Join the growing sync-licensing market and tap into a whole new revenue"}></AdvertFooterCard>
                <AdvertFooterCard title={"Inspire"} description={"Let music help to tell the story and be the soul of films around the world."}></AdvertFooterCard>
              </div>
              <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",flexDirection:"row"}}>
                <AdvertFooterCard title={"Non-exclusive"} description={"You can license with Artlist and still distribute/license your music anywhere else you choose."}></AdvertFooterCard>
                <AdvertFooterCard title={"Expand your reach"} description={"See your social and streaming channels grow as your music is recognized in thousands of films worldwide."}></AdvertFooterCard>
                <AdvertFooterCard title={"Creative Community"} description={"Distribute your music through one of the top music licensing platforms in the world, and be part of a select group of composers and indie"}></AdvertFooterCard>
              </div>   
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAd;
