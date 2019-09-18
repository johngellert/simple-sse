import React, { useState } from "react";
import { connect } from "react-redux";   

function Form(props) {

  const [input, setInput] = useState({
    color: ""
  });

  const handleInputChange = inputEvent => {
    setInput({
      color: inputEvent.target.value
    });
  };

  const handleSubmitClick = () => {
    props.dispatch({ type: "POST_COLOR", payload: input });
    setInput({
      color: ""
    });
  };

  return (
    <div className="form-container">
      <p>Add your favorite color</p>
      <input
        value={input.color}
        type="text"
        name="colorInput"
        onChange={handleInputChange}
      ></input>
      <button onClick={handleSubmitClick}>Submit</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(mapStateToProps)(Form);
