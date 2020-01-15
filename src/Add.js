import React, { Component } from "react";
import { connect } from "react-redux";
import { addData, modifyData } from "./Redux/Actions/user";
class Add extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.index = this.props.match.params.index;
  }

  componentDidMount() {
    if (this.index != undefined) {
      let data = this.props.data[this.index];
      document.getElementById("firstName").value = data.firstName;
      document.getElementById("lastName").value = data.lastName;
      document.getElementById("email").value = data.email;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    let elements = Array.from(this.formRef.current.elements);
    let data = {
      firstName: elements[0].value,
      lastName: elements[1].value,
      email: elements[2].value
    };
    console.log(data);
    if (this.index != undefined) {
      this.props.modifyData(data, this.index);
    } else {
      this.props.addData(data);
    }
    this.props.history.push("/");
  }

  defaultFill() {
    document.getElementById("firstName").value = "yogendra";
    document.getElementById("lastName").value = "saxena";
    document.getElementById("email").value = "yogendrasaxena56@gmail.com";
  }

  render() {
    return (
      <form
        ref={this.formRef}
        className="container"
        style={{ marginTop: "100px" }}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            aria-describedby="emailHelp"
            placeholder="Enter First Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            aria-describedby="emailHelp"
            placeholder="Enter Last Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter Eamil"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={event => this.handleSubmit(event)}
        >
          Submit
        </button>
        <button
          style={{ marginLeft: "10px" }}
          type="button"
          className="btn btn-primary"
          onClick={event => this.defaultFill(event)}
        >
          Default Fill
        </button>
      </form>
    );
  }
}

function mapStateToProps({ userReducers }) {
  return {
    data: userReducers
  };
}
export default connect(mapStateToProps, { addData, modifyData })(Add);
