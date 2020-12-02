import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewPostForm(props) {
  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({title: event.target.title.value, body: event.target.body.value, author: event.target.author.value, id: v4()
  });
}

return (
  <React.Fragment>
    {/* <div class='card'> */}
  <ReusableForm
  formSubmissionHandler={handleNewPostFormSubmission}
  buttonText='Post!' />
  {/* </div> */}
  </React.Fragment>

  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;