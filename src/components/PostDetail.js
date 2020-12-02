import React from "react";
import PropTypes from "prop-types";

function PostDetail(props) {
  const { post, onClickingDelete, onClickingEdit, onClickingLike, onClickingDislike } = props;

  return (
    <React.Fragment>
      <h2>{post.title}</h2>
      <h3>{post.author} - {post.date}</h3>
      <p><em>{post.body}</em></p>
      <p>Likes:{post.likes} Dislikes:{post.dislikes}</p>
      <button className="btn btn-outline-dark btn-sm" onClick={ props.onClickingEdit }>Update Post</button>
      <button className="btn btn-outline-dark btn-sm" onClick={() => onClickingDelete(post.id) }>Remove Post</button>
      <button className="btn btn-outline-dark btn-sm" onClick={() => onClickingLike(post.id) }>Like</button>
      <button className="btn btn-outline-dark btn-sm" onClick={() => onClickingDislike(post.id) }>Dislike</button>
      <hr/>
    </React.Fragment>
  )
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingLike: PropTypes.func,
  onClickingDislike: PropTypes.func
};

export default PostDetail;