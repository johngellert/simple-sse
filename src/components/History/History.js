import React, { useState } from "react";
import { connect } from "react-redux";

function History(props) {
  return (
    <div className="history-container">
        <h2>Recently Added</h2>
      <ul>
        {props.state.colors.map(item => (
          <li key={item.id}>{item.color}</li>
        ))}
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
