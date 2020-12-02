import postListReducer from './../reducers/post-list-reducer';

describe('postListReducer', () => {
  let action;
  const currentState = {
    1: {
      title: "Great Day",
      body: "Today is sooo awesome",
      author: "Me",
      date: "December 1st, 2020",
      likes: 3,
      dislikes: 1,
      id: 1
    },
    2: {
      title: "Sad Day",
      body: "Today is sooo terrible",
      author: "Also me",
      date: "December 2nd, 2020",
      likes: 2,
      dislikes: 12,
      id: 2
    }
  }

    const postData = {
      title: "Great Day",
      body: "Today is sooo awesome",
      author: "Me",
      date: "December 1st, 2020",
      likes: 3,
      dislikes: 1,
      id: 1
    };

    test('Return default state if no action is given', () => {
      expect(postListReducer({}, {type: null})).toEqual({});
    });
    test("Should add new post correctly", () => {
      const {title, body, author, date, likes, dislikes, id} = postData;
      action = {
        type: 'ADD_POST',
        title: title,
        body: body,
        author: author,
        date: date,
        likes: likes,
        dislikes: dislikes,
        id: id
      };
    })
  });
