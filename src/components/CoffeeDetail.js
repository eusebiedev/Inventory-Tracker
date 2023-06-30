import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee, onClickingDelete, } = props;

  return (
    <React.Fragment>
      <h1>The Beans Details</h1>
      <h3>{coffee.name}</h3>
      <p>Origin: {coffee.origin}</p>
      <p>Roast Style: {coffee.roast}</p>
      <p>Cost per lb: {coffee.price}</p>
      <p>Available lbs: {coffee.avialable}</p>
      <button onClick={ props.onClickingEdit }>Edit Coffee</button> 
      <button onClick={ props.onCoffeeSale }>Sell a lb of Coffee</button> 
      <button onClick={()=> onClickingDelete(coffee.id) }>Delete Coffee</button>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onCoffeeSale: PropTypes.func
};

export default CoffeeDetail;
