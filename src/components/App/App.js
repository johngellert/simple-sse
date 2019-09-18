import React from "react";
import Header from '../Header/Header';
import Form from '../Form/Form';
import History from '../History/History';
import { connect } from "react-redux";
import './App.css';

function App(props) {

  // useEffect(() => {props.dispatch({type: 'FETCH_COLORS'})}, []);

  return (
    <div className={props.state.currentColor}>
      <Header />
      <Form />
      <History />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state,
  }
}

export default connect(mapStateToProps)(App);
