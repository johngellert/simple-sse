import React, { useState } from "react";
import { connect } from "react-redux";
import "eventsource-polyfill";

function History(props) {
  const eventSource = new EventSource("http://localhost:5000/color-events");
  eventSource.addEventListener("colorUpdates", e => {
    console.log(JSON.parse(e.data));
  });
  //   const [history, setHistory] = useState({
  //     colorHistory: []
  //   });

  //   eventSource.addEventListener("colorUpdates", e => {
  //     setHistory({
  //       colorHistory: [...JSON.parse(e.data)]
  //     });
  //   });

  //   eventSource.addEventListener("colorUpdates", e => {
  //       props.dispatch({ type: "SET_COLORS", payload: JSON.parse(e.data) });
  //     });

  return (
    <div className="history-container">
      <h2>Recently Added</h2>
      <ul>
        {props.state.colors.map(item => (
          <li key={item.id}>{item.color}</li>
        ))}
        {/* {history.colorHistory.map(item => (
          <li key={item.id}>{item.color}</li>
        ))} */}
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(mapStateToProps)(History);
