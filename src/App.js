import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Table from "./Component/Table";
import { deleteAll, filterData } from "./Redux/Actions/user";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
    this.searchBarRef = React.createRef();
  }

  componentDidMount() {
    this.searchBarRef.current.focus();
  }

  deleteAll() {
    this.props.deleteAll();
  }

  handleChangeEvent(event) {
    console.log(event.target.value);
    this.setState({ email: event.target.value });
    this.props.filterData(event.target.value);
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
        <div className="form-group container">
          <label htmlFor="usr">Search By Email</label>
          <input
            ref={this.searchBarRef}
            type="text"
            className="form-control"
            value={this.state.email}
            placeholder="Email"
            onChange={event => this.handleChangeEvent(event)}
          />
        </div>

        {<Table {...this.props} />}
      </div>
    );
  }
}

function mapStateToProps({ userReducers }) {
  return {
    data: userReducers
  };
}

export default connect(mapStateToProps, { deleteAll, filterData })(App);
