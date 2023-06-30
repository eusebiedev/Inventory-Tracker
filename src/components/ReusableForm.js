import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Coffee' required />
        <input
          type='text'
          name='origin'
          placeholder='Origin' required />
        <input
          type='text'  
          name='roast'
          placeholder='Roast' required />
        <input
          type='number'  
          name='price'
          placeholder='Price' required />
        <input
          type='number'
          name='available'
          placeholder='Available' required />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;