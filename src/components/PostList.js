import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props) {
  return (
    <React.Fragment>

      {Object.values(props.postList).map((post) =>
        <Post 
          whenPostClicked = { props.onPostSelection }
          title={post.title}
          body={post.body}
          author={post.author}
          likes={post.likes}
          dislikes={post.dislikes}
          date={post.date}
          id={post.id}
          key={post.id}/>
      )}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func
};

export default PostList;