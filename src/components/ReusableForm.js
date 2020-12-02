import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      
      <input className="form-control"
        type='text'
        name='title' 
        placeholder='Title'/> <br /><br />
      <input className="form-control"
        type='text'
        name='body' 
        placeholder='Body'/> <br /><br />
        <input className="form-control"
        type='text'
        name='author'
        placeholder='Author' /> <br /><br />
      <button className="btn btn-outline-dark btn-sm" type='submit'>{props.buttonText}</button>
      </form>
  </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;