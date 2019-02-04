import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';


class UserList extends Component {

  render() {
    return (
      <div>
        <h3>List of users</h3>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>User Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.post.map((m) =>
              <tr key={m.id}>
                <td>{m.name}</td>
                <td>{<Link to={{ pathname: "/viewUser/" + m.id, state: this.props.post }}><input className='btn btn-success' type='submit' value="View User Details" /></Link>}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}
export default UserList;