import React, { useState } from "react";
import { connect } from "react-redux";
import { addComment } from "./reducer/rootReducer";

const AddTodo = (props) => {
  const { onSubmit } = props;
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addComment({ id: 1, name: "Adding via redux", body: content });
    onSubmit?.({ content, id: Math.random() });
  };
  console.log({ props });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add New Todo:</label>
        <input type="text" onChange={handleChange} />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

const mapDispatchToProps = {
  addComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
