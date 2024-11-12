const initState = {
  comments: [
    { id: 1, name: "LEARNING REACT AND REDUX", body: "learn react and redux" },
    { id: 2, name: "LEARNING REACT AND REDUX", body: "graphql" },
    { id: 3, name: "LEARNING REACT AND REDUX", body: "jotai" },
  ],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_COMMENT":
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment.id !== action.payload
        ),
      };
    case "ADD_COMMENT":
      return {
        ...state,
        comments: [...state.comments, { ...action.payload }],
      };
    default:
      return state;
  }
};

export default rootReducer;

export const deleteComment = (id) => {
  return {
    type: "DELETE_COMMENT",
    payload: id,
  };
};

export const addComment = (payload) => {
  console.log(payload);
  return {
    type: "ADD_COMMENT",
    payload,
  };
};
