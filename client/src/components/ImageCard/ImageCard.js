import React from "react";
const styles = {

}

const ImageCard = props => (
  <div className = "col-2">
  <div className="card" value={props.id} onClick={()=>props.handleClick(props.id)}>
    <div className="img-container ">
      <img className= "rounded" alt={props.name} src={props.image}  />
    </div>  
   
  </div></div>
);

export default ImageCard;
