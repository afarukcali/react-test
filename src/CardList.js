import React, { Component } from 'react';
import './trp.css';
class CardList extends Component {
constructor(props) {
    super(props);
}
    
render(){
return (
 this.props.cardData.map((cardData, index) =>
   <div key={index} className="trp-column">
   <div className="trp-card">
    <div className="trp-match">{cardData.rating}% match</div>
     <div className="trp-card-images-row">
       <div className="trp-card-div-image-1">
         <img
           src={cardData.srcs[0]} alt={cardData.alt} />
       </div>
       <div className="trp-card-images-column">
         <div className="trp-card-div-image-2">
           <img
              src={cardData.srcs[1]} alt={cardData.alt}/>
         </div>
         <div className="trp-card-div-image-3">
           <img
              src={cardData.srcs[2]} alt={cardData.alt}/>
         </div>
       </div>
     </div>
     <div className="trp-card-div-text">
    <h4 className="ui header trp-poi-title">{cardData.title}</h4>
       <h5 className="ui header trp-poi-type">{cardData.poiType}</h5> <span
         className="fa fa-star checked"></span> <span
         className="fa fa-star checked"></span>
       <span className="fa fa-star checked"></span> <span className="fa fa-star-o"></span>
       <span className="fa fa-star-o"></span> <span className="trp-poi-review">(539)</span>
       <p className="trp-poi-desc">
         {cardData.desc}
       </p>
       <div className="ui two buttons">
         <i aria-hidden="true" className="button thumbs up icon"></i>
         <i aria-hidden="true" className="button thumbs down icon"></i>
       </div>
     </div>
   </div>
 </div>
   ))}
}

export default CardList