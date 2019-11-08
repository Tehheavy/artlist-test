import React from "react";
import "./personCardBootstrap.css";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

function personCardBootstrap(props) {
  //props = imageurl,occuption,name,jobTitle
  const url = "url(" + props.imageUrl + ") ";
  console.log(url);
  return (
    <div className="person-card-bootstrap-class">
      <Card className="bg-transparent text-white">
        <Card.Img src={props.imageUrl} alt="Card image" />
        <Card.ImgOverlay>
          <div className="person-card-information-bootstrap-class">
              <p style={{fontWeight:"900"}}>{props.occupation}</p>
                <div>
                  <p style={{color:"yellow",marginRight:"1rem",fontWeight:"900"}}>{props.name}</p>
                  <p style={{fontWeight:"900"}}>{props.jobTitle}</p>
                </div>
          </div>

        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default personCardBootstrap;
