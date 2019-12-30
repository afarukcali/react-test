import React, { Component } from 'react';
import './trp.css';
import { Card } from '@tripian/react/lib';
import '@tripian/react/lib/tripian.min.css';

class CardList extends Component {
constructor(props) {
    super(props);
}
    
render(){
return (
 this.props.cardData.map((cardData, index) =>
   <div key={index} className="trp-column">
      <Card poiId={cardData.poiId} srcs={cardData.srcs} alt={cardData.alt} title={cardData.title} rating={cardData.rating} desc={cardData.desc} poiType={cardData.poiType} />
   </div>
   ))}
}

export default CardList