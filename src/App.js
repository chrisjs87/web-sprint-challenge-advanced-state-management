// import React, { Component } from "react";
import React, { useEffect } from "react";

import AddForm from "./components/AddForm";
import SmurfList from "./components/SmurfList";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { connect } from "react-redux";
import { fetchSmurfs } from "./actions";

// class App extends Component {
function App(props) {
  // componentDidMount(() => {
  // 	dispatch(fetchSmurfs())
  // })

  // const { fetchSmurfs } = props  didnt work

  // useEffect(() => {
  // 	props.dispatch(fetchSmurfs());
  // }, []);

  useEffect(() => {
    props.dispatch(fetchSmurfs());
  });

  //  render() {
  return (
    <div className="App">
      <Header />

      <main>
        <SmurfList />
        <AddForm />
      </main>
    </div>
  );
  //  }
}

// const mapActionsToProps = {
// 	fetchSmurfs: fetchSmurfs
// }

// const mapStateToProps = state => {
// 	return {
// 		smurfs: state.smurfs
// 	}
// }

export default connect(null)(App);

// , { fetchSmurfs }

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.
