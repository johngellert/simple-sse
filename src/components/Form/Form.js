import React, { useState } from "react";
import { connect } from "react-redux";   

function Form(props) {
  // const eventSource = new EventSource("http://localhost:5000/color-events");

  // // useEffect(eventSource.onmessage = (e) => {console.log("blue")}, []);
  // // eventSource.addEventListener("colorUpdates", e => {console.log(e.data)});

  // useEffect(() => {
  //   eventSource.addEventListener("colorUpdates", e => {
  //     // console.log(e.data);
  //     updateColors(e.data);
  //   });
  // }, []);

  // const updateColors = arrayOfColors => {
  //   // console.log(arrayOfColors);
  // };

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
