import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenPostClicked(props.id)}>
      <h3>{props.title}</h3>
      <p>Posted By: {props.author} on {props.date}</p>
      <p><strong>{props.body}</strong></p>
      </div>
    </React.Fragment>
  )
}

Post.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  likes: PropTypes.number,
  dislikes: PropTypes.number,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func
}

export default Post;