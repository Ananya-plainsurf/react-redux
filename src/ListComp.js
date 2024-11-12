import React from "react";
import { connect } from "react-redux";
import { deleteComment } from "./reducer/rootReducer";
import AddTodo from "./AddTodo";

const ListComp = (props) => {
  let comments = props.comments;
  //   const [comments, setComments] = useState([]);

  //   useEffect(() => {
  //     axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
  //       console.log(res);
  //       setComments(res.data.slice(0, 10));
  //     });
  //     return () => {};
  //   }, []);

  const handleDeleteOnClick = (id) => {
    // Dispatch delete action
    props.deleteComment(id);
  };

  return (
    <>
      {comments?.length ? (
        comments?.map((comment) => (
          <div
            className="post card"
            key={comment?.id}
            onClick={() => handleDeleteOnClick(comment.id)}
          >
            <div className="card-content">
              <span className="card-title">{comment?.name}</span>
              <p>{comment?.body}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="center">No Comments Yet!!!</div>
      )}
      <AddTodo />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

const mapDispatchToProps = {
  deleteComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListComp);
