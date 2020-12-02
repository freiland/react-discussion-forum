import React from 'react';
import PropTypes from 'prop-types';
import NewPostForm from './NewPostForm';
import EditPostForm from './EditPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';
import { connect } from 'react-redux';

class PostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPost: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        selectedPost: null,
        editing: false
      });
    }
    else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  }

  getDate = () => {
    const unix = Date.now()
    const date = new Date(unix)
    return date.toLocaleString('en-US', {
      month: 'long', 
      day: 'numeric', 
      year: 'numeric', 
      hour: 'numeric', 
      minute: 'numeric'
    });
  }

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const { title, body, author, id } = newPost;
    const action = {
      type: 'ADD_POST',
      id: id,
      title: title,
      body: body,
      author: author,
      likes: 0,
      dislikes: 0,
      date: this.getDate()
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }
  handleDeletingPost = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_POST',
      id: id
    }
    dispatch(action);
    this.setState({selectedPost: null});
  }
  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.masterPostList[id];
    this.setState({selectedPost: selectedPost});
  }
  handleEditClick = () => {
    this.setState({editing: true});
  }
  handleEditingPostInList = (postToEdit) => {
    const { dispatch } = this.props;
    const { id, title, body, author, likes, dislikes } = postToEdit;
    const action = {
      type: 'ADD_POST',
      id: id,
      title: title,
      body: body,
      author: author,
      //likes: likes,
      //dislikes: dislikes,
      date: this.getDate()
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedPost: null
    });
  }
  handleAddingLike = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: "ADD_LIKE",
      id: id
    };
    dispatch(action);
  }
  handleAddingDislike = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: "ADD_DISLIKE",
      id: id
    };
    dispatch(action);
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; // new code

    if (this.state.editing ) {      
      currentlyVisibleState = <EditPostForm post = {this.state.selectedPost} onEditPost = {this.handleEditingPostInList}/>
      buttonText = "Return to Post List";
    }
    else if (this.state.selectedPost != null) {
      currentlyVisibleState = <PostDetail post = {this.state.selectedPost} onClickingDelete = {this.handleDeletingPost} onClickingEdit = {this.handleEditClick} onClickingLike={this.handleAddingLike} onClickingDislike={this.handleAddingDislike}/>
      buttonText = "Return to Post List";
    }

    else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm onNewPostCreation={this.handleAddingNewPostToList}/>;
      buttonText = "Return to Post List"; // new code
    } else {

      currentlyVisibleState = <PostList postList={this.props.masterPostList} onPostSelection={this.handleChangingSelectedPost} />;
      buttonText = "Add Post"; // new code
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button className="btn btn-outline-dark btn-sm" onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

PostControl.propTypes = {
  masterPostList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  let cloneList = state.masterPostList;
  let array = [];
  {Object.values(cloneList).map((post) => {
    //const {id, title, body, author, likes, dislikes, date} = post;
    array.push(post);
    console.log("Array: " + array.length);
  }
    )}
  array.sort(function(a, b) {
    return b.likes - a.likes;
  });
  let cloneTwo = {...state};
  array.forEach(element => {
    const { title, body, author, date, likes, dislikes, id } = element;
    return Object.assign(cloneTwo, state, {
      [id]: {
        title: title,
        body: body,
        author: author,
        date: date,
        likes: likes,
        dislikes: dislikes,
        id: id
      }
    });
  });
  // console.log(array);
  //   let cloneTwo = Object.assign({}, array);
   console.log("Clone TWO: " + cloneTwo);
   state.masterPostList = cloneTwo;

  return {
    
    masterPostList: state.masterPostList,
    formVisibleOnPage: state.formVisibleOnPage
  }
};
PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;