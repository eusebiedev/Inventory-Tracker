import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
  return(
    <React.Fragment>
      <div onClick={() => props.whenCoffeeClicked(props.id)}>
        <h3>{props.name}</h3>
        <p><em>Coffee Origin: {props.origin}</em></p>
        <p>Roast Style: {props.roast}</p>
        <p>Cost per lb: {props.price}</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  roast: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func

};

export default Coffee;