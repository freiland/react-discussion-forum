export default (state = {}, action) => {
  const { title, body, author, date, likes, dislikes, id } = action;
  let tempState;
  switch (action.type) {
    case 'ADD_POST':
      return Object.assign({}, state, {
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
    case 'DELETE_POST':
      tempState = { ...state };
      delete tempState[id];
      return tempState;
    case 'ADD_LIKE':
      tempState = {...state};
      const newNumberOfLikes = tempState[id].likes + 1;
      tempState[id].likes = newNumberOfLikes;
      return tempState;
    case 'ADD_DISLIKE':
      tempState = {...state};
      const newNumberOfDislikes = tempState[id].dislikes + 1;
      tempState[id].dislikes = newNumberOfDislikes;
      return tempState;
    default:
      return state;
  }
}