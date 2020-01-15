import React from "react";
import { connect } from "react-redux";
import { deleteData, modifyData } from "../Redux/Actions/user";

class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  delete(index) {
    this.props.deleteData(index);
  }

  modifyData(index) {
    this.props.history.push(`/add/${index}`);
  }

  getTableRowData(data) {
    return data.map((item, index) => (
      <tr key={index}>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.email}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginRight: "15px" }}
            onClick={event => this.delete(index)}
          >
            Delete
          </button>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            onClick={event => this.modifyData(index)}
          >
            Edit
          </button>
        </td>
      </tr>
    ));
  }

  render() {
    const { data } = this.props;
    return (
      <table className="table table-striped container">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{this.getTableRowData(data)}</tbody>
      </table>
    );
  }
}
export default connect(null, { deleteData, modifyData })(Table);
