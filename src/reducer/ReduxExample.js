const { createStore } = Redux; // 1st

const initiState = {
  todos: [],
  posts: [],
};

// entire reducer function is 3rd here we do the actual manupilation
function myreducer(state = initiState, action) {
  if (action.type === "ADD_TODO") {
    return {
      ...state,
      todos: [...state.todos, action.todo],
    };
  }
  if (action.type === "ADD_POST") {
    return {
      ...state,
      posts: [...state.posts, action.post],
    };
  }
}
const store = createStore(myreducer); // 2nd

// 4th we need to subscribe to get data updated or to get data
store.subscribe(() => {
  console.log("state updated");
  console.log(store.getState());
});

// 5th in below code this is how we dispatch the data
store.dispatch({
  type: "ADD_TODO",
  todo: "butter milk",
});
store.dispatch({
  type: "ADD_TODO",
  todo: "i have some rice",
});
store.dispatch({
  type: "ADD_POST",
  post: "hey here is a new post",
});
store.dispatch({
  type: "ADD_POST",
  post: "that is the basics of redux here",
});
