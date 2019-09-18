import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

function Form(props) {
  const [input, setInput] = useState({
    color: "Select",
    counter: 0
  });

  const handleSelectChange = inputEvent => {
    setInput({
      ...input,
      color: inputEvent.target.value
    });
  };

  const handleSubmitClick = () => {
    if (input.color !== "Select") {
      setInput({
        ...input,
        counter: (input.counter += 1)
      });
      props.dispatch({ type: "POST_COLOR", payload: input });
    }
  };

  return (
    <div className="form-container">
      <p>Select a color</p>
        <select type="text" name="colorSelect" onChange={handleSelectChange}>
          <option value="Select">Select</option>
          <option value="Red">Red</option>
          <option value="Yellow">Yellow</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          <option value="Purple">Purple</option>
          <option value="Orange">Orange</option>
        </select>
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
