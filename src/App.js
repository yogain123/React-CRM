import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Table from "./Component/Table";
import { deleteAll, getAll } from "./Redux/Actions/user";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(prevProps, prevState) {
    this.props.getAll();
  }

  deleteAll() {
    this.props.deleteAll();
  }

  render() {
    return (
      <div>
        <center>
          <h1 style={{ marginTop: "26px" }}>Welcome To CRM App</h1>
        </center>
        <div style={{ textAlign: "center", marginBottom: "15px" }}>
          <Link to="/Add" type="button" className="btn btn-primary">
            Add
          </Link>
          {"  "}
          <button
            type="button"
            className="btn btn-primary btn-md"
            onClick={event => this.deleteAll()}
          >
            Delete All
          </button>
        </div>
        <Table {...this.props} data={this.props.data} />
      </div>
    );
  }
}

function mapStateToProps({ userReducers }) {
  return {
    data: userReducers
  };
}

export default connect(mapStateToProps, { deleteAll, getAll })(App);
