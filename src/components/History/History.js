import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "eventsource-polyfill";

function History(props) {
  let eventSource;

  const [history, setHistory] = useState({
    colorHistory: [],
    currentColor: ""
  });

  // create an event listener when the component loads
  useEffect(() => {
    // NODE_ENV can be "production", "development", or "test"
    if (process.env.NODE_ENV === "production") {
      eventSource = new EventSource("color-events");
    } else {
      // Need to define the endpoint on the server when running the client and server locally
      // on the same machine.
      eventSource = new EventSource("http://localhost:5000/color-events");
    }

    eventSource.addEventListener("colorUpdates", e => {
      setHistory({
        colorHistory: [...JSON.parse(e.data)],
        currentColor: ""
      });
    });
  }, []);

  // set current color to the item at index 0 when colorHistory changes
  useEffect(() => {
    setHistory({
      ...history,
      currentColor: history.colorHistory[0] && history.colorHistory[0].color
    });
  }, [history.colorHistory]);

  // set color when currentColor changes
  useEffect(() => {
    props.dispatch({ type: "SET_COLOR", payload: history.currentColor || "" });
  }, [history.currentColor]);

  return (
    <div className="history-container">
      <h2>Recent Colors</h2>
        {/* Display last 10 colors */}
        {history.colorHistory.map(item => (
          <p key={item.id}>{item.color}</p>
        ))}
 
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(mapStateToProps)(History);
