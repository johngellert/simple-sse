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

  // If the color selected is not equal to "Select" update the state with the selected color
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
      {/* User selects a value from the list */}
        <select type="text" name="colorSelect" onChange={handleSelectChange}>
          <option value="Select">Select</option>
          <option value="Red">Red</option>
          <option value="Yellow">Yellow</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          <option value="Purple">Purple</option>
          <option value="Orange">Orange</option>
        </select>
        {/* Button run the handle click function updating the state with the selected color */}
        <button onClick={handleSubmitClick}>Change</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(mapStateToProps)(Form);
