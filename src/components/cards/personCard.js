import React from "react";
import "./personCard.css";

function PersonCard(props) {
  //props = imageurl,occuption,name,jobTitle
  const url = "url(" + props.imageUrl + ") ";
  console.log(url);
  return (
    <div className="person-card-class">
      <a href="#" style={{textDecoration:"none"}}>
        <div style={{ backgroundImage: url}}>
          <div className="">
            <h1 style={{color:"white"}}>{props.occupation}</h1>
            <div>
              <p style={{color:"#EBC929"}}>{props.name}</p>
              <p  style={{color:"white"}}>{props.jobTitle}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default PersonCard;
