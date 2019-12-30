import React from 'react';
import CardList from './CardList'
import './trp.css';
import {attractions,restaurants} from './Actions';

function App() {
  let sliderPos = 0;
  let slideOffset = 289;

  function next(){
    if (sliderPos === attractions.length - 1) return;
    else {
      sliderPos++;
      document.getElementById("trp-slider-1").style.left =
        "-" + sliderPos * slideOffset + "px";

      document.getElementById("attraction-prev").style.display = "block";
      if (sliderPos === attractions.length - 1)
        document.getElementById("attraction-next").style.display = "none";
    }
  }

  function prev(){
    if (sliderPos === 0) {
      document.getElementById("attraction-prev").style.display = "none";
      return;
    } else {
      sliderPos--;
      document.getElementById("trp-slider-1").style.left =
        "-" + sliderPos * slideOffset + "px";

      document.getElementById("attraction-next").style.display = "block";
      if (sliderPos === 0)
        document.getElementById("attraction-prev").style.display = "none";
    } 
  }

  function nextRestaurant(){
    if (sliderPos === restaurants.length - 1) return;
    else {
      sliderPos++;
      document.getElementById("trp-slider-2").style.left =
        "-" + sliderPos * slideOffset + "px";

      document.getElementById("restaurant-prev").style.display = "block";
      if (sliderPos === restaurants.length - 1)
        document.getElementById("restaurant-next").style.display = "none";
    }
  }

  function prevRestaurant(){
    if (sliderPos === 0) {
      document.getElementById("restaurant-prev").style.display = "none";
      return;
    } else {
     sliderPos--;
      document.getElementById("trp-slider-2").style.left =
        "-" + sliderPos * slideOffset + "px";

      document.getElementById("restaurant-next").style.display = "block";
      if (sliderPos === 0)
        document.getElementById("restaurant-prev").style.display = "none";
    }
  };

  return (
    <div className="ui fluid trp-container-full">
    <div className="ui fluid container-full trp-header">
      <img className="trp-logo" src="logo.png" />
    </div>
    <div className="ui fluid container-full trp-content">
      <div className="ui fluid container-full trp-content-half">
        <div className="ui fluid container-full trp-content-1">
          <i id="attraction-next" onClick={next}
            className="button circular big angle right icon"></i>
          <i id="attraction-prev" onClick={prev}
            className="button circular big angle left icon"></i>
          <h2 className="ui header">
            <img src="logo512.png" className="ui mini image trp-logo-pin" />
            Attractions
          </h2>
          <div className="trp-row">
            <div id="trp-slider-1" className="trp-row-content">
                  <CardList cardData={attractions}></CardList>
            </div>
          </div>
        </div>
      </div>
      <div className="ui fluid container-full trp-content-half">
        <div className="ui fluid container-full trp-content-2">
          <i id="restaurant-next" onClick={nextRestaurant}
            className="button circular big angle right icon"></i>
          <i id="restaurant-prev" onClick={prevRestaurant}
            className="button circular big angle left icon"></i>
          <h2 className="ui header">
            <img src="logo512.png" className="ui mini image trp-logo-pin" />
            Restaurants
          </h2>
          <div className="trp-row">
            <div id="trp-slider-2" className="trp-row-content">
                  <CardList cardData={restaurants}></CardList>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
