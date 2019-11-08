
import React from "react";
import "./advertFooterCard.css";

function advertFooterCard(props) {
  //props = imageurl,occuption,name,jobTitle
  const url = "url(" + props.imageUrl + ") ";
  console.log(url);
  return (
    <div className="advert-Footer-Card-class">
        <h2 style={{color:"#EBC929",fontSize:"70%",fontWeight:"900"}}>
            {props.title}
        </h2>
        <p style={{fontSize:"50%",fontWeight:"200"}}>
            {props.description}
        </p>
    </div>
  );
}

export default advertFooterCard;
