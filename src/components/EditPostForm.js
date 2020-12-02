import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditPostForm (props) {
  const { post } = props;

  function handleEditPostFormSubmission(event) {
    event.preventDefault();
    props.onEditPost({author: event.target.author.value, title: event.target.title.value, body: event.target.body.value, likes: post.likes, dislikes: post.dislikes, id: post.id});
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler = {handleEditPostFormSubmission}
        buttonText="Update Post" />
    </React.Fragment>
  );
}

EditPostForm.propTypes = {
  onEditTicket: PropTypes.func
};
export default EditPostForm;